let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})

async function sendApiRequest(){
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=${API_KEY}');
    console.log(response)
}

function useApiData(data){
    
}