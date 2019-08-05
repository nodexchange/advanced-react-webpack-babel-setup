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
  .option(' (DEV) Docker PRUNE', 'prune')
  .option(' Three  ')
  .list();

list.on('select', options => {
  const script = config[options[0].value].script || 'default';
  console.log(`=== > script to be executed: ${script}`);
  shell.cd('bin/scripts');
  switch (options[0].value) {
    case 'dev-compose-build-up':
      // shell.exec(script);
      break;
    case 'dev-compose-build-up-detached':
      // shell.exec('docker-compose-up.sh');
      break;
    case 'prune':
      console.log('PRUNE TODO');
      break;
    default:
      console.log('SOMETHING ELSE --- STILL A TODO');
      break;
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
