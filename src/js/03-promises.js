// function createPromise(position, delay) {
  
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//     window.alert("Allright!")
//   } else {
//     // Reject
//     window.alert("No good!")
//   }
// }

const promise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  const delay = parseInt(document.querySelector('[name = "delay"]').value, 10);
  setTimeout(() => {
    if (shouldResolve) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, delay );
});

promise
.then(value => {
  console.log(value);
})
.catch(error => {
  console.log(error);
});






const delayStep = document.querySelector('[name = "step"]').value;

const amount = document.querySelector('[name = "amount"]').value;
console.log(amount);
const btnCreatePromises = document.querySelector('[type = "submit"]');
console.log(btnCreatePromises);

// btnCreatePromises.addEventListener("click", Promise())
