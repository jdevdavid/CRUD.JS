console.log('Start filter.js');


// Функция фильтрации(FILTER) по возрасту как в
// 1. диапазоне
// 2. по одному
function filter(){
	console.log('Start filter');
	let fl_min = document.getElementById("agefilter_min").value;
	let fl_max = document.getElementById("agefilter_max").value;
	let StringArray = JSON.parse(localStorage.getItem('items1'));
	let table = document.getElementById("table");
	let count = document.getElementById("countersrecordsfilter");
	let buff = "";
	let countersrecordsfilter = 0;

// Если выбор диапазона возрастов от и до
	if(fl_max > 0){
		console.log("Диапазон возрастов");
		let StringArrayLen = StringArray.length;

		for(let i=0; i < StringArrayLen; i++){
			let a = StringArray[i];			
		
			if ((fl_min <= a.age)&&(a.age <= fl_max)){
				countersrecordsfilter++;

				buff +='<tr><td>'+ i +'</td><td id="'+ i +'">'+ a.firstName
				+'</td><td>'+ a.lastName
				+'</td><td>'+ a.age
				+'</td><td>'+ a.phoneNumbers 
				+'</td><td><button id="'+i+'" onclick="deleteValue(this.id)">Delete</button>'
				+'</td><td><button id="'+i+'" onclick="editValue(this.id)">Edit</button></td></tr>';
			}
		}
		table.innerHTML = buff; 	 	 		
		countersrecords();

		$('#div_countersrecordsfilter').show();
		count.innerHTML = countersrecordsfilter;
	}	else if(fl_min > 0){
		console.log("Один возраст"); 

		let StringArrayLen = StringArray.length;

		for(let i=0; i < StringArrayLen; i++){
			let a = StringArray[i];
					
			if (fl_min === a.age){
				countersrecordsfilter++;

				buff +='<tr><td>'+ i +'</td><td id="'+ i +'">'+ a.firstName
				+'</td><td>'+ a.lastName
				+'</td><td>'+ a.age
				+'</td><td>'+ a.phoneNumbers 
				+'</td><td><button id="'+i+'" onclick="deleteValue(this.id)">Delete</button>'
				+'</td><td><button id="'+i+'" onclick="editValue(this.id)">Edit</button></td></tr>';
			}

			$('#div_countersrecordsfilter').show();
			count.innerHTML = countersrecordsfilter;
		}
		table.innerHTML = buff;
		countersrecords();
	} else{
	 	$('#div_countersrecordsfilter').hide();
	}

};



