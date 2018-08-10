<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Навигация</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name', 'UnderMyth') }}
            </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="{{ route('contacts') }}">Контакты</a></li>
                <li><a href="{{ route('rules') }}">Правила</a></li>
                <li><a href="{{ route('info') }}">Информация</a></li>
                <li><a href="{{ route('vklink') }}">Мы Вконтакте</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                @if (Auth::guest())
                    <li><a href="{{ route('authGet') }}">Войти</a></li>
                    @if (isRegisterOn())
                        <li><a href="{{ route('registerGet') }}">Зарегистрироваться</a></li>
                    @endif
                @else
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ Auth::user()->nick }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li><a href="{{ route('profileGet') }}">Профиль</a> </li>
                            <li>
                                <a href="{{ route('logoutPost') }}"
                                    onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                    Выйти
                                </a>

                                <form id="logout-form" action="{{ route('logoutPost') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</nav>
