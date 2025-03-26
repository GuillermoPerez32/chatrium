import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Mail, Phone, Pencil, X } from "lucide-react";
import DropDown from "@/components/DropDown";
import { useTranslation } from "react-i18next";
import UpdatePasswordForm from "@/features/profile/components/UpdatePasswordForm";

export default function SettingsPage() {
  const { t } = useTranslation(); // Hook para traducciones

  const user = {
    name: "John Doe",
    role: "Software Engineer",
    email: "john.doe@example.com",
    phone: "+1234567890",
    avatarUrl: "https://github.com/nutlope.png",
  };

  const [isSignatureEnabled, setIsSignatureEnabled] = useState(false);
  const [signatureText, setSignatureText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4">
      <div className="w-full max-w-2xl">
        {/* Perfil */}
        <Card className="mb-6 bg-white">
          <CardHeader className="p-4 flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={user.avatarUrl}
                  alt={t("profilePictureAlt")}
                />
                <AvatarFallback className="bg-gray-200 text-gray-600">
                  CN
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  {isEditing ? (
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-sm h-8 border-gray-300 focus:ring-black focus:border-black"
                      placeholder={t("namePlaceholder")}
                    />
                  ) : (
                    <CardTitle className="text-base font-semibold text-black">
                      {name}
                    </CardTitle>
                  )}
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 border-gray-300 text-black hover:bg-gray-100"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Pencil className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <CardDescription className="text-xs text-gray-600 mt-1">
                  {user.role} {/* Podrías traducir roles si es dinámico */}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-2 flex items-center justify-center flex-col">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-600" />
              {isEditing ? (
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm h-8 border-gray-300 focus:ring-black focus:border-black"
                  placeholder={t("email")}
                />
              ) : (
                <p className="text-xs text-black truncate">{email}</p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-600" />
              {isEditing ? (
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-sm h-8 border-gray-300 focus:ring-black focus:border-black"
                  placeholder={t("phone")}
                />
              ) : (
                <p className="text-xs text-black">{phone}</p>
              )}
            </div>
            {isEditing && (
              <Button
                variant="default"
                className="w-full h-8 text-sm mt-2 bg-black text-white hover:bg-gray-800"
                onClick={handleSave}
              >
                {t("save")}
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Configuraciones combinadas */}
        <Card className="bg-white">
          <CardHeader className="p-4">
            <CardTitle className="text-base font-semibold text-black">
              {t("accountSettings")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-2">
            {/* Notificaciones */}
            <DropDown
              title={t("notifications")}
              subtitle={t("notificationsSubtitle")}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium text-black">
                      {t("emailNotifications")}
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-600">
                      {t("emailNotificationsDesc")}
                    </CardDescription>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium text-black">
                      {t("smsNotifications")}
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-600">
                      {t("smsNotificationsDesc")}
                    </CardDescription>
                  </div>
                  <Switch />
                </div>
              </div>
            </DropDown>

            {/* Contraseña */}
            <UpdatePasswordForm />

            {/* Firma */}
            <DropDown title={t("signature")} subtitle={t("signatureSubtitle")}>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium text-black">
                      {t("enableSignature")}
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-600">
                      {t("enableSignatureDesc")}
                    </CardDescription>
                  </div>
                  <Switch
                    checked={isSignatureEnabled}
                    onCheckedChange={setIsSignatureEnabled}
                  />
                </div>
                {isSignatureEnabled && (
                  <Input
                    value={signatureText}
                    onChange={(e) => setSignatureText(e.target.value)}
                    placeholder={t("signaturePlaceholder")}
                    className="w-full h-8 text-sm border-gray-300 focus:ring-black focus:border-black"
                  />
                )}
              </div>
            </DropDown>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
