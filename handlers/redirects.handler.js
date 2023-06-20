import redirectTo from "../util/send_redirect_response";

export default function handle_redirects(url, request){
if (url.pathname.match('/\/races-de-chien$/')) {
    const newuri = request.url + '/';
    console.log("21");
    return redirectTo(newuri);
    }
    
    // begin - new croquettes cocon
    if (url.pathname.match(/\/razze-di-cani$/)) {
    console.log("22");
    return redirectTo(`https://it.hectorkitchen.com/razze-di-cani/`);
    }
    if (url.pathname.match(/pyrenaeen-schaeferhund\/ernaehrung\//)) {
    console.log("22.1");
    return redirectTo(`https://de.hectorkitchen.com/hundefutter/trockenfutter--
    pyrenaeen-schaeferhund/`);
    }
    if (url.pathname.match(/\/raza-de-perro$/)) {
    console.log("22.2");
    return redirectTo(`https://es.hectorkitchen.com/raza-de-perro/`);
    }
    if (url.pathname.match(/chat\/race-chat\/maine-coon$/)) {
    console.log("22.3");
    return redirectTo(`https://www.hectorkitchen.com/chat/croquettes/croquette--
    maine-coon/`);
    }
    
    if (url.pathname.match(/institute\/croquettes-light-chien/)) {
    console.log("22.4");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
    light`);
    
    }
    if (url.pathname.match(/institute\/un-exces-de-proteines-est-il-mauvais-pour-chiens-chats/)) {
    console.log("22.5");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/proteine-
    croquette`);
    
    }
    if (url.pathname.match(/institute\/croquette-bio-chien/)) {
    console.log("22.6");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
    bio`);
    
    }
    if (url.pathname.match(/institute\/alimentation-chien-age/)) {
    console.log("22.7");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
    senior`);
    
    }
    if (url.pathname.match(/institute\/alimentation-petit-chien/)) {
    console.log("22.8");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
    petit-chien`);
    
    }
    if (url.pathname.match(/institute\/croquette-chien-sterilise/)) {
    console.log("22.9");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
    chien-sterilise`);
    
    }
    if (url.pathname.match(/institute\/conservation-croquettes-chien/)) {
    console.log("22.10");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/conservation-
    croquette`);
    
    }
    if (url.pathname.match(/institute\/comment-choisir-les-croquettes-sans-cereales/)) {
    console.log("22.11");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
    sans-cereales`);
    
    }
    if (url.pathname.match(/institute\/glucides-croquettes-chien-chat/)) {
    console.log("22.12");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/glucide-
    croquette`);
    
    }
    if (url.pathname.match(/institute\/croquettes-chien-chat-cendres/)) {
    console.log("22.13");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/cendre-
    mineraux-croquette`);
    
    }
    if (url.pathname.match(/institute\/etiquette-croquettes-chien/)) {
    console.log("22.14");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/etiquette-
    croquette`);
    
    }
    if (url.pathname.match(/institute\/mycotoxines-croquettes/)) {
    console.log("22.15");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/mycotoxines-
    croquette`);
    
    }
    if (url.pathname.match(/institute\/croquettes-chien-quantite/)) {
    console.log("22.16");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
    quantite`);
    
    }
    if (url.pathname.match(/institute\/croquette-chien\/croquette-grand-chien/)) {
    console.log("22.17");
    
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette-
    grand-chien`);
    
    }
    if (url.pathname.match(/\/spitz\/alimentation\//)) {
    console.log("22.18");
    return redirectTo(`https://www.hectorkitchen.com/croquettes-chien/croquette--
    spitz-allemand`);
    }
}