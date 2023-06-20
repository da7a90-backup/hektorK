import changeRequestOrigin from "../util/change_origin";
export default async function handle_my_match_root(request, myMatchRoot){
console.log("20");

request = changeRequestOrigin(request,
                         myMatchRoot[0],
                        `public.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com`, 
                        `public.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com`,
                        `http`, 
                        80)
return fetch(request);
}