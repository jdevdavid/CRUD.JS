console.log('Start main.js');
let gloval_counter_id = 0;

// var object = {
//  // b = 51,
//   let counter_id = 0
// };

document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
  // Если должен быть найден один элемент
  readAll();
});

function countersrecords(){
	let StringArray = JSON.parse(localStorage.getItem('items1'));
	document.getElementById("countersrecords").innerHTML = StringArray.length;
}

function readAll(){
	console.log("start readAll");

	let StringArray = JSON.parse(localStorage.getItem('items1'));
	let cl = document.getElementById("table");
	let buff="";
	
	for(let i=0; i < StringArray.length;i++){
		let a = StringArray[i];
		
			buff +='<tr><td>'+ i +'</td><td id="'+ i +'">'+ a.firstName
			+'</td><td>'+ a.lastName
			+'</td><td>'+ a.age
			+'</td><td>'+ a.phoneNumbers 
			+'</td><td><button id="'+i+'" onclick="deleteValue(this.id)">Delete</button>'
			+'</td><td><button id="'+i+'" onclick="editValue(this.id)">Edit</button></td></tr>';
	}
	cl.innerHTML = buff;
	countersrecords();
}

function readWrite(){

}