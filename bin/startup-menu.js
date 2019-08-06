const shell = require('shelljs');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./bin/config/scripts-map.json'));

const list = require('select-shell')(
  /* possible configs */
  {
    pointer: ' ▸ ',
    pointerColor: 'yellow',
    checked: ' ◉  ',
    unchecked: ' ◎  ',
    checkedColor: 'blue',
    msgCancel: 'No selected options!',
    msgCancelColor: 'orange',
    multiSelect: false,
    inverse: true,
    prepend: true,
    disableInput: true,
  }
);

// eslint-disable-next-line no-unused-vars
const stream = process.stdin;

list
  .option(' (DEV) Start Project', 'dev-compose-build-up')
  .option(' (DEV) Start Project (detached)', 'dev-compose-build-up-detached')
  .option(' * PRODUCTION * - compose up', 'prod-compose-up')
  .option(' DOCKER COMPOSE - DOWN', 'compose-down')
  .option(' TODO - (prod)', 'prod-test')
  .option(' TODO - Docker PRUNE', 'docker-prune')
  .option(' Three  ')
  .list();

list.on('select', options => {
  const script = config[options[0].value].script || 'default';
  console.log(`=== > script to be executed: ${script}`);
  shell.cd('bin/scripts');
  if (script !== 'default') {
    shell.exec(script);
  }
  console.log(options);
  process.exit(0);
});

list.on('cancel', function(options) {
  console.log('Cancel list, ' + options.length + ' options selected');
  process.exit(0);
});

/*
  var select = require('select-shell')(
  {
    pointer: '> ',
    pointerColor: 'white',
    checked: ' ✓',
    unchecked: '',
    checkedColor: 'green',
    msgCancel: 'No selected options!',
    msgCancelColor: 'red',
    multiSelect: true,
    inverse: false,
    prepend: false,
    disableInput: true
  }
);
*/
