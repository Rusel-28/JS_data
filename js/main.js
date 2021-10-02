/*------время-----*/

// var date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// var arr = [8, 9, 4, 101, 1];
// console.log(arr.length);
// console.log(arr.join(", "));
// console.log(arr.sort());
// var stroka = arr.reverse().join(", ");


// class Person{
//     constructor(name, age, happiness) {
//         this.name = name;;
//         this.age = age;
//         this.happiness = happiness;
//     }
// }

// var alex = new Person('Alex', 45, true);
// var bob = new Person('Bob', 25, false);
// console.log(alex.age);
// console.log(bob.age);

window.onload = function(){
    window.setInterval(function(){
        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var age = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

            if (day <= 9) {
                day=("0"+ day)};
            if (month <= 9) {
                month=("0"+ month)};
            if (seconds <= 9) {
                seconds=("0"+ seconds)};
            if (minutes <= 9) {
                minutes=("0"+ minutes)};    
            if (hours <= 9) {
                hours=("0"+ hours)};
        
        var day = day + "." + month + "." + age;
        document.getElementById("day").innerHTML = day;
        var clock = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").innerHTML = clock;
            
    }
    ), 1000;  
}


let button = false;
const engine = new Audio("./66.mp3");
engine.loop = true;

document.querySelector("button").addEventListener('click', function(){
    if(button === false){
        button = true;
        this.innerHTML = 'выкл';
        engine.play();
    }
    else{
        button = false;
        this.innerHTML = 'вкл';
        engine.pause();
    }
   
});
