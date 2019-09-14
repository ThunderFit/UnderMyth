<div class="table">
    @foreach($versions as $model)
        <div class="table-row">
            <div class="table-row-head">{{$model['name']}}</div>
            <div class="table-row-body">{!!$model['detail_text']!!}</div>
            <div class="table-row-foot">
                <div class="table-row-foot-left floatleft">
                    {{$model['tag']}}
                </div>
                <div class="table-row-foot-right floatright">
                    {{$model['created_at']}}
                </div>
            </div>
        </div>
    @endforeach
</div>