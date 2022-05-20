<?php
$MERCHANT_ID   = 40467;                 // ID магазина
$SECRET_WORD   = 'knMIeoduHikAyuQTiKNZamV562NHi5j6';   // Секретный ключ
$ORDER_AMOUNT  = 15;                 // Сумма заказа
$PAYMENT_ID    = time();             // ID заказа (мы используем time(), чтобы был всегда уникальный ID)

$sign = md5($MERCHANT_ID.':'.$ORDER_AMOUNT.':'.$SECRET_WORD.':'.$PAYMENT_ID);  //Генерация ключа
?>

<form method='get' action='https://oplata.to/pay'>
    <input type='hidden' name='m' value='<?=$MERCHANT_ID?>'>
    <input type='hidden' name='oa' value='<?=$ORDER_AMOUNT?>'>
    <input type='hidden' name='o' value='<?=$PAYMENT_ID?>'>
    <input type='hidden' name='p' value='cd'>
    <input type='hidden' name='s' value='<?=$sign?>'>
    <input type="submit" value="Оплатить">
</form>