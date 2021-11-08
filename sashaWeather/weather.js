let backgroung = document.getElementsByClassName("figure");
let imgg = document.querySelector("img");
let celsi = document.getElementsByClassName("cels")[0];
let discrip = document.querySelector("p");

async function getWeather(city = "minsk") {

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=612063be1ae68a9db6d031baba132bda`;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=66b3c3e1676ddd60a73d8a3160445061`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(res);
    console.log(data);
    
    celsi.innerText = Math.trunc(data.list[0].main.temp) + '℃';
    day_night(data.list[0],data.city.sunrise,data.city.sunset,imgg);

}

getWeather("minsk");


function day_night(list, sunrise, sunset, imgg) {
    if (list.dt> sunrise && list.dt < sunset) {
        dayS(list.clouds.all,imgg)
    } else {
        night(list.clouds.all,imgg);
    }
}

function dayS(clouds,imgg) {
    if (clouds < 20) {
        imgg.src = `./picture/sun.png`
        backgroung[0].style.backgroundColor = "#56A2CC";
        discrip.innerText = "Mostly Sunny";
    }

    else if (clouds < 40) {
        imgg.src = `./picture/sunClouds.png`
        backgroung[0].style.backgroundColor = `#56A2CC`;
        discrip.innerText = "Partly Cloudy";
    }

    else if (clouds < 60) {
        imgg.src = `./picture/clouds.png`
        backgroung[0].style.backgroundColor = `#356AA6`;
        discrip.innerText = "Cloudy";
    }

    else if (clouds < 80) {
        imgg.src = `./picture/rain.png`
        backgroung[0].style.backgroundColor= `#1E4673`;
        discrip.innerText = 'Rainy';
    }
    else if (clouds <= 100) {
        imgg.src = `./picture/thunderstorm.png`
        backgroung[0].style.backgroundColor= `#1E4673`;
        discrip.innerText = "Lightning";
    }
}

function night(clouds,imgg) {
    if (clouds < 40) {
        imgg.src = `./picture/moon.png`
        backgroung[0].style.backgroundColor = `#56A2CC`;
        discrip.innerText = "Clear";
    }

    else if (clouds < 60) {
        imgg.src = `./picture/clouds.png`
        backgroung[0].style.backgroundColor = `#356AA6`;
        discrip.innerText = "Cloudy";
    }

    else if (clouds < 80) {
        imgg.src = `./picture/rain.png`
        backgroung[0].style.backgroundColor = `#1E4673`;
        discrip.innerText = "Rainy";
    }
    else if (clouds <= 100) {
        imgg.src = `./picture/thunderstorm.png`
        backgroung[0].style.backgroundColor = `#1E4673`;
        discrip.innerText = "Lightning";
    }
}
