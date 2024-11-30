import { ContactCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contacts = await ContactCollection.findById(contactId);
  return contacts;
};

export const createContact = async (payload) => {
  const contact = await ContactCollection(payload);
  return contact;
};

export const updateContact = async (studentId, payload, options = {}) => {
  const rawResult = await ContactCollection.findByIdAndUpdate(
    { _id: studentId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || rawResult.values) return null;

  return {
    contact: rawResult.values,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (contactId) => {
  const contact = await ContactCollection.findByIdAndDelete({ _id: contactId });
  return contact;
};
