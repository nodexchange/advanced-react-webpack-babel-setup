require('dotenv').config();

const { send } = require('micro');
const { router, get, post } = require('microrouter');

const DatabaseConnect = require('./DatabaseConnect');
const ListActions = require('./actions/List');
// const connect = require('./MongoConnect');

const user = process.env.DB_USERNAME;
const password = encodeURIComponent(process.env.DB_PASSWORD);
const host = process.env.DB_HOST;
const dbUrl = `mongodb://${user}:${password}@${host}`;
// connect(dbUrl);

const printUser = req => {
  return `Hello ${req.params.who}`;
};

const listItems = req => {
  DatabaseConnect(dbUrl, ListActions.getPopulatedUsers);
  // console.log(req);
  return 'OKAY';
};

const notFound = (req, res) => {
  send(res, 404, 'Not found route');
};

const list = async (req, res) => send(res, 200, await Promise.resolve(listItems(req)));
const find = async (req, res) => send(res, 200, await Promise.resolve(printUser(req)));
const update = async (req, res) => send(res, 200, await Promise.resolve(printUser(req)));
const create = async (req, res) => send(res, 200, await Promise.resolve(printUser(req)));

module.exports = router(
  get('/find', find),
  get('/list', list),
  get('/*', notFound),
  post('/update', update),
  post('/create', create)
);
