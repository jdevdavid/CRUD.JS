console.log('Start main.js');
let gloval_counter_id = 0;

//запускаем программу
document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
  // Если должен быть найден один элемент
  readAll();//Грузим таблицу
});
// Считаем количество записей
function countersrecords(){
	let StringArray = JSON.parse(localStorage.getItem('items1'));
	document.getElementById("countersrecords").innerHTML = StringArray.length;
}

//Функция чтения всех данных и вывода в ввиде таблицы
function readAll(){
	console.log("start readAll");

	let StringArray = JSON.parse(localStorage.getItem('items1'));
	let table = document.getElementById("table");
	let buff = "";
	
	for(let i=0; i < StringArray.length;i++){
		let a = StringArray[i];
		
			buff +='<tr><td>'+ i +'</td><td id="'+ i +'">'+ a.firstName
			+'</td><td>'+ a.lastName
			+'</td><td>'+ a.age
			+'</td><td>'+ a.phoneNumbers 
			+'</td><td><button id="'+i+'" onclick="deleteValue(this.id)">Delete</button>'
			+'</td><td><button id="'+i+'" onclick="editValue(this.id)">Edit</button></td></tr>';
	}
	table.innerHTML = buff;
	countersrecords();
}
