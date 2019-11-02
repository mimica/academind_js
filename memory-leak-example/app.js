const addListenerBtn = document.getElementById('add-listener-btn');
const clickAbleBtn = document.getElementById('clickable-btn');


//function printMessage() {
//  console.log('Here is a message');
//}

// Memory leak example, multiples listeners are added to the button
function addListener() {
  clickAbleBtn.addEventListener('click', function() {
    console.log('Here is a message');
  });
}

addListenerBtn.addEventListener('click', addListener);