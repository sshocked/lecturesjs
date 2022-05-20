window.addEventListener('load', function () {
    let myButton = document.querySelector('.myButton');
    let myText = document.querySelector('.myText');
    myButton.addEventListener('click', function () {
        let tagP = document.createElement('p');
        tagP.innerHTML = 'ttestdsttet';
        tagP.classList.add('mSpecialClass');
        tagP.classList.remove('mSpecialClass');
        myText.prepend(tagP);
        tagP.addEventListener('click', function () {
            console.log('test me');
        });
        myButton.classList.remove('myButton');
    });
})