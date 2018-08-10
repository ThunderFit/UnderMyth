<?php

namespace App\Hashers;

use \Illuminate\Contracts\Hashing\Hasher;

class AuthMeHasher implements Hasher
{
    protected $chars = [];

    const SALT_LENGTH = 16;

    public function make($value, array $options = [])
    {
        $salt = self::generateSalt();

        return '$SHA$' . $salt . '$' . hash('sha256', hash('sha256', $value) . $salt);
    }

    public function check($value, $hashedValue, array $options = [])
    {
        $parts = explode('$', $hashedValue);

        return count($parts) === 4 && $parts[3] === hash('sha256', hash('sha256', $value) . $parts[2]);
    }

    public function needsRehash($hashedValue, array $options = []){}

    public function generateSalt()
    {
        $this->createChars();
        $maxCharIndex = count($this->chars) - 1;
        $salt = '';

        for ($i = 0; $i < self::SALT_LENGTH; ++$i) {
            $salt .= $this->chars[mt_rand(0, $maxCharIndex)];
        }

        return $salt;
    }

    public function createChars()
    {
        if (empty($this->chars))
            $this->chars = array_merge(range('0', '9'), range('a', 'f'));
        return $this->chars;
    }
}