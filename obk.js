const cars = {
    color: 'Blue',
    brand: 'Ford',
    model: 'Fiesta'
  }
  var count = 0;
for(let key in cars)
{
    count++;
    
}
console.log(count);
console.log(cars.color);