import changeRequestOrigin from "../util/change_origin";
export default async function handle_my_match_poly(request, myMatchpoly){
console.log("18");
request = changeRequestOrigin(request, myMatchpoly[0], `cms.hectorkitchen.com.s3-website-eu-
west-1.amazonaws.com`, `cms.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com`,
`http`, 80)
return fetch(request);
}