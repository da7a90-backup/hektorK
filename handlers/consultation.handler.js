export default async function handle_consultations(url, request){
// If the request is for one of these paths, fetch from hk-consulation-1761d7258cc38537.elb.eu-west-1.amazonaws.com
if (url.pathname.startsWith('/_next/') ||
url.pathname.startsWith('/dog-consultation/') ||
url.pathname.startsWith('/cat-consultation/') ||
url.pathname === '/dog-consultation' ||
url.pathname === '/cat-consultation' ||
url.pathname.startsWith('/img/') ||
url.pathname.startsWith('/pet-consultation') ||
url.pathname.startsWith('/static/') ||
url.pathname === '/pet-consultation') {
console.log("2");
return await fetch('http://hk-consulation-1761d7258cc38537.elb.eu-west-1.amazonaws.com' +
url.pathname + url.search, request);
}
}