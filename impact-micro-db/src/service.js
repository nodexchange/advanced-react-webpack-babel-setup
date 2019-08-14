require('dotenv').config();

const { send } = require('micro');
const { router, get, post } = require('microrouter');

const db = require('./DatabaseConnect');
const ListActions = require('./actions/List');
const CreateActions = require('./actions/Create');

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

const listItems = req => {
  db.connect(dbUrl)
    .then(printData)
    .then(() => {
      console.log('resolved');
    })
    .then(db.disconnect());
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
    .then(await CreateActions.create(item))
    .then(db.disconnect())
    .then(send(res, 200, 'OK'));
};

const notFound = (req, res) => {
  send(res, 404, 'Not found route');
};

const list = async (req, res) => send(res, 200, await Promise.resolve(listItems(req)));
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
