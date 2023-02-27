const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async id => {
  const contact = await listContacts();
  const result = contact.find(item => item.id === id);
  return result || null;
};

const removeContact = async id => {
  const contact = await listContacts();
  const index = contact.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contact.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
  return result;
};

const addContact = async body => {
  const contact = await listContacts();
  const newContact = {
    id: uuidv4(),
    ...body,
  };
  contact.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
  return newContact;
};

const updateContact = async (id, body) => {
  const contact = await listContacts();
  const index = contact.findIndex(contact => contact.id === id);
  if (index === -1) {
    return null;
  }
  contact[index] = { id, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
  return contact[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
