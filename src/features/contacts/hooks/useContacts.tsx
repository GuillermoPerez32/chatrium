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

  const addContact = (contact: Contact) => {
    if (contact.name && contact.email && contact.phone) {
      const newId =
        dataTable.length > 0
          ? (dataTable[dataTable.length - 1]?.id ?? 0) + 1
          : 1;
      setDataTable([...dataTable, { ...contact, id: newId }]);
      setNewContact(initialContact);
      setIsAddModalOpen(false);
    }
  };

  const saveEditContact = (contact: Contact) => {
    if (contact?.id && contact.name && contact.email && contact.phone) {
      setDataTable(dataTable.map((c) => (c.id === contact.id ? contact : c)));
      setEditContact(null);
    }
  };

  const deleteContact = (id: number) => {
    setDataTable(dataTable.filter((contact) => contact.id !== id));
  };

  const handleCSVImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Aunque la validación ya está en ContactsPage, añadimos una verificación adicional por seguridad
    if (!file.name.toLowerCase().endsWith(".csv")) {
      console.warn("Attempted to process a non-CSV file in handleCSVImport");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n").map((line) => line.split(","));
      const importedContacts = lines
        .slice(1) // Saltar la cabecera si existe
        .map((line, index) => ({
          id: dataTable.length + index + 1,
          name: line[0]?.trim() || "",
          email: line[1]?.trim() || "",
          phone: line[2]?.trim() || "",
          photo: "", // No hay photo en CSV, se deja vacío
        }))
        .filter((contact) => contact.name && contact.email && contact.phone); // Filtrar contactos incompletos
      setDataTable([...dataTable, ...importedContacts]);
    };
    reader.readAsText(file);
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
