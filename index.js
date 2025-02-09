import { program } from 'commander';
import { addContact, getContactById, listContacts, removeContact } from './contacts.js';

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();

const formatContact = ({ id, name, email, phone }) => (id ? ` - [${id}] ${name} - ${email} - ${phone}` : '');

// TODO: рефакторити
async function invokeAction({ action, id, ...data }) {
  switch (action) {
    case 'list':
      console.log((await listContacts()).map(formatContact).join('\n'));
      break;

    case 'get':
      console.log(formatContact(await getContactById(id)));
      break;

    case 'add':
      console.log(formatContact(await addContact(data)));
      break;

    case 'remove':
      console.log(formatContact(await removeContact(id)));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(options);
