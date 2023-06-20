import redirectTo from "../util/send_redirect_response";

export default function handle_remove_DH_and_trailing(url, request){
request = changeRequestOrigin( request, 
                        removeTrailingDash(url.pathname.replace("--", "-")),
                        `hkfr-dog.hectorkitchen.com`, 
                        `hkfr-dog.hectorkitchen.com`, 
                        `https`, 
                        443 
                    );

console.log("4.1");
// Al final, devolvemos la respuesta del fetch
//return await fetch(request);
return redirectTo(removeTrailingDash("https://"+url.host +
url.pathname.replace("--", "-")));
}