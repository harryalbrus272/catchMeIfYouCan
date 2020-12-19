var mov=document.getElementById('moving');
randomLocation();
mov.addEventListener('click', randomLocation);
function randomLocation(){
  let position=mov.getBoundingClientRect();
  let left= position.left;
  let top = position.right;
  let maxx= window.innerWidth-100;
  let maxy= window.innerHeight-100;
  let nx= Math.floor(Math.random()*maxy) + "px";
  let ny= Math.floor(Math.random()*maxx) + "px";
  mov.style.top=nx;
  mov.style.left=ny;
  console.log(nx);
  console.log(ny);
}
