function changePricesBR() {
    if (!document.getElementById('usa').classList.contains('non-selected'))
        document.getElementById('usa').classList.add('non-selected');
    if (document.getElementById('br').classList.contains('non-selected'))
         document.getElementById('br').classList.remove('non-selected');


    document.getElementById('price-1').innerHTML = '<strong>R$</strong> 9,99<a>/mês</a>';
    document.getElementById('price-2').innerHTML = '<strong>R$</strong> 12,99<a>/mês</a>';
    document.getElementById('price-3').innerHTML = '<strong>R$</strong> 15,99<a>/mês</a>';
    document.getElementById('price-4').innerHTML = '<strong>R$</strong> 18,99<a>/mês</a>';
    document.getElementById('price-5').innerHTML = '<strong>R$</strong> 20,99<a>/mês</a>';
    document.getElementById('price-6').innerHTML = '<strong>R$</strong> 22,99<a>/mês</a>';
    document.getElementById('price-7').innerHTML = '<strong>R$</strong> 24,99<a>/mês</a>';
    document.getElementById('price-8').innerHTML = '<strong>R$</strong> 32,99<a>/mês</a>';
    document.getElementById('price-9').innerHTML = '<strong>R$</strong> 36,99<a>/mês</a>';
    document.getElementById('price-10').innerHTML = '<strong>R$</strong> 39,99<a>/mês</a>';
    document.getElementById('price-11').innerHTML = '<strong>R$</strong> 42,99<a>/mês</a>';
    document.getElementById('price-12').innerHTML = '<strong>R$</strong> 59,99<a>/mês</a>';

    document.getElementById('price-1').innerHTML = '<strong>R$</strong> 9,99<a>/mês</a>';

    document.getElementById('buy-1').href = "http://cliente.loup.host/cart.php?a=add&pid=2x";
    document.getElementById('buy-2').href = "http://cliente.loup.host/cart.php?a=add&pid=3";
    document.getElementById('buy-3').href = "https://cliente.loup.host/cart.php?a=add&pid=4";
    document.getElementById('buy-4').href = "https://cliente.loup.host/cart.php?a=add&pid=5";
    document.getElementById('buy-5').href = "https://cliente.loup.host/cart.php?a=add&pid=7";
    document.getElementById('buy-6').href = "https://cliente.loup.host/cart.php?a=add&pid=8";
    document.getElementById('buy-7').href = "https://cliente.loup.host/cart.php?a=add&pid=10";
    document.getElementById('buy-8').href = "https://cliente.loup.host/cart.php?a=add&pid=11";
    document.getElementById('buy-9').href = "https://cliente.loup.host/cart.php?a=add&pid=12";
    document.getElementById('buy-10').href = "https://cliente.loup.host/cart.php?a=add&pid=13";
    document.getElementById('buy-11').href = "https://cliente.loup.host/cart.php?a=add&pid=14";
    document.getElementById('buy-12').href = "https://cliente.loup.host/cart.php?a=add&pid=15";
}

function changePricesUSA() {
    if (!document.getElementById('br').classList.contains('non-selected'))
        document.getElementById('br').classList.add('non-selected');
    if (document.getElementById('usa').classList.contains('non-selected'))
         document.getElementById('usa').classList.remove('non-selected');


    document.getElementById('price-1').innerHTML = '<strong>R$</strong> 5,99<a>/mês</a>';
    document.getElementById('price-2').innerHTML = '<strong>R$</strong> 8,99<a>/mês</a>';
    document.getElementById('price-3').innerHTML = '<strong>R$</strong> 11,99<a>/mês</a>';
    document.getElementById('price-4').innerHTML = '<strong>R$</strong> 14,99<a>/mês</a>';
    document.getElementById('price-5').innerHTML = '<strong>R$</strong> 17,99<a>/mês</a>';
    document.getElementById('price-6').innerHTML = '<strong>R$</strong> 20,99<a>/mês</a>';
    document.getElementById('price-7').innerHTML = '<strong>R$</strong> 22,99<a>/mês</a>';
    document.getElementById('price-8').innerHTML = '<strong>R$</strong> 24,99<a>/mês</a>';
    document.getElementById('price-9').innerHTML = '<strong>R$</strong> 26,99<a>/mês</a>';
    document.getElementById('price-10').innerHTML = '<strong>R$</strong> 28,99<a>/mês</a>';
    document.getElementById('price-11').innerHTML = '<strong>R$</strong> 31,99<a>/mês</a>';
    document.getElementById('price-12').innerHTML = '<strong>R$</strong> 44,99<a>/mês</a>';

    document.getElementById('buy-1').href = "https://cliente.loup.host/cart.php?a=add&pid=17";
    document.getElementById('buy-2').href = "https://cliente.loup.host/cart.php?a=add&pid=18";
    document.getElementById('buy-3').href = "https://cliente.loup.host/cart.php?a=add&pid=19";
    document.getElementById('buy-4').href = "https://cliente.loup.host/cart.php?a=add&pid=20";

    document.getElementById('buy-5').href = "https://cliente.loup.host/cart.php?a=add&pid=21";
    document.getElementById('buy-6').href = "https://cliente.loup.host/cart.php?a=add&pid=22";
    document.getElementById('buy-7').href = "https://cliente.loup.host/cart.php?a=add&pid=23";
    document.getElementById('buy-8').href = "https://cliente.loup.host/cart.php?a=add&pid=25";
    document.getElementById('buy-9').href = "https://cliente.loup.host/cart.php?a=add&pid=26";
    document.getElementById('buy-10').href = "https://cliente.loup.host/cart.php?a=add&pid=27";
    document.getElementById('buy-11').href = "https://cliente.loup.host/cart.php?a=add&pid=28";
    document.getElementById('buy-12').href = "https://cliente.loup.host/cart.php?a=add&pid=29";


}