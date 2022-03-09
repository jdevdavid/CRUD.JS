
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
		alert("Name can't be that long.");
	}else
	if (document.getElementById("firstNameEdit").value.length < 2) {
		alert("Name can't be that short.");
	}else
	if (document.getElementById("lastNameEdit").value.length > 19) {
		alert("Last name can't be that long.");
	}else
	if (document.getElementById("lastNameEdit").value.length < 2) {
		alert("Last name can't be that short.");
	}else
	if (document.getElementById("ageEdit").value < 0) {
		alert("Age cannot be negative.");
	}else
	if (document.getElementById("ageEdit").value > 150) {
		alert("Age can't be that big.");
	}else
	if (document.getElementById("phoneNumbersEdit").value.length < 5) {
		alert("The phone can't be that short.");
	}else
	if (document.getElementById("phoneNumbersEdit").value.length > 15) {
		alert("The phone can't be that long.");
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