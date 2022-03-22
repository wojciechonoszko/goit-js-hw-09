import Notiflix from 'notiflix';

const btnCreatePromises = document.querySelector('[type = "submit"]');
//console.log(btnCreatePromises);
const form = document.querySelector("form");

form.addEventListener("submit", prevent);

function prevent(evt){
  evt.preventDefault();
  createPromise();
}
    
  function createPromise(position, delay) {
    const amount = parseInt(document.querySelector('[name = "amount"]').value, 10);
    //console.log(amount);
    delay = parseInt(document.querySelector('[name = "delay"]').value, 10);
    //console.log(delay);
    let delayStep = parseInt(document.querySelector('[name = "step"]').value, 10);

    //setTimeout(() => {
    for (let position = 0; position < amount; position++){ 
    
    const promise = new Promise((resolve, reject) => {
      
      const shouldResolve = Math.random() > 0.3;
      //console.log(shouldResolve);
      
        if (shouldResolve) {
          setTimeout(() => {
          const time=delay + delayStep*position;
          const pos = position + 1;

          resolve({pos, time});
          //console.log("OK", delay + delayStep*position)
        }, delay + delayStep*position);
        
        } 
        
        else {
          setTimeout(() => {

            const time=delay + delayStep*position;
            const pos = position + 1;

          reject({pos, time});
          }, delay + delayStep*position);
        }
      });
      promise.then(({time, pos}) => {
        console.log(`✅ Fulfilled promise ${pos} in ${time}ms`);
        Notiflix.Notify.success(`Fulfilled promise ${pos} in ${time}ms`);
      });
      promise.catch(({pos, time}) => {
        console.log(`❌ Rejected promise ${pos} in ${time}ms`);
        Notiflix.Notify.failure(`Rejected promise ${pos} in ${time}ms`);
      });
    }
    
    //}, 0)
  
};





