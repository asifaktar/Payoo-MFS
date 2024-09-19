// step no 1 hocche cash out btn take click kora;
document.getElementById("btn-cash-out").addEventListener("click", function(){
    // step no 2 hidden take remove kora;
    document.getElementById("cash-money-form").classList.remove("hidden");

    // step no 3 hidden  ta abar add kora cash out a;
    document.getElementById("add-money-form").classList.add("hidden");  
})

// step no 4 add mney btn ke click kora;
document.getElementById("btn-add-money").addEventListener('click', function(){

    // step no 5 abar hidden kora hoyeche add money ke;
    document.getElementById("add-money-form").classList.remove("hidden");

    // step no 6 abar  hidden ke remove kora hoyeche ;
    document.getElementById('cash-money-form').classList.add("hidden");
})

// Today my project is complete allhamdulillah;


