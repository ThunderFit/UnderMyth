<?php

namespace App\Admin\Controllers;

use Encore\Admin\Controllers\Dashboard;
use Encore\Admin\Layout\Column;
use Encore\Admin\Layout\Content;
use Encore\Admin\Layout\Row;

class HomeController extends BaseController
{
    public function index(Content $content)
    {
        return $content
            ->header('Доска')
            ->description('Управляй и властвуй')
//            ->row(Dashboard::title())
            ->row(function (Row $row) {

                $row->column(4, function (Column $column) {
                    $column->append(Dashboard::environment());
                });
                /*
                    $row->column(4, function (Column $column) {
                        $column->append(Dashboard::extensions());
                    });

                    $row->column(4, function (Column $column) {
                        $column->append(Dashboard::dependencies());
                    });
                */
            });
    }
}
