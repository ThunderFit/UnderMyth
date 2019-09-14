<?php

namespace App\Admin\Controllers\Lists;

use App\Admin\Controllers\BaseController;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use App\Models\Version;
use \Closure;

class VersionController extends BaseController
{
    use HasResourceActions;

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        return $content
            ->header('Версионность')
            ->description('Добавление версионных изменений')
            ->body($this->grid());
    }

    /**
     * Show interface.
     *
     * @param mixed   $id
     * @param Content $content
     * @return Content
     */
    public function show($id, Content $content)
    {
        return $content
            ->header('Детальная страница версии')
            ->description(' ')
            ->body($this->detail($id));
    }

    /**
     * Edit interface.
     *
     * @param mixed   $id
     * @param Content $content
     * @return Content
     */
    public function edit($id, Content $content)
    {
        return $content
            ->header('Редактирование версии')
            ->description(' ')
            ->body($this->form()->edit($id));
    }

    /**
     * Create interface.
     *
     * @param Content $content
     * @return Content
     */
    public function create(Content $content)
    {
        return $content
            ->header('Публикация новой версии')
            ->description(' ')
            ->body($this->form());
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $model = new Version();
        $grid = new Grid($model);

        $grid->id('ID')->sortable();
        $grid->active('Активность');
        $grid->name('Название');
        $grid->tag('Версия');
        $grid->created_at('Дата создания');
        $grid->updated_at('Дата обновления');

        $grid->model()->orderBy('created_at', 'desc');

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed   $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Version::findOrFail($id));

        $show->id('ID');
        $show->active('Активность');
        $show->name('Название');
        $show->tag('Версия');
        $show->detail_text('Изменения');
        $show->created_at('Дата создания');
        $show->updated_at('Дата обновления');

        return $show;
    }

    /**
     * @param \Closure|null $callback
     * @return Form
     */
    protected function form(Closure $callback = null)
    {
        $form = new Form(new Version, $callback);
        $states = [
            'on'  => ['value' => 1, 'text' => 'Да', 'color' => 'success'],
            'off' => ['value' => 0, 'text' => 'Нет', 'color' => 'danger'],
        ];
        $form->switch('active', 'Активность')->states($states);
        $form->text('name', 'Название');
        $form->text('tag', 'Версия');
        $form->textarea('detail_text', 'Изменения');
        return $form;
    }
}
