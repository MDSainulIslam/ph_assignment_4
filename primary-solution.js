function totalFine( fare ) {
    if(typeof fare !== "number" || fare <= 0){
        return "Invalid"
    }
let serviceCharge = fare * 20/100;
let extraServiceCharge = 30;

let totalAmount = fare +  serviceCharge + extraServiceCharge;

return totalAmount;
}