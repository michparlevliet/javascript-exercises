/*LAB 1-2: CONSTRUCTOR FUNCTIONS*/
//FAVE FRIEND CONSTRUCTOR FUNCTION
alert("fave 3");

window.onload = function(){
	var faveThree = [];//FAVE 3 ARRAY

	var name1 = document.getElementById("n_1");
	var name2 = document.getElementById("n_2");
	var name3 = document.getElementById("n_3");

	var number1 = document.getElementById("p_1");
	var number2 = document.getElementById("p_2");
	var number3 = document.getElementById("p_3");

	var form = document.forms.fave_form;
	var faveBlock = document.getElementById("faveBlock");
	var faveList = document.getElementById("faveList");

	function Friend(nameIn,numberIn) {
		this.name = nameIn;
		this.number = numberIn;
	}

	form.onsubmit = function() {
		var fave1 = new Friend(name1.value, number1.value);
		faveThree.push(fave1);
		
		var fave2 = new Friend(name2.value, number2.value);
		faveThree.push(fave2);
	
		var fave3 = new Friend(name3.value, number3.value);
		faveThree.push(fave3);
	
		console.log(faveThree);

		form.style.display = "none";
		faveBlock.style.display = "block";


		for (let i = 0; i < faveThree.length; i++) {
			faveList.innerHTML += "<li>"+faveThree[i].name+"</li>";
		};

		return false;
	};
	

}//END OF onload FUNCTION