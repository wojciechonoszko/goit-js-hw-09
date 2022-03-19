function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const position = 

const amount = document.querySelector('[name = "amount"]').value
console.log(amount);
const btnCreatePromises = document.querySelector('[type = "submit"]');
console.log(btnCreatePromises);

btnCreatePromises.addEventListener("click", createPromise())
