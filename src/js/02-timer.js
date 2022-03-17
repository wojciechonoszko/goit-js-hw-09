import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('[data-start]');
let timerId = null;

startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      
      const currentDate = new Date();
      const currentDateNum = currentDate.getTime();
      console.log(typeof currentDateNum);
      
      const selectedDatesNum = selectedDates[0].getTime();
      console.log(selectedDatesNum)

      if (selectedDatesNum < currentDateNum) {
        startButton.disabled = true;
        window.alert("Please choose a date in the future");
      }
      else {
        startButton.disabled = false;
      } 


      startButton.addEventListener("click", () => {
        document.querySelector('[data-days]').textContent = "23";
        timerId = setInterval(() => {
          function convertMs(ms) {
          // Number of milliseconds per unit of time
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
        
          return { days, hours, minutes, seconds };
        };
        console.log(convertMs(selectedDatesNum)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
        console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
        console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
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
