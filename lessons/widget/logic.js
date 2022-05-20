let myWidget = {};
myWidget.create  = function (target) {
    //target.innerHTML = '<form><input type="text" value="0"><input type="submit"></form>'; //в одну строку
    let myForm = document.createElement('form');
    let myInput = document.createElement('input');
    myInput.value = '0';
    myInput.type = 'number';
    let mySubmit = document.createElement('input');
    mySubmit.type = 'submit';
    myForm.append(myInput);
    myForm.append(mySubmit);
    target.append(myForm);
}