import redirectTo from "../util/send_redirect_response";
import changeRequestOrigin from "../util/change_origin";
export default async function handle_internal_migrations(internalMigration, request){
    console.log("6");
let directory = internalMigration.groups['page'];
if (directory == null) directory = '';
let page = internalMigration.groups['d'];
page = (page == null) ? '' : '/' + page;
console.log("page " + (directory+page));

if ((directory+page).endsWith('/')) {
page = page.substring(0, page.length -1);
let pathname = (directory+page).substr(0, (directory+page).length);
return redirectTo('https://www.hectorkitchen.com' + '/'+pathname );
}
directory = directory.endsWith('/') ? directory.substr(0, directory.length -1) : directory;

request = changeRequestOrigin(request, '/'+directory+page, `hkfr-dog.hectorkitchen.com`, `hkfr-dog.hectorkitchen.com`, `https`, 443);

console.log("7");
// Al final, devolvemos la respuesta del fetch
return await fetch(request);
}