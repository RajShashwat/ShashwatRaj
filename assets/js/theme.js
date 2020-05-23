$('.datepicker').each(function(){
	var picker = new Pikaday({
		field: this
	});
});
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
	expandImg.parentElement.style.align = "center";
}
