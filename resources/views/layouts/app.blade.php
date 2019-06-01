<!DOCTYPE html>
<html lang="ru">
@include('layouts.head')
<body>
    <div id="app">
        @include('layouts.topmenu')
        @yield('content')
    </div>

    @include('layouts.footer')
</body>
</html>
