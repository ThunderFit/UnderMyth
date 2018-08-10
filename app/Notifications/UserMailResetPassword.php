<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\Mailer\MailMessage;

class UserMailResetPassword extends Notification
{
    use Queueable;

    public $token;

    public function __construct($token)
    {
        $this->token = $token;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject( config('app.name', 'UnderMyth') . ' || Восстановление пароля')
                    ->action('Восстановить пароль', route('profileChangePasswordGet', ['token' => $this->token]))
                    ->line('Спасибо, что пользуетесь нашими сервисами!');
    }

    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
