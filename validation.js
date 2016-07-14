function isValidName(name) {
	return name.trim().split(' ').length >= 3;
}

function isValidDate(dateString) {
	// dd/mm/yyyy
	var dateArray = dateString.split('/');
	if (dateArray.length != 3) {
		return false;
	}
	
	if (dateArray[0].length != 2) {
		return false;
	}
	
	var date = parseInt(dateArray[0]);
	if (date < 1 || date > 31) {
		return false;
	}
	
	if (dateArray[1].length != 2) {
		return false;
	}
	
	var date = parseInt(dateArray[1]);
	if (date < 1 || date > 12) {
		return false;
	}
	
	if (dateArray[2].length != 4) {
		return false;
	}
	
	var d = new Date();
	
	if (dateArray[2] < 1900 || dateArray[2] > d.getFullYear()) {
		return false;
	}
	
	return true;
}

function isValidPhone(phone) {
	if (phone.indexOf('+3598') != 0) {
		return false;
	}
	
	if (!phone.match(/^\+\d+$/)) {
		return false;
	}
	
	return true;
} 

function validEmail(email) {
	return email.match(/[a-z0-9][a-z0-9\.\-\_]+@[a-z0-9\.\-\_].[a-z]{2,4}/) ? true : false;
}


function validateForm() {
	
}


function validateField(field, validationResult, message) {
	
}