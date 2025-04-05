import { useState } from "react";
import { initialDataTable } from "../data/contacts";
import { Contact, initialContact, initialEditContact } from "../types/contacts";

export const useContacts = () => {
  const [dataTable, setDataTable] = useState<Contact[]>(initialDataTable);
  const [newContact, setNewContact] = useState<Contact>(initialContact);
  const [editContact, setEditContact] = useState<Contact | null>(
    initialEditContact
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setNewContact({ ...newContact, photo: reader.result as string });
      reader.readAsDataURL(files[0]);
    } else {
      setNewContact({ ...newContact, [name]: value });
    }
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setEditContact({ ...editContact!, photo: reader.result as string });
      reader.readAsDataURL(files[0]);
    } else {
      setEditContact({ ...editContact!, [name]: value });
    }
  };

  const addContact = () => {
    if (newContact.name && newContact.email && newContact.phone) {
      const newId =
        dataTable.length > 0
          ? (dataTable[dataTable.length - 1]?.id ?? 0) + 1
          : 1;
      setDataTable([...dataTable, { ...newContact, id: newId }]);
      setNewContact(initialContact);
      setIsAddModalOpen(false);
    }
  };

  const saveEditContact = () => {
    if (
      editContact?.id &&
      editContact.name &&
      editContact.email &&
      editContact.phone
    ) {
      setDataTable(
        dataTable.map((c) => (c.id === editContact.id ? editContact : c))
      );
      setEditContact(null);
    }
  };

  const deleteContact = (id: number) => {
    setDataTable(dataTable.filter((contact) => contact.id !== id));
  };

  const handleCSVImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const lines = text.split("\n").map((line) => line.split(","));
        const importedContacts = lines
          .slice(1)
          .map((line, index) => ({
            id: dataTable.length + index + 1,
            name: line[0]?.trim() || "",
            email: line[1]?.trim() || "",
            phone: line[2]?.trim() || "",
            photo: null,
          }))
          .filter((contact) => contact.name && contact.email && contact.phone);
        setDataTable([...dataTable, ...importedContacts]);
      };
      reader.readAsText(file);
    }
  };

  const filteredDataTable = dataTable.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  return {
    dataTable,
    newContact,
    editContact,
    searchTerm,
    isAddModalOpen,
    setEditContact,
    setSearchTerm,
    setIsAddModalOpen,
    handleInputChange,
    handleEditInputChange,
    addContact,
    saveEditContact,
    deleteContact,
    handleCSVImport,
    filteredDataTable,
  };
};
