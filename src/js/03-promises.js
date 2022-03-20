
const btnCreatePromises = document.querySelector('[type = "submit"]');
console.log(btnCreatePromises);


    
  function createPromise(position, delay) {
      position = parseInt(document.querySelector('[name = "amount"]').value, 10);
      console.log(position);
      delay = parseInt(document.querySelector('[name = "delay"]').value, 10);
      console.log(delay);
      let delayStep = parseInt(document.querySelector('[name = "step"]').value, 10);
      setTimeout(() => {
      for(let i = 0; i <= position-1; i+=1){
      array = [];
      const shouldResolve = Math.random() > 0.3;
      console.log(shouldResolve);
      

      
        if (shouldResolve) {
          setTimeout(() => {
          // Fulfill
          //resolve("OK");
          const elem = i;
          
          array.push(elem);
          console.log(i+1 + " OK");
          console.log(delay + delayStep*i)
          //window.alert("Allright!")
        }, delay + delayStep*i)
        

        } 
      
        else {
          setTimeout(() => {
          // Reject
          //window.alert("No good!")
          //reject("No good!");
          const elem = i;
          
          array.push(elem);
          console.log(i+1 + " No good");
          console.log(delay + delayStep*i);
          }, delay + delayStep*i);
        }
      }
      console.log(array)
      }, delay)
      
        };

//console.log(createPromise())


btnCreatePromises.addEventListener("click", createPromise());



// const amount = document.querySelector('[name = "amount"]').value;
// console.log(amount);



