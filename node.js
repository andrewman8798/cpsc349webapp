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
  var filter1=document.getElementById('filter1');
  var filter2=document.getElementById('filter2');
  var filter3=document.getElementById('filter3');
  var filter4=document.getElementById('filter4');
  var filter5=document.getElementById('filter5');
  var filter6=document.getElementById('filter6');
  var filter7=document.getElementById('filter7');
  var filter8=document.getElementById('filter8');
  var filter9=document.getElementById('filter9');
  var filter10=document.getElementById('filter10');
  let APP_ID="2afa29fc";
  let API_KEY="3063fe6d505174b0306c307e4268fe78";

  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`+input.value+filter1.value+filter2.value+filter3.value+filter4.value+filter5.value+filter6.value+filter7.value+filter8.value+filter9.value+filter10.value);

  let data=await response.json()
  console.log(response)
  //console.log(filter.value)
  useApiData(data)
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
