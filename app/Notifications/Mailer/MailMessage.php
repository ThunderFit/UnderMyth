<?php

namespace App\Notifications\Mailer;

use Illuminate\Notifications\Messages\MailMessage as Messages;

class MailMessage extends Messages
{

    public $view = 'notification.email.resetPassword';

    public $from = ['info@UnderMyth.ru'];

}
