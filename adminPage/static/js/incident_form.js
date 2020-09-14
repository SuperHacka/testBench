/* -------------------------------------------------------------------------- */
/*                              INCIDENT FORM JS                              */
/* -------------------------------------------------------------------------- */

/* ---------------- SUMMERNOTE WYSIWYG EDITOR INITIALISATION ---------------- */

$(document).ready(function () {
	$('#summernote').summernote({
		height: 200, // set editor height
		minHeight: null, // set minimum height of editor
		maxHeight: null, // set maximum height of editor
		// focus: true // set focus to editable area after initializing summernote
		placeholder: 'Description of incident',
		// toolbar:[
		// 	['insert', ['link', 'picture', 'video', 'file']],
		// ],
	});
});

/* -------------------- DEPENDENT/DYNAMIC DROPDOWN MENUS -------------------- */

// Category and Sub-category
var $select1 = $("#inputCategory"),
	$select2 = $("#inputSubcategory"),
	$options = $select2.find("option");

$select1
	.on("change", function () {
		$select2.html($options.filter('[value="' + this.value + '"]'));
		$("#inputSubcategory").selectpicker("refresh");
	})
	.trigger("change");


// Support Group and Assigned To
var $select3 = $("#inputSupportGroup"),
	$select4 = $("#inputAssignee"),
	$options_2 = $select4.find("option");

$select3
	.on("change", function () {
		$select4.html($options_2.filter('[value="' + this.value + '"]'));
		$("#inputAssignee").selectpicker("refresh");
	})
	.trigger("change");

$(document).ready(function () {

	if ($(this).val() === "" || $(this).val() === "Not set") {
		// document.getElementById("subcategory").disabled = true;
		// $("#inputSubcategory").prop("disabled");
		$("#inputSubcategory").prop("disabled", true);
		$("#inputSubcategory").selectpicker("refresh");

		$("#inputAssignee").prop("disabled", true);
		$("#inputAssignee").selectpicker("refresh");

		$("#inputUrgency").prop("disabled", true);
		$("#inputUrgency").selectpicker("refresh");

	} else {
		$("#inputSubcategory").prop("disabled", false);
		$("#inputSubcategory").selectpicker("refresh");

		$("#inputAssignee").prop("disabled", false);
		$("#inputAssignee").selectpicker("refresh");

		$("#inputUrgency").prop("disabled", false);
		$("#inputUrgency").selectpicker("refresh");
	}

	$("#inputCategory").change(function () {
		// console.log($(this).val());

		if ($(this).val() === "Not set" || $(this).val() === "") {
			//   document.getElementById("subcategory").disabled = true;
			//   $("#inputSubcategory").prop("disabled");
			$("#inputSubcategory").prop("disabled", true);
			$("#inputSubcategory").selectpicker("refresh");

		} else {
			//   document.getElementById("subcategory").disabled = false;
			//   $("#inputSubcategory").prop("enabled");
			$("#inputSubcategory").prop("disabled", false);
			$("#inputSubcategory").selectpicker("refresh");
		}
	});

	$("#inputSupportGroup").change(function () {
		// console.log($(this).val());

		if ($(this).val() === "Not set" || $(this).val() === "") {
			$("#inputAssignee").prop("disabled", true);
			$("#inputAssignee").selectpicker("refresh");
		} else {
			$("#inputAssignee").prop("disabled", false);
			$("#inputAssignee").selectpicker("refresh");
		}
	});

	$("#inputImpact").change(function () {
		// console.log($(this).val());

		if ($(this).val() === "Not set" || $(this).val() === "") {
			$("#inputUrgency").prop("disabled", true);
			$("#inputUrgency").selectpicker("refresh");
		} else {
			$("#inputUrgency").prop("disabled", false);
			$("#inputUrgency").selectpicker("refresh");
		}
	});
});