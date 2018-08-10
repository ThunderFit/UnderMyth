@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="panel panel-default">
                    <div class="panel-heading">Новости</div>
                    <div class="panel-body">
                        Сервис находится на стадии разработки.
                        <br>
                        <br>
                        Следите за обновлениями.
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                @include('widgets.vk.news')
            </div>
        </div>
    </div>
@endsection