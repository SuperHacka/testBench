/* -------------------------------------------------------------------------- */
/*                            INCIDENT OVERVIEW JS                            */
/* -------------------------------------------------------------------------- */

/* -------------------------- INITIALISE DATATABLE -------------------------- */

$(document).ready(function () {
	var table = $("#overview-table").DataTable({
		lengthMenu: [
			[5, 10, 20, -1],
			[5, 10, 20, "All"],
		],
		scrollX: true,
	});

	// Toggle via checkbox
	$("input.toggle-vis").on("change", function (e) {
		e.preventDefault();

		// Get the column API object
		var column = table.column($(this).attr("data-column"));

		// Toggle the visibility
		column.visible(!column.visible());
	});

	// Toggle via link
	// $('a.toggle-vis').on('check', function (e) {
	//     e.preventDefault();

	//     // Get the column API object
	//     var column = table.column( $(this).attr('data-column') );

	//     // Toggle the visibility
	//     column.visible( ! column.visible() );
	// } );

});

/* ------------------- CLICKABLE TABLE ROW (LINK REDIRECT) ------------------ */

// Clickable Table Row (leads to outside link using data-href)
// Alternative 1: Universal clickable rows
$(document).ready(function ($) {
	$(document.body).on("click", "tr[data-href]", function () {
		window.location.href = this.dataset.href;
	});

	$(document.body).on("click", "tr[data-href]", function () {
		window.location.href = this.dataset.href;
	});
});

// Alternative (specifiying clickable rows using using class)
// $(document).ready(function($) {
//     $(".table-row").click(function() {
//         window.document.location = $(this).data("href");
//     });
// });

/* ---------------------- CUSTOM SEARCH BAR (OBSOLETE) ---------------------- */

$(document).ready(function () {
	$("#search-input").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#incident-table tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});

/* ----------------------- CLICKABLE TABLE ROW (MODAL) ---------------------- */

$(document).on("click", "#modal-pop", function () {
	$("#modal_aside_left").modal("show");
	// setTimeout(function () {
	//     $('#modal_aside_left').modal('show');
	// }, 500);
});

/* -------------------- CLICKABLE TABLE ROW (OFF-CANVAS) -------------------- */

$(document).on("click", "#off-canvas-pop", function () {
	$(".screen-overlay").toggleClass("show");
	$("#my_offcanvas2").toggleClass("show");
});

$(document).ready(function () {
	$("[data-trigger]").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var offcanvas_id = $(this).attr("data-trigger");
		$(offcanvas_id).toggleClass("show");
		$("body").toggleClass("offcanvas-active");
		$(".screen-overlay").toggleClass("show");
	});

	// Close menu when pressing ESC
	$(document).on("keydown", function (event) {
		if (event.keyCode === 27) {
			$(".offcanvas").removeClass("show");
			$("body").removeClass("overlay-active");
		}
	});

	// Close menu when either button or screen overlay is clicked
	$(".btn-close, .screen-overlay").click(function (e) {
		$(".screen-overlay").removeClass("show");
		$(".offcanvas").removeClass("show");
		$("body").removeClass("offcanvas-active");
	});
});

/* ----------------------- TABLE FILTER DROPDOWN MENU ----------------------- */

$(".dropdown-item").click(function () {
	let table, rows, cells, country, filter;
	table = document.getElementById("overview-table");
	rows = table.getElementsByTagName("tr");
	filter = $(this).attr("data-custom-id");
	filter_type = $(this).attr("id");

	// OPTIMISED CODE
	if (filter_type == "filter-state")
		document.getElementById("incident-header").innerHTML =
			filter + " Incidents <i class='fas fa-caret-down fa-xs'></i>";
	else if (filter_type == "filter-assigned-to")
		document.getElementById("incident-header").innerHTML =
			"My Open Incidents <i class='fas fa-caret-down fa-xs'></i>";
	else if (filter_type == "filter-priority")
		document.getElementById("incident-header").innerHTML =
			filter + " Incidents <i class='fas fa-caret-down fa-xs'></i>";

	// Loops through rows and hides those with countries that don't match the filter
	for (let row of rows) {
		// `for...of` loops through the NodeList
		cells = row.getElementsByTagName("td");

		if (filter_type == "filter-state") country = cells[1] || null;
		else if (filter_type == "filter-assigned-to") country = cells[8] || null;
		else if (filter_type == "filter-priority") country = cells[3] || null;

		// if the filter is set to 'All', or this is the header row, or `td` text matches filter
		if (filter == "All" || !country || country.innerHTML.includes(filter)) {
			row.style.display = ""; // shows this row
		} else {
			row.style.display = "none"; // hides this row
		}
	}
});

function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("filter-dropdown-search");
	filter = input.value.toUpperCase();
	div = document.getElementById("filter-dropdown-content");
	a = div.getElementsByTagName("a");
	flag = false;

	$("div[id=divider]").addClass("dropdown-divider");
	$("h6[id=header]").css("display", "");

	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
			$("div[id=divider]").removeClass("dropdown-divider");
			$("h6[id=header]").css("display", "none");
		}
	}
}

// Filter overview table (for Select-Option dropdown list) (based on state)
// function filterTest() {
//     // Variables
//     let dropdown, table, rows, cells, country, filter;
//     dropdown = document.getElementById("countriesDropdown");
//     table = document.getElementById("overview-table");
//     rows = table.getElementsByTagName("tr");
//     filter = dropdown.value;

//     // Loops through rows and hides those with countries that don't match the filter
//     for (let row of rows) { // `for...of` loops through the NodeList
//         cells = row.getElementsByTagName("td");
//         country = cells[8] || null; // gets the #th `td` or nothing

//         // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
//         if (filter === "All" || !country || (filter === country.textContent)) {
//             row.style.display = ""; // shows this row
//         }
//         else {
//             row.style.display = "none"; // hides this row
//         }
//     }
// }

// function filterTable() {
//     var input, filter, table, tr, td, i;
//     input = document.getElementById("countriesDropdown");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("overview-table");
//     tr = table.getElementsByTagName("tr");
//     test = input.value;

//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         console.log(td)
//         if (td) {
//             if (test === "All") {
//                 tr[i].style.display = "table-row";
//             }
//             if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "table-row";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
