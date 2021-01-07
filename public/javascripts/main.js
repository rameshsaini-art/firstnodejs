const curDay = document.getElementById("day");
const curDate = document.getElementById("today_date");
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ''){
        city_name.innerText = "Please enter city name first!";
        datahide.classList.add('data_hide');
    } else {
        try{
          let apiData =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=269b8c6d5693b8ce4c5af7d5a5ab9ecb`);
          const response = await apiData.json();
          const arrData = [response];

          city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
          temp.innerText = arrData[0].main.temp;
          const tempStatus = arrData[0].weather[0].main;

          datahide.classList.remove('data_hide');

          //condition to check sunny or cloudy
    if (tempStatus == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempStatus == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }

      

        }catch{
            city_name.innerText = "Please enter right name of city!";

            datahide.classList.add('data_hide');
        }

    }
    
}

submitBtn.addEventListener('click', getInfo);


const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Fridau";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };

  const getCurrentTime = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    var now = new Date();
      var month = months[now.getMonth()];
      var date = now.getDate();

      let hours = now.getHours();
      let mins = now.getMinutes();

      let periods = "AM";
      

      if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
      }
      if (mins < 10) {
        mins = "0" + mins;
      }

    return `${date} ${month}  | ${hours}:${mins}${periods}`;
    };

    curDay.innerHTML = getCurrentDay();
    curDate.innerHTML = getCurrentTime();