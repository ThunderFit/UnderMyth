<!DOCTYPE html>
<html lang="ru">
@include('layouts.head')
<body>
    <div id="app">
        @include('layouts.topmenu')
        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="/js/app.js"></script>
</body>
</html>
