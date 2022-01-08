import fetchWithTimeout from './fetchWithTimeout';

export default async function sendData(
  method,
  url = '',
  data = null,
  headers = {},
  inputTimeout = 5,
) {
  // Default options are marked with *
  const timeout = inputTimeout * 1000;
  const options = {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data), // body data type must match "Content-Type" header
  };

  if (data !== null) {
    options.body = JSON.stringify(data);
  }

  const response = await fetchWithTimeout(url, options, timeout);
  return response; // parses JSON response into native JavaScript objects
}
