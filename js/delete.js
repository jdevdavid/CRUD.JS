console.log("start delete.js");

//Удаляем данных из таблицы
function deleteValue(clicked_id){
	console.log("start deleteValue");

    let StringArray = JSON.parse(localStorage.getItem('items1'));
    
    StringArray.splice(parseInt(clicked_id, 10), 1);
    
	localStorage.setItem('items1', JSON.stringify(StringArray));
  	readAll(); 
}

// Удаление таблицы - Сделано
function cleartable(){
	console.log("start cleartable");	

	if (window.confirm("Do you really want to CLEAR ALL TABLE?")) {

	localStorage.clear();
	alert("All Table has been cleared!");
	readAll(); 
	}	
} 