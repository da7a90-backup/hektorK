export default function redirectTo(value, code = 301, description = 'Permanently Moved') {
    console.log("Redirected to : "+ value);
    
    return new Response(null, {
    status: code,
    statusText: description,
    headers: {
    'Location': value
    }
    });
}