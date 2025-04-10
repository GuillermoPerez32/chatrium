export type Contact = {
  id: number | null;
  name: string;
  email: string;
  phone: string;
  photo: string | null;
  businessName?: string; // Added businessName property
};

export const initialContact: Contact = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  photo: null,
};

export const initialEditContact = { ...initialContact, id: null };
