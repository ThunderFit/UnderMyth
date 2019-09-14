<?php

if (! function_exists('isRegisterOn')) {

    function isRegisterOn()
    {
        return !!env('REGISTER_ENABLED');
    }
}

if (! function_exists('getRegisterValidateRules')) {

    function getRegisterValidateRules()
    {
        return [
            'username' => 'required|min:6|max:16',
            'password' => 'required|min:6|max:16|confirmed',
        ];
    }
}

if (! function_exists('getCurrentVersion')) {

    function getCurrentVersion()
    {
        return array_get((new \App\Models\Version())->where(['active' => 1])->latest()->limit(1)->get()->first(), 'tag', config('view.version', 'v1'));
    }
}