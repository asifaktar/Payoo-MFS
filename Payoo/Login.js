// Submit the from information .


// step no 1 set event handler.
document.getElementById("btn-login").addEventListener("click", function(event){
    //step no 2 prevent default behavior (prevent reload ar jonno kora hoiche.)
    event.preventDefault(); // vejal to beginners ;
    console.log("Allhamduliiah");

    // step no 3 get the phone number;
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)

    // step no 4 get the pin number;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)

    //condition wes logic.
    if (phoneNumber === "7" && pinNumber === "12345"){
        console.log("walikumussalam o rohamatullahe o barakatuthu.");

        // onno html file set korar jonno ata likha hoyeche.
        window.location.href = "/homepage.html";
    }
    else {
        alert("wrong number please enter the correct number.")
    }

})