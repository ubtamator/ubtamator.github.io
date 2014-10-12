/**
 * Created by lijianying on 14-10-12.
 */
function blink_terminal() {
    $(".sudoblock .cursor").fadeTo(100, 0, function () {
        setTimeout(function () {
            $(".sudoblock .cursor").fadeTo(100, 1, setTimeout.bind(null, blink_terminal, 400))
        }, 400)
    })
}

blink_terminal();