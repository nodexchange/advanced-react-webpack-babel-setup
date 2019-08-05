const https = require('https');
const { run, send, sendError /* , json */ } = require('micro');
const microCors = require('micro-cors');
const { key, cert, passphrase } = require('openssl-self-signed-certificate');

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const API_IP = process.env.API_IP || '127.0.0.1';
const API_PORT = process.env.API_PORT || 3003;
const ENV = process.env.NODE_ENV || 'production';

const options = { key, cert, passphrase };

const cors = microCors({ allowMethods: ['GET', 'POST', 'PUT'] });
const microHttps = fn => https.createServer(options, cors((req, res) => run(req, res, fn)));

/**
 * handle POST requests
 */
async function postHandler(/* request */) {
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
async function getHandler(/* request */) {
  console.log('REQUEST');
  const eventsJson = await readFile('./data/events.json');
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

// server.listen(PORT, HOST_IP);
server.listen(API_PORT);
// eslint-disable-next-line no-console
console.log(`Listening on https://${API_IP}:${API_PORT}  ~~ env: ${ENV}`);
