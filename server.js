const https = require('https');
const { run, send, sendError /* , json */ } = require('micro');
const { key, cert, passphrase } = require('openssl-self-signed-certificate');

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const PORT = process.env.PORT || 3443;

const options = { key, cert, passphrase };

const microHttps = fn => https.createServer(options, (req, res) => run(req, res, fn));

/**
 * handle POST requests
 */
async function postHandler(request) {
  // try {
  //   const events = await json(eventsJson);
  // } catch (e) {
  //   console.log(e);
  // }
  const events = { status: 'DONE' };
  return events;
}

/**
 * handle GET requests
 */
async function getHandler(request) {
  const eventsJson = await readFile('./src/data/events.json');
  return JSON.parse(eventsJson);
}

/**
 * Check the request method and use postHandler or getHandler (or other method handlers)
 */
async function methodHandler(request, response) {
  try {
    switch (request.method) {
      case 'POST':
        return await postHandler(request);
      case 'GET':
        return await getHandler(request);
      default:
        send(response, 405, 'Invalid method');
        break;
    }
  } catch (error) {
    throw error;
  }
  return 'error: unhandled';
}

const server = microHttps(async (request, response) => {
  try {
    send(response, 200, await methodHandler(request));
  } catch (error) {
    sendError(request, response, error);
  }
});

server.listen(PORT);
console.log(`Listening on https://localhost:${PORT}`);
