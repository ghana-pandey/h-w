let noOfItems;
let priceOfEach;
let total=0;
let prompt=require('prompt-sync')();
noOfItems=prompt("Enter the no of items purchased");
do
{
priceOfEach=prompt("Enter price for each item ");
}
while(noOfItems!=0)
{
noOfItems--;
}
total=total+priceOfEach;
if(total>99)
{
total=(total-0.1*total);
}
else
{
total=total;
}
consol.log(total);