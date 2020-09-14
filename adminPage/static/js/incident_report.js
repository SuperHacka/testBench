/* -------------------------------------------------------------------------- */
/*                             INCIDENT REPORT JS                             */
/* -------------------------------------------------------------------------- */

/* ---------------- SUMMERNOTE WYSIWYG EDITOR INITIALISATION ---------------- */

$(document).ready(function () {
    $('#summernote').summernote({
        height: 200, // set editor height
        minHeight: null, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        // focus: true // set focus to editable area after initializing summernote
        placeholder: 'Description of incident',
    });

});

/* ------------------------------ SLA COUNTDOWN ----------------------------- */

$(document).ready(function () {
    $(function () {
        // set the date we're counting down to
        var target_date = new Date('September, 3, 2020').getTime();

        // variables for time units
        var days, hours, minutes, seconds;

        // get tag element
        var countdown = document.getElementById('countdown');

        // update the tag with id "countdown" every 1 second
        setInterval(function () {

            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            //     days = parseInt(seconds_left / 86400);
            //     seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600, 10);
            var hours_str, mins_str, secs_str = "";
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60, 10);
            seconds = parseInt(seconds_left % 60, 10);

            if (hours < 10)
                hours_str = "0" + hours;
            else
                hours_str = hours;

            if (minutes < 10)
                mins_str = "0" + minutes;
            else
                mins_str = minutes;

            if (seconds < 10)
                secs_str = "0" + seconds;
            else
                secs_str = seconds;

            // format countdown string + set tag value
            countdown.innerHTML = '<strong style="font-size: 24px;"><span class="hours">' + hours_str + '<label>:</label></span><span class="minutes">'
                + mins_str + '<label>:</label></span><span class="seconds">' + secs_str + '<label></label></span></strong>';

        }, 1000);
    });
});

/* ------------------------ MULTI-LEVEL DROPDOWN MENU ----------------------- */

$(document).ready(function () {
    // $(document).on('click', '.dropdown-menu', function (e) {
    //     e.stopPropagation();
    // });

    // make it as accordion for smaller screens
    if ($(window).width() < 992) {
        $('.dropdown-menu a').click(function (e) {
            e.preventDefault();
            if ($(this).next('.submenu').length) {
                $(this).next('.submenu').toggle();
            }
            $('.dropdown').on('hide.bs.dropdown', function () {
                $(this).find('.submenu').hide();
            })
        });
    }

});

$(".dropdown-item").click(function () {
    filter = $(this).attr("data-custom-id");
    filter_type = $(this).attr("id");
    console.log(document.getElementById(filter_type).innerHTML);

    // OPTIMISED CODE
    document.getElementById("sg-header").innerHTML = document.getElementById(filter_type).innerHTML;

});

// function filterFunction() {
// 	var input, filter, a, i;
// 	input = document.getElementById("filter-dropdown-search");
//     filter = input.value.toUpperCase();

//     div = document.getElementById("sg-filter");
//     a = div.getElementsByTagName("a");

// 	for (i = 0; i < a.length; i++) {
//         txtValue = a[i].textContent || a[i].innerText;
//         console.log(txtValue);
// 		if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 			a[i].style.display = "";
// 		} else {
// 			a[i].style.display = "none";
// 		}
//     }
// }

// Support Group and Assigned To
