// 1. Create a function called `getMultiplicationTable` that accepts one argument, `number.
// 2. Inside the function, create a loop that logs the multiplication of the argument number times every number from 1 to 10. ✅



// 3. Bonus1: Add another argument called `step` that gives you the ability to jump over numbers in the multiplication table. Look at the test cases for more input.

// 4. Bonus2: Reconstruct the loop so that it gives you the multiplication table of all numbers up to the argument number. Look at the test cases for more input. Would only one loop work? 🤔


function getMultipicationTable(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} * ${i} = ` + number * i)
    }
  }
  
  getMultipicationTable(5);
  
  //----------------------------------------------------------
  console.log("--------------END OF THE MAIN PROBLEM------------------------------------")
  console.log("")
  
  //----------------------------------------------------------
  console.log("-----------------BONUS-2---------------------------------")
  
  
  
  function getMultipicationTable2(number, step) {
    for (let i = 1; i <= 10; i++) {
      if (i == 1) {
        console.log(`${number} * ${i} = ` + number * (i))
      } else if (i + step <= 10) {
        console.log(`${number} * ${i + step - 1} = ` + number * (i + step - 1))
        i++
      } else {
        //do nothing
      }
    }
  }
  
  getMultipicationTable2(5, 2)
  
  //----------------------------------------------------------
  console.log("-----------------END OF THE BONUS-2--------------------------------")
  console.log("")
  
  //----------------------------------------------------------
  console.log("-----------------BONUS-3---------------------------------")
  
  
  function getMultipicationTable3(number) {
      let x = 1;
      while (x <= number){
        for (let k = 1; k <= 10; k++) {
        console.log(`${x} * ${k} = ` + number * k)
      }
            console.log("----------------------------")
  
        x++
      }
      console.log("----------------END OF THE BONUS-3-------------------------------")
  }
  
  getMultipicationTable3(5)
  