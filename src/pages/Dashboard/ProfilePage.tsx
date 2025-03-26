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


export default function SettingsPage() {
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
    <div className="flex justify-center items-center min-h-screen w-full bg-green-100 p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-xl font-bold mb-6 text-black">Settings</h1>

        {/* Perfil */}
        <Card className="mb-6 bg-white">
          <CardHeader className="p-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={user.avatarUrl} alt="Profile picture" />
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
                    {isEditing ? <X className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
                  </Button>
                </div>
                <CardDescription className="text-xs text-gray-600 mt-1">
                  {user.role}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-600" />
              {isEditing ? (
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm h-8 border-gray-300 focus:ring-black focus:border-black"
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
                Save
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Configuraciones combinadas */}
        <Card className="bg-white">
          <CardHeader className="p-4">
            <CardTitle className="text-base font-semibold text-black">
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-2">
            {/* Notificaciones */}
            <DropDown
              title="Notifications"
              subtitle="Manage your notifications settings"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium text-black">
                      Email Notifications
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-600">
                      Receive email updates
                    </CardDescription>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium text-black">
                      SMS Notifications
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-600">
                      Receive SMS updates
                    </CardDescription>
                  </div>
                  <Switch />
                </div>
              </div>
            </DropDown>

            {/* Contraseña */}
            <DropDown title="Password" subtitle="Update your password">
              <div className="space-y-2">
                <div>
                  <CardTitle className="text-sm font-medium text-black">
                    Current Password
                  </CardTitle>
                  <Input
                    type="password"
                    className="w-full h-8 text-sm border-gray-300 focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <CardTitle className="text-sm font-medium text-black">
                    New Password
                  </CardTitle>
                  <Input
                    type="password"
                    className="w-full h-8 text-sm border-gray-300 focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <CardTitle className="text-sm font-medium text-black">
                    Confirm New Password
                  </CardTitle>
                  <Input
                    type="password"
                    className="w-full h-8 text-sm border-gray-300 focus:ring-black focus:border-black"
                  />
                </div>
                <Button
                  variant="default"
                  className="w-full h-8 text-sm mt-2 bg-black text-white hover:bg-gray-800"
                >
                  Update Password
                </Button>
              </div>
            </DropDown>

            {/* Firma */}
            <DropDown title="Signature" subtitle="Add a signature to your messages">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium text-black">
                      Enable Signature
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-600">
                      Add a signature
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
                    placeholder="Enter your signature"
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