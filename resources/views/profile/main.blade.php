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
            @include('profile.rightmenu')
        </div>
    </div>
@endsection