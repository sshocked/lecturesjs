let fixComision = 100;
let percentComision = 0.02;

let amount = 1000;
let result = 0;
let commission = fixComision + (amount * percentComision);

//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas
let a = calculateCommission(1000, 200, 0.01);
//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas
let b = calculateCommission(1, 2, 3);
//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas
//adsdasdas




function calculateCommission(amount, fixComision, percentComision) {
    result = 1000;
    if(fixComision + (amount * percentComision) > amount) {
        console.log('слишком маленькая сумма');
        return;
    }
    return fixComision + (amount * percentComision);
}
