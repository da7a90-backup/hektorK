export default async function handle_cats(url, request){
    // StoryBlock
// If the request is for one of these paths, fetch from cms.hectorkitchen.com
if (url.pathname.startsWith('/Index_CmsPages.xml') ||
url.pathname.startsWith('/chat/croquettes/') ||
url.pathname.startsWith('/chat/races/') ||
url.pathname === '/chat/institute/alimentation-chat/' ||
url.pathname === '/chat/institute/alimentation-chat/aloe-vera-chat/' ||
url.pathname === '/chat/institute/alimentation-chat/ration-menagere-chat/' ||
url.pathname === '/chat/institute/alimentation-chat/types-alimentation-chat/' ||
url.pathname === '/chat/institute/alimentation-chat/viande-crue-chat/' ||
url.pathname === '/chat/institute/sante-chat/' ||
url.pathname === '/chat/institute/sante-chat/puce-chat/' ||
url.pathname === '/chat/institute/sante-chat/sterilisation-chat/'
) {
console.log("1 " + 'http://cms.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com/fr' +
url.pathname + url.search);
return await fetch('http://cms.hectorkitchen.com.s3-website-eu-west-1.amazonaws.com/fr' +
url.pathname + url.search, request)
}

}