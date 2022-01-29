'use strict';
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

function readAll(){
	try{
		readAllWithOutTry();		
	}catch{
		alert(e.message);
	}	
}

//Функция чтения всех данных и вывода в ввиде таблицы
function readAllWithOutTry(){
	console.log("start readAll");

	let StringArray = JSON.parse(localStorage.getItem('items1'));
	let table = document.getElementById("table");
	let buff = "";
	let StringArrayLen = StringArray.length;

	for(let i=0; i < StringArrayLen; i++){
		let a = StringArray[i];
		
			buff +='<tr><td>'+ i +'</td><td id="'+ i +'">'+ a.firstName
			+'</td><td>'+ a.lastName
			+'</td><td>'+ a.age
			+'</td><td>'+ a.phoneNumbers 
			+'</td><td><button id="'+i+'" onclick="editValue(this.id)">Edit</button>'
			+'</td><td><button id="'+i+'" onclick="deleteValue(this.id)">Delete</button></td></tr>';
	}
	table.innerHTML = buff;
	countersrecords();
}
