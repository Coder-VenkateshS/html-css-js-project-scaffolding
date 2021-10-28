let button = document.getElementById("theBoxes");
// console.log(button);
button.addEventListener('click', myFunction)
var i=1;
var oldValue=0;

function myFunction() {
    // to create a new element in the html
    let n=document.getElementById('number').value;
    n=parseInt(oldValue)+parseInt(n);
    // console.log(n);
    for(;i<=n;i++){
  var box = document.createElement('div');
  // .classList method is used to define the class .myDiv in css and class="myDiv"
  // for the div we created as box
  box.classList.add('myDiv');
  document.getElementById('box').appendChild(box); 
  box.innerHTML+= i;
   oldValue=document.getElementById('box').lastElementChild.innerHTML;
    }
}
