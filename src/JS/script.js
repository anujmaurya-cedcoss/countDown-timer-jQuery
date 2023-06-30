$(document).ready(function () {
    $("#clock").on('click', function () {
        $('#clock').prop('disabled', true)
        let interval = setInterval(function () {
            let timer2 = $("#time").val();
            let timer = timer2.split(':');
            let minutes = 1 * timer[0] ? 1*timer[0] : 0;
            let seconds = 1 * timer[1] ? 1*timer[1] : 0;
            --seconds;

            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            if ((minutes == 0 && seconds == 0) || minutes < 0 || seconds < 0) {
                alert('time up !');
                clearInterval(interval);
                $('#time').val('00' + ':' + '00');
                $('#clock').prop('disabled', false)
            } else
                $('#time').val(minutes + ':' + seconds);
        }, 1000);
    });

    $("#reset").on('click', function () {
        $('#time').val('00' + ':' + '00');
    });
});
