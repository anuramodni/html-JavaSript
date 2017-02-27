
// Province save in Array
var province_arr = new Array("Central", "Eastern", "Northern","NorthCentral","NorthWestern","Sabaragamuwa", "Southern","Uva","Western");

// districts save in Array
var dist_arr = new Array();
dist_arr[0] = "";
dist_arr[1] = "Kandy|Matale|Nuwara Eliya";
dist_arr[2] = "Ampara|Batticaloa|Trincomalee";
dist_arr[3] = "Jaffna|Kilinochchi|Mannar|Mullaitivu|Vavuniya";
dist_arr[4] = "Anuradhapura|Polonnaruwa";
dist_arr[5] = "Kurunegala|Puttalam";
dist_arr[6] = "Kegalle|Ratnapura";
dist_arr[7] = "Galle|Hambantota|Matara";
dist_arr[8] = "Badulla|Moneragala";
dist_arr[9] = "Colombo|Gampaha|Kalutara";

function populateDistricts(provinceElementId,districtElementId ){	
	var selectedProvinceIndex = document.getElementById(provinceElementId).selectedIndex;
	var districtElement = document.getElementById(districtElementId );	
		districtElement.length = 0;
		districtElement.options[0] = new Option('Select a District');
		districtElement.selectedIndex = 0;	
	var district_arr = dist_arr[selectedProvinceIndex].split("|");	
	for (var n=0; n<district_arr.length; n++) {
		districtElement.options[districtElement.length] = new Option(district_arr[n],district_arr[n]);
	}
}

function populateProvinces(provinceElementId,districtElementId){	
	var provinceElement = document.getElementById(provinceElementId);
		provinceElement.length = 0;
		provinceElement.options[0] = new Option('Select a province');
		provinceElement.selectedIndex = 0;
	for (var n=0; n<province_arr.length; n++) {
		provinceElement.options[provinceElement.length] = new Option(province_arr[n],province_arr[n]);
	}
	// Assigned all provinces. Now assign event listener for the Districts.
	if( districtElementId ){
		provinceElement.onchange = function(){
			populateDistricts(provinceElementId,districtElementId );
		};
	}
}

