if (isUC) {
    window._Golbalfixed = function() {
			x_global_fixed2();
	   }
	window._GolbalAuto = function() {
			rmUCTip();
			var logoObj = document.getElementById("logo");
			logoObj.className += 'logo_uc';
			//x_global_fixed2();
		}
	}else if(isQQ){
	window._Golbalfixed = function() {
			x_global_fixed2();
	   }
	window._GolbalAuto = function() {		
			//x_global_fixed2();
		}
	}else{
}
