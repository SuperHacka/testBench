/*popular solutions*/

$(document).ready(function(){
  $(".flip").click(function(){
    $($(this).nextAll(".panel")[0]).slideToggle("fast");
  });
});



/*announcement*/
$(document).ready(function(){
  $(".flip1").click(function(){
    $($(this).nextAll(".panel1")[0]).slideToggle("fast");
  });
});

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

$('.collapse').collapse();
/*show more/less*/
/*$(document).ready(function() {
	var showChar =10;
	var ellipsestext = "<br>";
	var moretext = "See all";
	var lesstext = "See less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
});*/