export default function changeRequestOrigin(request, url, domainName, host, protocol = 'http', port = 80) {
    const newUrl = new URL(request.url);
    newUrl.pathname = url;
    newUrl.hostname = domainName;
    newUrl.protocol = protocol;
    request = new Request(newUrl, request);
    request.headers.set('host', host);
    console.log("origin changed to: " + request.url);
    return request;
}