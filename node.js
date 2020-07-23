let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  var input=document.getElementById('inputid');
  let APP_ID="2afa29fc";
  let API_KEY="3063fe6d505174b0306c307e4268fe78";
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`+input.value);
  let data=await response.json()
  console.log(response)
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
