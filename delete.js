console.log("start delete.js");

function deleteValue(clicked_id){
	console.log("start deleteValue");

    let StringArray = JSON.parse(localStorage.getItem('items1'));
    
    StringArray.splice(parseInt(clicked_id, 10), 1);
    
	localStorage.setItem('items1', JSON.stringify(StringArray));
  	readAll(); 
}