
function editValue(clicked_id){
	console.log("start editValue");

	let StringArray = JSON.parse(localStorage.getItem('items1'));	
	// console.log(StringArray[clicked_id]);
	document.getElementById("firstNameEdit").value = StringArray[clicked_id].firstName;
	document.getElementById("lastNameEdit").value = StringArray[clicked_id].lastName;
	document.getElementById("ageEdit").value = StringArray[clicked_id].age;
	document.getElementById("phoneNumbersEdit").value = StringArray[clicked_id].phoneNumbers;
	gloval_counter_id = clicked_id;

	$('.editheader').show();
}

function editRecords(){
	console.log("start editRecords");
	let StringArray = JSON.parse(localStorage.getItem('items1'));	

	if (document.getElementById("firstNameEdit").value.length > 18) {
		alert("Имя не может быть настолько длинным.");
	}else
	if (document.getElementById("firstNameEdit").value.length < 2) {
		alert("Имя не может быть настолько коротким.");
	}else
	if (document.getElementById("lastNameEdit").value.length > 19) {
		alert("Фамилия не может быть настолько длинной.");
	}else
	if (document.getElementById("lastNameEdit").value.length < 2) {
		alert("Фамилия не может быть настолько короткой.");
	}else
	if (document.getElementById("ageEdit").value < 0) {
		alert("Возраст не может быть отрицательным.");
	}else
	if (document.getElementById("ageEdit").value > 150) {
		alert("Возраст не может быть таким большим.");
	}else
	if (document.getElementById("phoneNumbersEdit").value.length < 5) {
		alert("Телефон не может быть таким коротким.");
	}else
	if (document.getElementById("phoneNumbersEdit").value.length > 15) {
		alert("Телефон не может быть таким длинным.");
	}else{

		let input = [{
			"firstName": document.getElementById("firstNameEdit").value,
			"lastName": document.getElementById("lastNameEdit").value,
			"age": document.getElementById("ageEdit").value,
			"phoneNumbers": document.getElementById("phoneNumbersEdit").value
			}];
		
		StringArray[gloval_counter_id] = input[0];
		localStorage.setItem('items1', JSON.stringify(StringArray));
		gloval_counter_id = 0;

		readAll();//Считывание уже записанных новых данных
		filter();//Запускаем фильтр на всякий пожарный
		$('.editheader').toggle();
	}
}