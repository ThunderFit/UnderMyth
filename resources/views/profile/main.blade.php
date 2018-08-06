@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="panel panel-default">
                    <div class="panel-heading">Профиль</div>
                    <div class="panel-body">
                        Страница профиля.
                        <br>
                        <br>
                        Ты авторизовался.
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">Навигация</div>
                    <div class="panel-body">
                        <a class="btn btn-default col-md-12" href="/contacts">Контакты</a>
                        <a class="btn btn-default col-md-12" href="/rules">Правила</a>
                        <a class="btn btn-default col-md-12" href="/info">Информация</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection