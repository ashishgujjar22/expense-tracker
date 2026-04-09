export function formatCurrency(amount){
const formatter = Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR"
})
return formatter.format(amount);
}

