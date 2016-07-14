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


function validateForm(event) {
	var name = document.getElementById('name');
	var dob = document.getElementById('date-of-birth');
	var phone = document.getElementById('phone');
	var email = document.getElementById('email');

	var result = isValidName(name.value);
	validateField(name, result, 'Enter at least 3 words');
	
	var r1 = isValidDate(dob.value);
        validateField(dob, r1, 'Enter date of birth in format dd/mm/yyyy');

	result = result && r1;

	var r2 = isValidPhone(phone.value);
        validateField(phone, r2, 'Enter phone starting with +3598 and containing only digits');
	result = result && r2;

	var r3 = validEmail(email.value);
        validateField(email, r3, 'Enter valid email');

	result = result && r3
	

	if (!result) {
		event.preventDefault();
	}
}


function validateField(field, validationResult, message) {
	var div = field.parentElement;
	var p = field.nextElementSibling;

	div.className = '';
	p.innerHTML = '';
	
	if (!validationResult) {
		div.className = 'error';
		p.innerHTML = message;
	}
}

document.addEventListener('DOMContentLoaded', function(){
	var form = document.querySelector('form');

	form.addEventListener('submit', function(e){
		validateForm(e);
	}, false)
}, false);
