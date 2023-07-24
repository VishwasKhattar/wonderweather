const cityname = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_val = document.getElementById('temp_value');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getinfo = async (event) => {
    event.preventDefault();
    let cityVal = cityname.value;

    if (cityVal === "") {
        city_name.innerText = "Please type the city name before searching";
        datahide.classList.add('data_hide');
    } else {
        try {
            //Getting data from API
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=2cd9fe08e524aeea0fa58c1536180bf3&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            //Placing data in html

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_value.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            //Setting the Temp Icon
            if (tempMood == 'Clear') {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            } else if (tempMood == 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            } else if (tempMood == 'Rain') {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }

            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = "Please enter the city name properly";
            datahide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getinfo);