// step no 1 button ke select kora;
document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();

    // step no 2 input ke select kora;
    const cashOut = document.getElementById('input-cash-out').value;
    const convertNumber = parseFloat(cashOut);
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log("allhadulillah")

    // step no 3 conditional check kora;
    if(cashOutPin === "1234"){
        console.log("subhanallah");
        
       // step no 4 display ar total amount take dekhano;
       const balance = document.getElementById('account-balance').innerText;
       const balanceConvertNumber = parseFloat(balance);

       // step no 5 total amount thake bad - mainas kora;
        const newNumber = balanceConvertNumber - convertNumber;

        // step no 6 display the total new number;
        const displayTotalOutPut = document.getElementById("account-balance").innerText = newNumber;
        
    }
    else {
        alert("Your pin is not correct please enter the correct pin!.")
    }
})