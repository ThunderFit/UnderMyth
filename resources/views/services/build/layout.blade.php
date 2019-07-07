@extends('layouts.app')

@section('content')
    <div class="container services-container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Билд (тестовый период)</div>
                    <div class="panel-body">
                        @yield('service-content')
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection