export default function removeTrailingDash(url) {
    if (url.endsWith("/")) return url.substring(0, url.length -1);
    return url;
}