'use strict';
console.log('Start main.js');
let gloval_counter_id = 0;

//run the program
document.addEventListener('DOMContentLoaded', function(){ // Analog $(document).ready(function(){
  // If one element must be found
  readAll();//load table  
});
// How much records
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

//The function of reading all data and output in a table
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
