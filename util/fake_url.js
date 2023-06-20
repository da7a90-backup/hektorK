// workarround for editor issues 30/05/2023
export default function fakeUrl(urlfaked) {
    const init = {
    method: 'GET', // or 'POST', 'PUT', etc
    headers: {
    'content-type': 'application/json',
    }
    };
    // override request with this to test
    return new Request(urlfaked, init);
    }