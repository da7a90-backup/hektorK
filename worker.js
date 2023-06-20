import handleEdgeCases from "./handlers/handle_edge_cases";
import handleTrello319_hk_fr_5 from "./handlers/handle_trello319_hk_fr_5";
import changeRequestOrigin from "./util/change_origin";
import changeRequestOriginToIP from "./util/change_origin_to_ip";
import fakeUrl from "./util/fake_url";
import redirectTo from "./util/send_redirect_response";
import regexFromArr from "./util/regexFromArr";
import routes from "./variables/routes";
import removeDoubleHiphonAndTrailing from "./variables/removeDoubleHiphonAndTrailing";
import handle_italy from "./handlers/italy.handler";
import handle_spain from "./handlers/spain.handler";
import handle_germany from "./handlers/germany.handler";
import handle_uk from "./handlers/uk.handler";
import handle_cats from "./handlers/cats.handler";
import handle_consultations from "./handlers/consultation.handler";
import handle_statics from "./handlers/statics.handler";
import handle_images from "./handlers/images.handler";
import handle_remove_DH_and_trailing from "./handlers/removeDHAndT.handler";
import handle_france from "./handlers/france.handler";
import handle_my_match from "./handlers/my_match.handler";
import handle_my_match_poly from "./handlers/my_match_poly.handler";
import handle_my_match_root from "./handlers/my_match_root.handler";
import handle_redirects from "./handlers/redirects.handler";


const destDomain = 'cms.hectorkitchen.com.s3.amazonaws.com';

addEventListener('fetch', event => {
event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

let url = new URL(request.url);
// to run test mode leave the url of the worker and override it in the line bellow
if (url.host.startsWith("www-hk-routing")){
console.log("running test mode!!!!!!!!!!!!!!!!!");
request = fakeUrl('https://www.hectorkitchen.com/chow-chow');

url = new URL(request.url);
}

var country = url.hostname.split('.')[0];
country = country === 'www' ? 'fr' : country;


var result = handleEdgeCases(url) || handleTrello319_hk_fr_5(url);

if (result != null) return result;

console.log(url.pathname);

if (country == 'it'){
    const it_response = await handle_italy(url, request);
    if(it_response!==undefined) return it_response;
}

if (country == 'es'){
    const es_response = await handle_spain(url, request);
    if(es_response!==undefined) return es_response;
}

if (country == 'de'){
    const de_response = await handle_germany(url, request);
    if(de_response!==undefined) return de_response;
}

if (country == 'uk'){
    const uk_response = await handle_uk(url, request);
    if(uk_response!==undefined) return uk_response;
}

const cats_response = await handle_cats(url, request);
if(cats_response!==undefined) return cats_response;

const consultation_response = await handle_consultations(url, request);
if(consultation_response!==undefined) return consultation_response;

const statics_response = await handle_statics(url, request);
if(statics_response!==undefined) return statics_response;

const images_response = await handle_images(url, request);
if(images_response!==undefined) return images_response;

if (removeDoubleHiphonAndTrailing.indexOf(url.pathname) != -1) {
return handle_remove_DH_and_trailing(url, request);
}

if (country == "fr") {
    const fr_response = await handle_france(url, request);
    if(fr_response!==undefined) return fr_response;
// -------------------Redirection --------------------------------TO HERE
}

console.log("FINISHING REDIRECTIONS");
const myMatchpoly = url.pathname.match(/\/(polyfill-.*\.js)$/);
if (myMatchpoly) {
 return await handle_my_match_poly(request, myMatchpoly);
}

const myMatch = url.pathname.match(/\/(robots\.txt|sitemap\.xml|sitemapinsta\.xml|apple-app-site-association\.txt|ads\.txt|app-ads\.txt)$/);

if (myMatch) {
 return await handle_my_match(request, myMatch);
}

const myMatchRoot = url.pathname.match(/\/(favicon-32x32\.png|main-css-head.*\.css|main-js-.*\.js|favicon\.ico)$/);

if (myMatchRoot) {
 return await handle_my_match_root(request, myMatchRoot);
}
const redirect_response = handle_redirects(url, request);
if(redirect_response!==undefined) return redirect_response;

// end - new croquettes cocon
if (matches[country] && url.pathname.match(matches[country])) {
console.log("23");
const regexAlimentation = /berger-australien\/alimentation.*/
const regexOthers = /(berger-australien\/.*\/)(.+)/
const matchAlimentation = url.pathname.match(regexAlimentation)
if (matchAlimentation) {
console.log("24");

return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
berger-australien`);

}
const matchOthers = url.pathname.match(regexOthers);
if (matchOthers && matchOthers[2]) {
console.log("25");
return redirectTo(`https://www.hectorkitchen.com/${matchOthers[1]}`);
}

const regexAlimentationGS = /berger-allemand\/alimentation.*/
const regexOthersGS = /(berger-allemand\/.*\/)(.+)/

const matchAlimentationGS = url.pathname.match(regexAlimentationGS)
if (matchAlimentationGS) {
console.log("26");

return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
berger-allemand`);

}
const matchOthersGS = url.pathname.match(regexOthersGS);
if (matchOthersGS && matchOthersGS[2]) {
console.log("27");
return redirectTo(`https://www.hectorkitchen.com/${matchOthersGS[1]}`);
}

url.pathname = `/${country}${url.pathname}`;
if (url.pathname.match('.+/$')) {
url.pathname += 'index.html';
} else {
console.log("28 " + request.url);
return Response.redirect(request.url, 301);
}
var request = changeRequestOrigin(request, url.pathname, destDomain, destDomain, `http`);
console.log("29");
return await fetch(request);

}
changeRequestOriginToIP(request, url);
console.log("30");
return fetch(request);
}

const matches = {};
Object.keys(routes).map(cn => {
matches[cn] = regexFromArr(routes[cn]);
});