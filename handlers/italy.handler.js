export default async function handle_italy(url, request){
// StoryBlock
// If the request is for one of these paths, fetch from cms.hectorkitchen.com
if (url.pathname.startsWith('/Index_CmsPages.xml') ||
url.pathname.startsWith('/crocchette-cani/') ||
url.pathname == '/razze-di-cani/' ||
url.pathname.startsWith('/institute/')
) {
console.log("1 " + 'http://cms.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com/it' +
url.pathname + url.search);
return await fetch('http://cms.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com/it' +
url.pathname + url.search, request);
}
// If the request is for one of these paths, fetch frompublic.hectorkitchen.com.s3.amazonaws.com
if (url.pathname === '/sitemap.xml' ||
url.pathname === '/sitemapinsta.xml' ||
url.pathname === '/robots.txt'
) {
console.log("3");
return await fetch('http://public.hectorkitchen.com.s3.amazonaws.com/it' + url.pathname +
url.search, request)
}
}
