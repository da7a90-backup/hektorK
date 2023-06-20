import changeRequestOrigin from "../util/change_origin";
export default async function handle_my_match(request, myMatch){
console.log("19");

request = changeRequestOrigin(request, 
    '/fr' + myMatch[0], 
    'public.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com', 
    'public.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com',
    `http`, 
    80)
return fetch(request);
}