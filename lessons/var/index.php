<?php
$amount = 100;
$atmBalance = 100;

if ($amount <= $atmBalance) {
    $atmBalance = $atmBalance - $amount;
    echo 'Баланс после: ' . atmBalance;
} else {
    echo 'Нехватает денег';
}

for($i = 1; $i < 10; $i++) {
    print $i;
}




