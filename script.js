let billamount = document.getElementById("billAmount");
let percentagetip = document.getElementById("percentageTip");
let errormsg = document.getElementById("errorMessage");
let message = "Please Enter a Valid Input";
let tipamount = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");

function calculate_tip_button() {
    let billamountinput = billamount.value;
    console.log(billamountinput);
    let percentagetipinput = percentagetip.value;
    if (billamountinput === "") {
        errormsg.textContent = message;
    } else if (percentagetipinput === "") {
        errormsg.textContent = message;
    } else if (billamountinput === "" & percentagetipinput === "") {
        errormsg.textContent = message;
    } else {
        errormsg.textContent = "";
        let intbillamount = parseInt(billamountinput);
        let intpercentagetip = parseInt(percentagetipinput);
        let tipamount1 = (intpercentagetip / 100) * intbillamount;
        let total1 = intbillamount + tipamount1;
        tipamount.value = tipamount1;
        total.value = total1;

    }
}