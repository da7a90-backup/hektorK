import redirectTo from "../util/send_redirect_response";
// This is a bad practice done due to the complexity of this script that has no test and there is not enough information about it
// so this cases are handler one by one, but will be a good idea to refactor in the future.

export default function handleEdgeCases(url) {
    console.log(url.pathname);

    if (url.pathname === '/bien-etre-chien/bois-cerf-chien') {
    
    return redirectTo('https://www.hectorkitchen.com/bienetre-chien/bois-cerf-chien');
    
    };
    if (url.pathname === '/bien-etre-chien/assurance-chien') {
    
    return redirectTo('https://www.hectorkitchen.com/bienetre-chien/assurance-chien');
    };
    if (url.pathname === '/bien-etre-chien/agility-chien') {
    return redirectTo('https://www.hectorkitchen.com/bienetre-chien/agility-chien');
    };
    if (url.pathname === '/chat/institute/comportement-chat/chat-mange-vite-vomit') {
    
    return redirectTo('https://www.hectorkitchen.com/chat/institute/comportement-chat/chat-mange-vite-vomit/');
    };
    if (url.pathname === '/chat/institute/comportement-chat/chat-miaule') {
    
    return redirectTo('https://www.hectorkitchen.com//chat/institute/comportement-chat/chat-miaule/');
    };
    
    if (url.pathname === '/chat/institute/adopter-chaton') {
    
    return redirectTo('https://www.hectorkitchen.com/chat/institute/adoption-chat/adopter-chaton/');
    };
    if (url.pathname === '/chat/institute/astuces-chat/nom--chat--s--2021') {
    
    return redirectTo('https://www.hectorkitchen.com/chat/nom-chat/nom-chat-s-2021/');
    };
    if (url.pathname === '/chat/institute/astuces-chat/nom--chat--t--2022') {
    
    return redirectTo('https://www.hectorkitchen.com/chat/nom-chat/nom-chat-t-2022/');
    };
    if (url.pathname.match("^\/cane-corso\/(assurance|caractere|caracteristiques\-physiques|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/cane-corso');
    };
    if (url.pathname.match("^\/berger-australien\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/berger-australien');
    };
    if (url.pathname.match("^\/spitz-nain\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    
    return redirectTo('https://www.hectorkitchen.com/spitz-nain');
    };
    if (url.pathname.match("^\/carlin\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/carlin');
    };
    if (url.pathname.match("^\/shih-tzu\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/shih-tzu');
    };
    if (url.pathname.match("^\/boxer\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/boxer');
    };
    if (url.pathname.match("^\/eurasier\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/eurasier');
    };
    if (url.pathname.match("^\/pinscher\-nain\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/pinscher-nain');
    };
    if (url.pathname.match("^\/yorkshire\-terrier\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/yorkshire-terrier');
    };
    if (url.pathname.match("^\/staffordshire\-bull\-terrier\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/staffordshire-bull-terrier');
    };
    if (url.pathname.match("^\/welsh\-corgi\-pembroke\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/welsh-corgi-pembroke');
    };
    if (url.pathname.match("^\/border\-collie\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/border-collie');
    };
    if (url.pathname.match("^\/bouvier\-bernois\/(assurance|alimentation|caracteristiques\-physiques|caractere|conditions\-de\-vie|education|entretien|jeux|sante|sommeil)?/?$")) {
    return redirectTo('https://www.hectorkitchen.com/bouvier-bernois');
    };
    if (url.pathname.match("^\/institute\/bien-etre-chien(\/(?<d>.*))?$")) {
    let slug = url.pathname.match("^\/institute\/bien-etre-chien(\/(?<d>.*))?$$").groups['d'] ;
    slug = slug == undefined ? '': slug;
    
    return redirectTo(removeTrailingDash('https://www.hectorkitchen.com/bienetre-chien/'+slug));
    };
    if (url.pathname.match('^\/bienetre-chien(\/?.*)?\/$')) {
    console.log("slug ")
    return redirectTo(removeTrailingDash('https://www.hectorkitchen.com' +
    removeTrailingDash(url.pathname)));
    };
    return null;
    }