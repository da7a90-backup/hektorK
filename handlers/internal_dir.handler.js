import redirectTo from "../util/send_redirect_response";
export default function handle_internal_dir(internalDir){
let page = internalDir.groups['d'];
page = (page == null) ? '' : '/' + page;
page = page.endsWith('/') ? page.substring(0, page.length -1) : page;
let directory = internalDir.groups['page'];
if (directory == null) directory = '';
directory = directory.endsWith('/') ? directory.substring(0, directory.length -1) : directory;
console.log("12");
return redirectTo('https://www.hectorkitchen.com/' + directory + page);
}