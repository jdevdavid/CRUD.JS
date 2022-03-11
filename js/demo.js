console.log('Start demo.js');

// function saveOnLocalStorage (id, name, surname, age, phone){
// Запись демо-данных в хранилище
	function demoSaveOnLocalStorage (){
	console.log('start saveOnLocalStorage');

	let StringArray = [{
		   "firstName": "John",
		   "lastName": "Gold",
		   "age": "23",
		   "phoneNumbers": "8121231234"
		}];
	
	localStorage.setItem('items1', JSON.stringify(StringArray));
	readAll();
}

function demodataGenerationAndSaveOnLocalStorage(){
		let StringArray = [{
		   "firstName": "John",
		   "lastName": "Gold",
		   "age": "23",
		   "phoneNumbers": "8121231234"
		}];
	
	localStorage.setItem('items1', JSON.stringify(StringArray));

	try{
		demodataGenerationAndSaveOnLocalStorageWithOutTry();		
	}catch{
		alert('There seems to be an error - please try again');
		alert(e.message + ' ' + e.name + ' ' + e.fileName);
		console.log(e);
	}
}

function demodataGenerationAndSaveOnLocalStorageWithOutTry(){
	console.log("start demodataGenerationAndSaveOnLocalStorage");
	let firstName, lastName, age, phoneNumbers;
	let StringArray = JSON.parse(localStorage.getItem('items1'));

	for (var i = 0; i <= 100; i++) {
		
		let input = [{			
			"firstName": generateName(),
			"lastName": generateName(),
			"age": getRandomInt(18, 150),
			"phoneNumbers": getRandomInt(1,999) + "" + getRandomInt(1,999) + "" + getRandomInt(1,999)
			}];
		console.log(input[0]);
		
		StringArray.push(input[0]);
	}

	localStorage.setItem('items1', JSON.stringify(StringArray));
	readAll();
}