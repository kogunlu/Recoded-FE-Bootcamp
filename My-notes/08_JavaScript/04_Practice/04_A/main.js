const pizza = ['cheddar', 'pepper', 'oil'];

console.log(pizza) // [ 'cheddar', 'pepper', 'oil' ]

pizza.push('salt');
pizza.unshift('black pepper') 

console.log(pizza) // [ 'black pepper', 'cheddar', 'pepper', 'oil', 'salt' ]

pizza.pop();
pizza.shift();

console.log(pizza) // [ 'cheddar', 'pepper', 'oil' ]

let mainIngredient = pizza[0]; // cheddar

console.log('main ingredient is: '+ mainIngredient) // cheddar

function takeIngredient() {
  for (let i = 0; i < pizza.length; i++) {
    if (pizza[i] == mainIngredient) {
      // do nothing
    } else {
      console.log(pizza[i]);
    }
  }
}

takeIngredient() //pepper
                 //oil
