import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { uid } from 'uid';

const contactsPath = resolve('db', 'contacts.json');

function writeContacts(contacts) {
  writeFile(contactsPath, JSON.stringify(contacts));
}

export async function listContacts() {
  const contacts = await readFile(contactsPath);
  return JSON.parse(contacts);
}

export async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find(({ id }) => id === contactId);
}

export async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex(({ id }) => id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removed] = contacts.splice(idx, 1);
  writeContacts(contacts);
  return removed;
}

export async function addContact(contactData) {
  const contacts = await listContacts();
  const newContact = { id: uid(), ...contactData };
  contacts.push(newContact);
  writeContacts(contacts);
  return newContact;
}
