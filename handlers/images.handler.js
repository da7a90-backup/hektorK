export default async function handle_images(url, request){
// If the request is for one of these paths, fetch from public.hectorkitchen.com.s3.amazonaws.com
if (url.pathname.startsWith('/images/') ||

url.pathname === '/chat/institute/comportement-chat/chat-mange-vite-vomit') {
console.log("4");
return fetch('http://public.hectorkitchen.com.s3.amazonaws.com' + url.pathname + url.search,
request)
}
}