var coup = document.querySelector("#coupon strong");
var inp = document.querySelector("#coupon input");
var file = document.querySelector('#visi_invisi');
var disc = document.querySelector("#discount");
var final = document.querySelector("#finalamt strong");

function applycoup(){
    inp.value = inp.value + coup.innerHTML;
}
function applied(){
    if(inp.value.length == 0){
        alert("Enter Coupon Code");
    }
    else{
        file.style.display = "block";
        var d = Math.floor((669970*25)/100);
        disc.innerHTML = "- Rs. " + d;

        final.innerHTML = "Rs. 5,02,478";             // 669970 - d
    }
}
function ordered(){
    alert("Ordered Successfully");
}
