// Submit the from information .


// step no 1 set event handler.
document.getElementById("btn-login").addEventListener("click", function(event){
    //step no 2 prevent default behavior (prevent reload ar jonno kora hoiche.)
    event.preventDefault(); // vejal to beginners ;
    console.log("Allhamduliiah");

    // step no 3 get the phone number;
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)

})