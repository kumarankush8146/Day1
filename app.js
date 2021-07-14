// var audio = new Audio("sounds/BOYS NOIZE - Alarm (WHO AM I O.S.T.) (Official Audio) (320  kbps).mp3")
// audio.play();


var audio1 = new Audio("sounds/clap.wav");
var audio2 = new Audio("sounds/hihat.wav");
var audio3 = new Audio("sounds/kick.wav");
var audio4 = new Audio("sounds/openhat.wav");
var audio5 = new Audio("sounds/boom.wav");
var audio6 = new Audio("sounds/ride.wav");
var audio7 = new Audio("sounds/snare.wav");
var audio8 = new Audio("sounds/tom.wav");
var audio9 = new Audio("sounds/tink.wav");

// document.addEventListener("keydown", event =>{
//     if(event.keyCode == 65){
//         audio1.play();
//         audio1.currentTime = 0;
//     }

//     else if(event.keyCode == 83){
//         audio2.play();
//         audio2.currentTime = 0;
//     }

//     else if(event.keyCode == 68){
//         audio3.play();
//         audio3.currentTime = 0;
//     }
//     else if(event.keyCode == 70){
//         audio4.play();
//         audio4.currentTime = 0;
//     }

//     else if(event.keyCode == 71){
//         audio5.play();
//         audio5.currentTime = 0;
//     }

//     else if(event.keyCode == 72){
//         audio6.play();
//         audio6.currentTime = 0;
//     }

//     else if(event.keyCode == 74){
//         audio7.play();
//         audio7.currentTime = 0;
//     }

//     else if(event.keyCode == 75){
//         audio8.play();
//         audio8.currentTime = 0;
//     }

//     else if(event.keyCode == 76){
//         audio9.play();
//         audio9.currentTime = 0;
//     }

// });







// document.addEventListener('keydown', event =>{
//     const transition = Array.from(document.querySelectorAll('.child'));


//     transition.forEach(child => child.addEventListener('transitionend', myFunction));
//     // transition.addEventListener('transitionend', myFunction);




//     console.log(transition);

//     function myFunction() {
//         this.style.transition = 1;
//         // this.style.backgroundColor = "white";
//         // this.style.color = "black";
//       }

// });



// ///////////////////////////////////////////////////////////////////////

function playSound(e){
    // console.log(e.keyCode);

    

    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    
    // console.log(key);

    if(!audio)
        return;


    audio.currentTime = 0; //rewind to the start
    audio.play();
    // audio.currentTime = 0; 

    key.classList.add('playing'); //adding transition style


}



function removeTransition(e){
    // console.log(e);

    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');

    // console.log(e.propertyName);
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);

// window.addEventListener('click', playSound); //todo
















// ////////////////////////////////////////////////////////////////

// document.getElementById("playAudio").addEventListener("click", function(){
// 	var audio = document.getElementById('testAudio');
//   if(this.className == "is-playing"){
//     this.className = "";
//     this.innerHTML = "Play anonymous"
//     audio.pause();
//   }else{
//     this.className = "is-playing";
//     this.innerHTML = "| |";
//     audio.play();
//   }

// });



var button = document.getElementById("button");
var audio = document.getElementById("testAudio");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "| |";
  } else {
    audio.pause();
    button.innerHTML = "Play anonymous";
  }
});




var x = document.getElementsByClassName("key");


for(let i = 0; i < x.length; i++){



  x[i].addEventListener("click", function(){
    // if(x[i] === x[0]){
    //     audio1.play();
    // }

    switch(x[i]){
      case x[0]: audio1.play(); audio1.currentTime = 0;
        break;

      case x[1]: audio2.play(); audio2.currentTime = 0;
        break;

      case x[2]: audio3.play(); audio3.currentTime = 0;
        break;  
        
      case x[3]: audio4.play(); audio4.currentTime = 0;
        break;

      case x[4]: audio5.play(); audio5.currentTime = 0;
        break;

      case x[5]: audio6.play(); audio6.currentTime = 0;
        break;

      case x[6]: audio7.play(); audio7.currentTime = 0;
        break;

      case x[7]: audio8.play(); audio8.currentTime = 0;
        break;

      case x[8]: audio9.play(); audio9.currentTime = 0;
        break;


    }

    x[i].classList.add('playing');




  });

}





// console.log(x[1]);