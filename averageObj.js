let users = [
    {
      name: 'abc',
      age: 20,
    },
    {
      name: 'xyz',
      age: 10
    }, 
  ]
  function getAverage(users)
  {
    let sum=0,count=0;

    for(let i=1;i<=users.length;i++)

    {
      item=users[i];
      if(item.name){
      sum=users.age+sum;
      count=count+1
    }}
    return (sum/count);
  }
  console.log(getAverage(users))