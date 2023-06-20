import redirectTo from "../util/send_redirect_response";
export default function handle_alimentation_chien(alimentationchien){
var res = "";
if (alimentationchien.length >= 1){
if(alimentationchien[1] != null)
res = alimentationchien[1].endsWith("/") ? alimentationchien[1].substring(0,
alimentationchien[1].length -1) : alimentationchien[1];
else
res = ''
}
console.log("15");
return redirectTo('https://www.hectorkitchen.com/alimentation-chien'+res);
}