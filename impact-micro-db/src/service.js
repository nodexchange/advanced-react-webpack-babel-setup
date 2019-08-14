require('dotenv').config();

const { send } = require('micro');
const { router, get, post } = require('microrouter');

const db = require('./DatabaseConnect');
const { Create, List } = require('./actions');

const user = process.env.DB_USERNAME;
const password = encodeURIComponent(process.env.DB_PASSWORD);
const host = process.env.DB_HOST;
const dbUrl = `mongodb://${user}:${password}@${host}`;
db.setup();

const printUser = req => {
  return `Hello ${req.params.who}`;
};

const printData = () => {
  return `Final Callback`;
};

const listItems = async (req, res) => {
  // List
  const items = {};
  db.connect(dbUrl)
    .then(await List.exec({}, items))
    .then(db.disconnect())
    .then(send(res, 200, items));
};

const createItem = async (req, res) => {
  const item = {
    title: `Event number ${Math.ceil(Math.random() * 1000)}`,
    ts: '20190312T120000',
    date: '23rd of June, 8pm',
    desc: 'La gestion des tests avec le plugin Zephyr dans Jira, par Sandrine DOMAGALA (Altran)',
    link: 'http://www.telecom-valley.fr/12-mars-2019-communaute-test-qualite-logiciel/',
    sponsors: [{ name: 'tv-ctql' }],
    picture: 'event-number-1',
    status: 'pending verification',
  };
  db.connect(dbUrl)
    .then(await Create.exec(item))
    .then(db.disconnect())
    .then(send(res, 200, 'OK'));
};

const notFound = (req, res) => {
  send(res, 404, 'Not found route');
};

const list = async (req, res) => listItems(req, res);
const find = async (req, res) => send(res, 200, await Promise.resolve(printUser(req)));
const update = async (req, res) => send(res, 200, await Promise.resolve(printUser(req)));
const create = async (req, res) => createItem(req, res);

module.exports = router(
  get('/find', find),
  get('/list', list),
  get('/*', notFound),
  post('/update', update),
  post('/create', create)
);
