window.addEventListener('load', function () {
   let myText = document.querySelector('.myText');
   let myButton = document.querySelector('.myBut');
   myButton.addEventListener('click', function () {
       let newP = document.createElement("p");
       newP.innerHTML = "3";
       newP.classList.add("mSpecialClass");
       myText.append(newP);
   })
});
