// step no 1 

document.getElementById('add-money').addEventListener('click', function(event){
    // prevent default korayeche;
    event.preventDefault();

    // step no 2 input the selector;
    const addMoney = document.getElementById('input-add-money').value;
    
    const addPin = document.getElementById('input-add-pin').value;

    // step no 3 add the conditional system;
    if (addPin === "1234"){
        // step no 4 add money ;
        const balance = document.getElementById('account-balance').innerText;
        
        //step no 5 parseFoloat kora hoyeche akhane string thake number a poriborton kora hoyeche (parsefloat) diye;
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        
        // step no 6 total calculation kora hoyeche;
        const newTotalNumber = addMoneyNumber + balanceNumber;
        
        // step no 7 akhane total balance ta dekhalchi display te 9400 kache;
        document.getElementById('account-balance').innerText = newTotalNumber;
    }
    else {
        alert("Failed to not add your money.");
    }
})