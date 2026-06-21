function calculategst(){
    let a = Number(document.getElementById("gst").value);
    let b = Number(document.getElementById("amount").value);
    let c = a * b / 100
    let total = b + c
    document.getElementById("total").value=total

}