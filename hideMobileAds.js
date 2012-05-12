(function(){
	var displays = ['imobile_adspotdiv1'];
	var heights = ['picAd2'];

	displays.forEach(function(target, idx, arr){
		var elm = document.getElementByID(target);
		elm.style.display = 'none';
	});
	heights.forEach(function(target, idx, arr){
		var elm = document.getElementByID(target);
		elm.style.overflow = 'hidden';
		elm.style.height = '0px';
	});
})();