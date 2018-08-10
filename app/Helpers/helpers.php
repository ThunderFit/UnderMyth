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
            'nick' => 'required|min:6|max:16',
            'password' => 'required|min:6|max:16|confirmed',
        ];
    }
}