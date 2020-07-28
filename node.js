let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  //moving user input into the search query
var input=document.getElementById('inputid');
  //add filter otptions here then append to end of query with "+"
//looking for way to add filter through checkbox
//right now all filters are activated
//var stringsum=null;
var filtert=document.getElementById('filter1')
if (filtert.checked) {
 var stringsum1 = document.getElementById('filter1');
 //stringsum=[stringsum, stringsum1.value].filter(function(val){return val!==null;}).join('');
}
/*var filtert=document.getElementById('filter2')
if (filtert.checked) {
 var stringsum2= document.getElementById('filter2');
 stringsum=[stringsum, stringsum2.value].filter(function(val){return val!==null;}).join('');
}
var filtert=document.getElementById('filter3')
if (filtert.checked) {
 var stringsum3= document.getElementById('filter3');
 stringsum=[stringsum, stringsum3.value].filter(function(val){return val!==null;}).join('');
}
var filtert=document.getElementById('filter4')
if (filtert.checked) {
 var stringsum4 = document.getElementById('filter4');
 stringsum=[stringsum, stringsum4.value].filter(function(val){return val!==null;}).join('');
}
var filtert=document.getElementById('filter5')
if (filtert.checked) {
 var stringsum5 = document.getElementById('filter5');
 stringsum=[stringsum, stringsum5.value].filter(function(val){return val!==null;}).join('');
}
var filtert=document.getElementById('filter6')
if (filtert.checked) {
 var stringsum6= document.getElementById('filter6');
 stringsum=[stringsum, stringsum6.value].filter(function(val){return val!==null;}).join('');
}
var filtert=document.getElementById('filter7')
if (filtert.checked) {
 var stringsum7= document.getElementById('filter7');
 stringsum=[stringsum, stringsum7.value].filter(function(val){return val!==null;}).join('');
}
var filtert=document.getElementById('filter8')
if (filtert.checked) {
 var stringsum8= document.getElementById('filter8');
 stringsum=[stringsum, stringsum8.value].filter(function(val){return val!==null;}).join('');
}
var filtert=document.getElementById('filter9')
if (filtert.checked) {
 var stringsum9= document.getElementById('filter9');
 stringsum=[stringsum, stringsum9.value].filter(function(val){return val!==null;}).join('');
}
var filtert=document.getElementById('filter10')
if (filtert.checked) {
 var stringsum10= document.getElementById('filter10');
 stringsum=[stringsum, stringsum10.value].filter(function(val){return val!==null;}).join('');
}*/
//stringsum=[stringsum1.value,stringsum2.value,stringsum3.value,stringsum4.value,stringsum5.value,stringsum6.value,stringsum7.value,stringsum8.value,stringsum9.value,stringsum10.value].join('');
  let APP_ID="2afa29fc";
  let API_KEY="3063fe6d505174b0306c307e4268fe78";
if(stringsum1!==undefined){
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`+input.value+stringsum1.value);
    let data=await response.json()
    console.log(response)
    useApiData(data)
  }else{
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`+input.value);
    let data=await response.json()
    console.log(response)
    useApiData(data)}

}




//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  for (var i = 0; i < data.hits.length; i++) {

document.querySelector("#content").innerHTML+=`
<div class="card" style="width: 18rem;">
  <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[i].recipe.label}</h5>
    <p class="card-text">${data.hits[i].recipe.healthLabels}
    <br> Calories:
${data.hits[i].recipe.calories}
    </p>
    <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Source</a>
  </div>
</div>

`


}

}
