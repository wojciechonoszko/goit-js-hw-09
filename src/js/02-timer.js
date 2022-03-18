import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const startButton = document.querySelector('[data-start]');
let timerId = null;

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      
      const currentDate = new Date();
      const currentDateNum = currentDate.getTime();
      
      const selectedDatesNum = selectedDates[0].getTime();
      

      if (selectedDatesNum < currentDateNum) {
        startButton.disabled = true;
        //window.alert("Please choose a date in the future");
        Notiflix.Notify.failure('Please choose a date in the future');
      }
      else {
        startButton.disabled = false;
      } 
      


      startButton.addEventListener("click", () => {
        
        timerId = setInterval(() => {
          function convertMs(ms) {
          // Number of milliseconds per unit of time
          //console.log(currentDateNum);
          //console.log(selectedDatesNum - new Date().getTime());
          ms = selectedDatesNum - new Date().getTime();
          while (ms >= 0) {
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;
         
          // Remaining days
          const days = Math.floor(ms / day);
          // Remaining hours
          const hours = Math.floor((ms % day) / hour);
          // Remaining minutes
          const minutes = Math.floor(((ms % day) % hour) / minute);
          // Remaining seconds
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);
          dataDays.textContent = days.toString();
          dataHours.textContent = hours.toString();
          dataMinutes.textContent = minutes.toString();
          dataSeconds.textContent = seconds.toString();
          
          
        
          return { days, hours, minutes, seconds };
        }
        
        
        };
        
      
        const timeElapse = selectedDatesNum - currentDateNum;
        

        //console.log(timeElapse);
        
        convertMs(timeElapse); // {days: 0, hours: 0, minutes: 0, seconds: 2}
        
        function addLeadingZero(value) {
         dataDays.textContent = dataDays.textContent.padStart(value, '0');
         dataHours.textContent = dataHours.textContent.padStart(value, '0');
         dataMinutes.textContent = dataMinutes.textContent.padStart(value, '0');
         dataSeconds.textContent = dataSeconds.textContent.padStart(value, '0');
        
        }
        addLeadingZero(2);
        
        }, 1000)
      
      } )
    },
  };

flatpickr('input[type="text"]', options);
console.log(flatpickr);





// startButton.addEventListener("click", () => {
//   startButton.disabled = true;
//   stopButton.disabled = false;
//   timerId = setInterval(() =>{
//     function getRandomHexColor() {
//               return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//             };
//           console.log(getRandomHexColor());
//           document.body.style.background = getRandomHexColor();
//   }, 1000);
// });
