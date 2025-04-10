import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useContacts } from "@/features/contacts/hooks/useContacts";
import ContactTable from "@/features/contacts/components/contactTable";
import ContactForm from "@/features/contacts/components/contactForm";
import { toast } from "sonner";

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
    addContact,
    saveEditContact,
    deleteContact,
    handleCSVImport,
  } = useContacts();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    console.log("Selected file:", file.name);
    if (!file.name.toLowerCase().endsWith(".csv")) {
      console.log("Invalid file type detected:", file.name);
      toast.error(t("onlyCSVAllowed"));
      e.target.value = "";
      return;
    }

    console.log("Processing CSV file:", file.name);
    handleCSVImport(e);
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-full sm:max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            {t("contacts")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder={t("searchContacts")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" asChild>
              <label className="cursor-pointer">
                {t("import")}
                <input
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </Button>
            <Button onClick={() => setIsAddModalOpen(true)}>
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-0">
            <ContactForm
              contact={newContact}
              onSubmit={addContact}
              onCancel={() => setIsAddModalOpen(false)}
            />
          </div>
        )}

        {editContact?.id && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-0">
            <ContactForm
              contact={editContact}
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
