import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useContacts } from "@/features/contacts/hooks/useContacts";
import ContactTable from "@/features/contacts/components/contactTable";
import ContactForm from "@/features/contacts/components/contactForm";

const ContactsPage = () => {
  const { t } = useTranslation();
  const {
    newContact,
    editContact,
    searchTerm,
    isAddModalOpen,
    filteredDataTable,
    setEditContact,
    setSearchTerm,
    setIsAddModalOpen,
    handleInputChange,
    handleEditInputChange,
    addContact,
    saveEditContact,
    deleteContact,
    handleCSVImport,
  } = useContacts();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-foreground">
            {t("contacts")}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder={t("searchContacts")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 border-muted rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <Button
              variant="outline"
              asChild
              className="border-primary text-foreground hover:bg-primary/10"
            >
              <label className="cursor-pointer">
                {t("import")}
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
              className="bg-primary hover:bg-primary/90 text-foreground"
            >
              {t("addContact")}
            </Button>
          </div>
        </div>

        <ContactTable
          data={filteredDataTable}
          onEdit={setEditContact}
          onDelete={deleteContact}
        />

        {isAddModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center">
            <ContactForm
              contact={newContact}
              onChange={handleInputChange}
              onSubmit={addContact}
              onCancel={() => setIsAddModalOpen(false)}
            />
          </div>
        )}

        {editContact?.id && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <ContactForm
              contact={editContact}
              onChange={handleEditInputChange}
              onSubmit={saveEditContact}
              onCancel={() => setEditContact(null)}
              isEdit
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
