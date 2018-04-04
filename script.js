var animalContainer = document.getElementById('info');

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://poojavpatel.github.io/ajaxtest/pets.json');
ourRequest.onload = function(){
	console.log("it works");
	console.log(ourRequest.responseText);

	ourData = ourRequest.responseText;
	console.log(ourData[0]);  /* returns only [ */
	a = ourData[1].species;
	console.log(a);  /*this is undefined:( */
	/*happens as browser sees it as text file | we need to specify its JSON*/

	myData = JSON.parse(ourRequest.responseText);
	console.log(myData[0]);
	a = myData[1].species;
	console.log(a);

};
ourRequest.send();

/* doing stuff when button is clicked */
var btn = document.getElementById('btn');
btn.addEventListener("click",function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET','https://poojavpatel.github.io/ajaxtest/pets.json');
	ourRequest.onload = function(){
		myData = JSON.parse(ourRequest.responseText);
		renderHtml(myData);
	};
	ourRequest.send();
});

/*The job of this function is to add html to page*/
function renderHtml(data){
	var containerData = '<p>Name of doggo is '+data[1].name+'</p>'
						+'<p>His fav food is '+data[1].foods.likes[1]+'</p>';
	animalContainer.insertAdjacentHTML('beforeend',containerData);
}