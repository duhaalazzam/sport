function time(){
var hourNow = prompt('what is the time now');
while(hourNow==''||hourNow>24||hourNow<0){
    hourNow = prompt('what is the time now');
}
var message= '';
if(hourNow >= 18  && hourNow <= 24){ //f
    message = 'Good Evening';
}else if(hourNow >= 12 && hourNow < 18){
    message = 'Good Afternoon';
}else if (hourNow >= 0 && hourNow< 12){
    message = 'Good morning';
}
document.write('<h2>' + message + '</h2>');
}
function Matches(){
var numOfMatches=prompt("How many Fasily matches you have seen?")
while(numOfMatches=='')
{
    numOfMatches=prompt("How many Fasily matches you have seen?") 
}
if(numOfMatches>=20)
{
    document.write("Hi our good follower")
}else if(numOfMatches>=10)
{
    document.write("Hi our follower,You shall see more of our matches")
}else if(numOfMatches<10)
{
    document.write("Hi our follower,You didnt see a lot of our matches")
}
}
function rating(){
var star=prompt("What star rating would you give, 1-5?")
while(!(star>=1 && star<=5))
{
    star=prompt("What star rating would you give, 1-5?")
}
for(var i=0;i<star;i++)
{
document.write('<img src=fifa.jpg />')
}
}
time();
Matches();
rating();
