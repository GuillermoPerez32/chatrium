import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash, Pencil, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ContactsPage() {
  const { t } = useTranslation();

  const [dataTable, setDataTable] = useState<
    {
      id: number;
      name: string;
      email: string;
      phone: string;
      photo: string | null;
    }[]
  >([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      photo: null,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      photo: null,
    },
  ]);

  const [newContact, setNewContact] = useState<{
    name: string;
    email: string;
    phone: string;
    photo: string | null;
  }>({
    name: "",
    email: "",
    phone: "",
    photo: null,
  });

  const [editContact, setEditContact] = useState<{
    id: number | null;
    name: string;
    email: string;
    phone: string;
    photo: string | null;
  }>({
    id: null,
    name: "",
    email: "",
    phone: "",
    photo: null,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewContact({ ...newContact, photo: reader.result as string });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNewContact({ ...newContact, [name]: value });
    }
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditContact({ ...editContact, photo: reader.result as string });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setEditContact({ ...editContact, [name]: value });
    }
  };

  const addContact = () => {
    if (newContact.name && newContact.email && newContact.phone) {
      const newId =
        dataTable.length > 0 ? dataTable[dataTable.length - 1].id + 1 : 1;
      setDataTable([...dataTable, { ...newContact, id: newId }]);
      setNewContact({ name: "", email: "", phone: "", photo: null });
      setIsAddModalOpen(false);
    }
  };

  const startEditContact = (contact: (typeof dataTable)[0]) => {
    setEditContact({ ...contact });
  };

  const saveEditContact = () => {
    if (
      editContact.id &&
      editContact.name &&
      editContact.email &&
      editContact.phone
    ) {
      setDataTable(
        dataTable.map((c) =>
          c.id === editContact.id ? { ...editContact, id: c.id } : c
        )
      );
      setEditContact({ id: null, name: "", email: "", phone: "", photo: null });
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

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header con búsqueda y botones */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-muted-foreground">
              {t("contacts")}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-600 w-5 h-5" />
                <Input
                  placeholder={t("searchContacts")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 border-border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <Button
                variant="outline"
                asChild
                className="border-primary-500 text-primary-700 hover:bg-primary-100"
              >
                <label className="cursor-pointer">
                  {t("importCSV")}
                  <input
                    type="file"
                    accept=".csv"
                    className="hidden"
                    onChange={handleCSVImport}
                  />
                </label>
              </Button>
              <Button
                onClick={() => setIsAddModalOpen(true)}
                className="bg-primary-600 hover:bg-primary-700 "
              >
                {t("addContact")}
              </Button>
            </div>
          </div>

          {/* Tabla de contactos */}
          <Card className="shadow-lg rounded-lg">
            <CardHeader className="bg-primary-100 border-b border-border">
              <CardTitle className="text-xl font-semibold text-muted-foreground">
                {t("contactList")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              {filteredDataTable.length === 0 ? (
                <p className="text-primary-600 text-center">
                  {t("noDataTable")}
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary-200 text-primary-900">
                        <th className="p-3 font-semibold">{t("photo")}</th>
                        <th className="p-3 font-semibold">{t("name")}</th>
                        <th className="p-3 font-semibold">{t("email")}</th>
                        <th className="p-3 font-semibold">{t("phone")}</th>
                        <th className="p-3 font-semibold">{t("actions")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDataTable.map((contact) => (
                        <tr
                          key={contact.id}
                          className="border-b border-border hover:bg-primary-50"
                        >
                          <td className="p-3">
                            {contact.photo ? (
                              <img
                                src={contact.photo}
                                alt={contact.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-semibold">
                                {contact.name.charAt(0)}
                              </div>
                            )}
                          </td>
                          <td className="p-3 text-primary-900">
                            {contact.name}
                          </td>
                          <td className="p-3 text-primary-700">
                            {contact.email}
                          </td>
                          <td className="p-3 text-primary-700">
                            {contact.phone}
                          </td>
                          <td className="p-3 flex space-x-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-primary-500 text-primary-700 hover:bg-primary-200"
                                  onClick={() => startEditContact(contact)}
                                >
                                  <Pencil className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                {t("editContact")}
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="bg-destructive hover:bg-destructive/90"
                                  onClick={() => deleteContact(contact.id)}
                                >
                                  <Trash className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                {t("deleteContact")}
                              </TooltipContent>
                            </Tooltip>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Modal para agregar contacto (sin fondo oscuro) */}
          {isAddModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
              <Card className="w-full max-w-md">
                <CardHeader className="bg-primary-600 ">
                  <CardTitle>{t("addNewContact")}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-primary-50">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-primary-900">
                        {t("name")}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={newContact.name}
                        onChange={handleInputChange}
                        placeholder={t("enterName")}
                        className="border-border focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-primary-900">
                        {t("email")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        value={newContact.email}
                        onChange={handleInputChange}
                        placeholder={t("enterEmail")}
                        className="border-border focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-primary-900">
                        {t("phone")}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={newContact.phone}
                        onChange={handleInputChange}
                        placeholder={t("enterPhone")}
                        className="border-border focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="photo" className="text-primary-900">
                        {t("photo")}
                      </Label>
                      <Input
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="border-border focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        className="border-primary-500 text-primary-700 hover:bg-primary-200"
                        onClick={() => setIsAddModalOpen(false)}
                      >
                        {t("cancel")}
                      </Button>
                      <Button
                        onClick={addContact}
                        className="bg-primary-600 hover:bg-primary-700 "
                      >
                        {t("addContact")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Modal de edición */}
          {editContact.id && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Card className="w-full max-w-md">
                <CardHeader className="bg-primary-600 ">
                  <CardTitle>{t("editContact")}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-primary-50">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="edit-name" className="text-primary-900">
                        {t("name")}
                      </Label>
                      <Input
                        id="edit-name"
                        name="name"
                        value={editContact.name}
                        onChange={handleEditInputChange}
                        className="border-border focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-email" className="text-primary-900">
                        {t("email")}
                      </Label>
                      <Input
                        id="edit-email"
                        name="email"
                        value={editContact.email}
                        onChange={handleEditInputChange}
                        className="border-border focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-phone" className="text-primary-900">
                        {t("phone")}
                      </Label>
                      <Input
                        id="edit-phone"
                        name="phone"
                        value={editContact.phone}
                        onChange={handleEditInputChange}
                        className="border-border focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-photo" className="text-primary-900">
                        {t("photo")}
                      </Label>
                      <Input
                        id="edit-photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleEditInputChange}
                        className="border-border focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        className="border-primary-500 text-primary-700 hover:bg-primary-200"
                        onClick={() =>
                          setEditContact({
                            id: null,
                            name: "",
                            email: "",
                            phone: "",
                            photo: null,
                          })
                        }
                      >
                        {t("cancel")}
                      </Button>
                      <Button
                        onClick={saveEditContact}
                        className="bg-primary-600 hover:bg-primary-700 "
                      >
                        {t("save")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}

export default ContactsPage;
