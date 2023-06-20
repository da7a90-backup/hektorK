export default async function handle_statics(url, request){
// If the request is for one of these paths, fetch from public.hectorkitchen.com.s3.amazonaws.com
if (url.pathname.startsWith('/fonts/') ||
url.pathname.startsWith('/css/')) {
console.log("3");
return fetch('http://public.hectorkitchen.com.s3.amazonaws.com' + url.pathname + url.search,
request)
}

}