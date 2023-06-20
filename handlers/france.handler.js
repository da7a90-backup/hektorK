import handle_internal_dir from "./internal_dir.handler";
import handle_alimentation_chien from "./alimentation_chien.handler";
import handle_bien_etre from "./bien_etre.handler";
import handle_internal_migrations from "./internal_migrations.handler";
import redirectTo from "../util/send_redirect_response";
import changeRequestOrigin from "../util/change_origin";
import removeTrailingDash from "../util/remove_trailing_dash";
import {
    REGEX_MIGRATION_INTERNAL_TO_BE_ADDED_HERE,
    REGEX_INTERNALREDIRECTIONS_TO_BE_ADDED_HERE, 
    MIGRATION_EXCEPTIONS,
    REGEX_DIRECTORIES_TO_BE_ADDED_HERE,
    REGEX_MIGRATIONS_TO_BE_ADDED_HERE,
    REGEX_TRANSPARENT_TO_WF
} from '../constants/constants'

export default async function handle_france(url, request){
console.log("5");

var isItAndException = url.pathname.match("("+MIGRATION_EXCEPTIONS+")");

const internalMigration = url.pathname.match( "^\/("+
REGEX_MIGRATION_INTERNAL_TO_BE_ADDED_HERE + ")(\/(?<d>.*))?$");

if (internalMigration) {
   return await handle_internal_migrations(internalMigration, request)
}

const nonchiemuredirecttoslash = url.pathname.match(/^\/institute\/astuces-chien\/(nom-chien-.*)[\/]?$/);

if (nonchiemuredirecttoslash) {
console.log("8");
return redirectTo('https://www.hectorkitchen.com/nom-chien/'+nonchiemuredirecttoslash[1]);
}

const dir = url.pathname.match( "^\/("+ REGEX_DIRECTORIES_TO_BE_ADDED_HERE +
")(\/(.*))?$");
const ba = url.pathname.match("^\/(" + REGEX_MIGRATIONS_TO_BE_ADDED_HERE + "(\/.+)?)");

if ((dir != null && dir[0] != null && dir[0].length > 1) && (isItAndException == null || isItAndException[0].length <= 0)) {
request = changeRequestOrigin(request, dir[0] , `hkfr-dog.hectorkitchen.com`, `hkfr-dog.hectorkitchen.com`, `https`, 443)
console.log("9");
return await fetch(request);
}

var nom_chien = url.pathname.match( "^\/(nom-chien)(\/(.*)[^\/])?$");
if ((nom_chien != null && nom_chien[0] != null && nom_chien[0].length > 1) && (isItAndException == null || isItAndException[0].length <= 0)) {
request = changeRequestOrigin(request, nom_chien[0], `hkfr-dog.hectorkitchen.com`, `hkfr-dog.hectorkitchen.com`, `https`, 443);
console.log("10");
return await fetch(request);
}

console.log("AFTER FETCHING DIRECTORIES")

if (ba != null && ba[0] != null && ba[0].length > 1) {

request = changeRequestOrigin(request, removeTrailingDash('/race-chien/'+url.pathname),
                        `hkfr-dog.hectorkitchen.com`, `hkfr-dog.hectorkitchen.com`, `https`, 443)
console.log("11 ");
return await fetch(request);
}

var transparent_wf = url.pathname.match("^\/(" + REGEX_TRANSPARENT_TO_WF + "(\/)?)$");
if (transparent_wf) {
request = changeRequestOrigin(request, transparent_wf[0], `hkfr-dog.hectorkitchen.com`, `hkfr-dog.hectorkitchen.com`, `https`, 443);
console.log("10a-transparentOriginChanges");
return await fetch(request);
}
/*
it was explicitly said by Julien to take all these pages down
const addSantechien = url.pathname.match("^\/(" +
REGEX_MIGRATIONS_SANTE_CHIEN_TO_BE_ADDED_HERE + ")");
if (addSantechien != null && addSantechien[0] != null && addSantechien[0].length > 1) {

request = changeRequestOrigin(request, '/sante-chien'+addSantechien[0] , `hkfr-
dog.hectorkitchen.com`, `hkfr-dog.hectorkitchen.com`, `https`, 443)

return fetch(request);
}*/
console.log("AFTER FETCHING RACES");
// -------------------Redirection --------------------------------FROM HERE
console.log("STARTING REDIRECTIONS");

const internalDir = url.pathname.match( "^\/("+
REGEX_INTERNALREDIRECTIONS_TO_BE_ADDED_HERE + ")(\/(?<d>.*))?$");
if (internalDir) {
return handle_internal_dir(internalDir);
}

const ba2 = url.pathname.match(/^\/race-chien\/(berger-australien)/);
if (ba2) {
console.log("13");
return redirectTo(`/berger-australien`);
}

const bienetre = url.pathname.match(/^\/institute\/bien-etre-chien(.*)/);
if (bienetre) {
return await handle_bien_etre(bienetre);
}
const alimentationchien = url.pathname.match(/\/institute\/alimentation-chien(\/.*)*$/);
if (alimentationchien) {
return handle_alimentation_chien(alimentationchien);
}

const nonchiemu = url.pathname.match(/^\/nom-chien-u\/?$/);
if (nonchiemu) {
console.log("16");
console.log("je log ici")
return redirectTo(`https://www.hectorkitchen.com/nom-chien/nom-chien-u-2023`);
}

const nonchiemuredirectSlash = url.pathname.match(/^\/(nom-chien)(\/(.*))?\/$/);
if (nonchiemuredirectSlash) {
console.log("17");
return redirectTo(request.url.slice(0, -1));
}
}