<div class="panel panel-default">
    <div class="panel-heading w-rs-title"><a href="{{ $permalink }}">{{ $title }}</a></div>
    <div class="panel-body">
        <div class="w-rs-container">
            @foreach ($items as $item)
                <div class="w-rs-item">
                    <a href="{{ $item->get_permalink() }}">{{ $item->get_title() }}</a>
                    <div class="w-rs-item-content">{{ $item->get_description() }}</div>
                    <div class="w-rs-item-posted">Posted on {{ $item->get_date('j F Y | g:i a') }}</div>
                </div>
            @endforeach
        </div>
    </div>
</div>