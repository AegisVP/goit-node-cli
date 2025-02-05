import { program } from 'commander';
import { addContact, getContactById, listContacts, removeContact } from './contactsFileHandler.js';
import { uid } from 'uid';

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, ...data }) {
  switch (action) {
    case 'list':
      console.log(await listContacts());
      break;

    case 'get':
      console.log(await getContactById(id));
      break;

    case 'add':
      console.log(await addContact(data));
      break;

    case 'remove':
      console.log(await removeContact(id));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(options);

for (let i = 0; i < 10; i += 1) {
  console.log(uid());
}
