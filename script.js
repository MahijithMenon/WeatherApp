let search=document.getElementById('search-text');
let main=document.getElementsByClassName('name');
let temp=document.getElementsByClassName('temp');
let desc=document.getElementsByClassName('desc');
var cityName=search.value;
console.log(cityName);
var btn=document.getElementById('btn');
console.log(cityName,btn,search)

btn.addEventListener('click',function(cityName){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=551b49ae9c1e365f28a33306177b78d2')
    .then(response=>response.json())
    .then(data=>{
        var tempValue=data['main']['temp'];
        var nameValue=data['name'];
        var descValue=data['weather'][0]['description'];
        console.log(tempValue,nameValue,descValue)

        main.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML=descValue;
        search.value="";

    })
    .catch(error=>"Wrong City Name")
})
