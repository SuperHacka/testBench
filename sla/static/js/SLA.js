
$(".example").timepicker({
  use12HourClock:true,
  timeFormat:"%g:%i %A",
  ampmText: { am:"am", pm:"pm", AM:"AM", PM:"PM" },
  hourHeaderText:"hour",
  minHeaderText:"min",
  okButtonText:"&#10004;",
  cancelButtonText:"&#10005;",
  selectSize: 5

});

$(".Time").timezones();

document.getElementById('ST1').disabled = !this.checked;
document.getElementById('ET1').disabled = !this.checked;
document.getElementById('inlineCheckbox1').onchange = function() {
    document.getElementById('ST1').disabled = !this.checked;
    document.getElementById('ET1').disabled = !this.checked;
};
document.getElementById('ST2').disabled = !this.checked;
document.getElementById('ET2').disabled = !this.checked;
document.getElementById('inlineCheckbox2').onchange = function() {
    document.getElementById('ST2').disabled = !this.checked;
    document.getElementById('ET2').disabled = !this.checked;
};
document.getElementById('ST3').disabled = !this.checked;
document.getElementById('ET3').disabled = !this.checked;
document.getElementById('inlineCheckbox3').onchange = function() {
    document.getElementById('ST3').disabled = !this.checked;
    document.getElementById('ET3').disabled = !this.checked;
};
document.getElementById('ST4').disabled = !this.checked;
document.getElementById('ET4').disabled = !this.checked;
document.getElementById('inlineCheckbox4').onchange = function() {
    document.getElementById('ST4').disabled = !this.checked;
    document.getElementById('ET4').disabled = !this.checked;
};
document.getElementById('ST5').disabled = !this.checked;
document.getElementById('ET5').disabled = !this.checked;
document.getElementById('inlineCheckbox5').onchange = function() {
    document.getElementById('ST5').disabled = !this.checked;
    document.getElementById('ET5').disabled = !this.checked;
};
document.getElementById('ST6').disabled = !this.checked;
document.getElementById('ET6').disabled = !this.checked;
document.getElementById('inlineCheckbox6').onchange = function() {
    document.getElementById('ST6').disabled = !this.checked;
    document.getElementById('ET6').disabled = !this.checked;
};
document.getElementById('ST7').disabled = !this.checked;
document.getElementById('ET7').disabled = !this.checked;
document.getElementById('inlineCheckbox7').onchange = function() {
    document.getElementById('ST7').disabled = !this.checked;
    document.getElementById('ET7').disabled = !this.checked;
};

$.fn.modal.Constructor.prototype.enforceFocus = function() {};

$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
    theme: "classic"
    width: 'resolve'
});

$(document).ready(function() {
    $('.js-example-basic-multiple1').select1();
    theme: "classic"
    width: 'resolve'
});
