@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Версионность</div>
                    <div class="panel-body">
                    @if (0 < count($versions->toArray()))
                        @include('parts.list.main', ['listing' => $versions->toArray()])
                    @else
                        Информация по версионности будет позже
                        <br>
                        <br>
                        Следите за обновлениями.
                    @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection