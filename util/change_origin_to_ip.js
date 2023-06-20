export default function changeRequestOriginToIP(request, uri) {
    var domainName = '';
    var country = uri.hostname.split('.')[0];
    if (country === 'it.') domainName = 'init.hectorkitchen.com';
    if (country === 'fr.' || country === 'www') domainName = 'infr.hectorkitchen.com';
    if (country === 'es.') domainName = 'ines.hectorkitchen.com';
    if (country === 'de.') domainName = 'inde.hectorkitchen.com';
    if (country === 'uk.') domainName = 'inuk.hectorkitchen.com';
    const newUrl = new URL(request.url);
    newUrl.pathname = uri.pathname;
    newUrl.hostname = domainName;
    newUrl.protocol = 'https';
    request = new Request(newUrl, request);
    request.headers.set('host', domainName);
    return request;
    }