import redirectTo from "../util/send_redirect_response";
export default function handleTrello319_hk_fr_5(url) {

    if (url.pathname.match("^\/institute\/astuces\-chien\/toilettage\-chien(\/)?$")) {
    
    return redirectTo('https://www.hectorkitchen.com/bienetre-chien/toilettage-chien');
    };
    if (url.pathname.match("^\/institute\/astuces\-chien\/age\-chien(\/)?$")) {
    return redirectTo('https://www.hectorkitchen.com/bienetre-chien/age-chien');
    };
    if (url.pathname.match("^\/institute\/astuces\-chien\/jouets\-chien(\/)?$")) {
    
    return redirectTo('https://www.hectorkitchen.com/accessoires-chien/jouets-chien');
    
    };
    if (url.pathname.match("^\/institute\/gamelle\-pour\-chien(\/)?$")) {
    
    return redirectTo('https://www.hectorkitchen.com/accessoires-chien/gamelle-pour-chien');
    };
    if (url.pathname.match("^\/institute\/astuces\-chien\/chien\-aboie(\/)?$")) {
    
    return redirectTo('https://www.hectorkitchen.com/comportement-chien/chien-aboie');
    };
    if (url.pathname.match("^\/races-de-chien(\/)?$")) {
    return redirectTo('https://www.hectorkitchen.com/race-chien');
    };
    if (url.pathname.match("^\/race-chien\/(.+)$")) {
    return redirectTo('https://www.hectorkitchen.com/' +
    url.pathname.match("^\/race-chien\/(.+)$")[1]);
    };
    if (url.pathname.match("^\/test\-nico\/(.+)$")) {
    return redirectTo('https://www.hectorkitchen.com/' +
    url.pathname.match("^\/race-chien\/(.+)$")[1]);
    };
    return null;
    }