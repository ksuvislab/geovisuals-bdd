
let $loading_screen = $('#loading');

export function view_show_loading()
{
    return $loading_screen.css({ display: 'flex '});
}

export function view_close_loading()
{
    return $loading_screen.hide();
}