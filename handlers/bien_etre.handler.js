export default async function handle_bien_etre(bienetre){
var res = "";
if (bienetre.length >= 1){
res = bienetre[1].endsWith("/") ? bienetre[1].substring(0, bienetre[1].length -1) : bienetre[1];
}
console.log("14");
//return sendCallbackRequest('https://www.hectorkitchen.com/bienetre-chien'+res);
return await fetch('https://www.hectorkitchen.com/bienetre-chien'+res);
}