var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var sec = document.body.querySelector(".second");
var count = document.body.querySelector(".counter");
var current = 0;

var pages = [
  {
  title:"Home",
  content:""
  
},
  {
   title:"About",
  content:"Jake"
  },
  {
    title:"Interact",
    content:""
  }
  ]

for(var i = 0; i < pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
      writeStuff(pg.content, pg.title);
   })
  this.button.innerHTML = pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
display.innerHTML = "";
count.innerHTML ="";
var big = document.createElement("h1");
big.innerHTML = pg;
  if(pg !== "Interact"){
    display.appendChild(big);
    sec.innerHTML = stuff;  
  }else{
    writeInteract();
  }
  

  
}
function writeInteract(){
  display.innerHTML = "";
  sec.innerHTML ="";
  count.innerHTML = "Counter: " + current;
  var heading = document.createElement("h1");
  heading.innerHTML = "Interact";
  display.appendChild(heading);
  
   var btn = document.createElement("BUTTON");   
   btn.innerHTML = "Increase Counter";                  
   sec.appendChild(btn); 
  
  btn.addEventListener("click", function(){
    current++;
 count.innerHTML = "Counter: " + current;
})

  
}
writeStuff(pages[0].content, "Home");