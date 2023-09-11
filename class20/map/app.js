const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const pricesDiscount = prices.map(price => price * 0.5)

// console.log(prices, pricesDiscount)

const products = [
  {name: 'Mouse', price: 60,},
  {name: 'Pendrive', price: 25,},
  {name: 'Paint', price: 50,},
  {name: 'Laptop', price: 3500,},
  {name: 'Phone', price: 2600,},
]

const productsDiscount = products.map(product => {
  if (product.price >= 30){
    return {
      name: product.name,
      price: product.price / 2
    }    
  }
  return product
})

console.log(productsDiscount)