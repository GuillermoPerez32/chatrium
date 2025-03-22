import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Importamos el Input para el campo de firma
import { Switch } from "@/components/ui/switch"; // Importamos el Switch
import { Bell, Key, Signature, Mail, Phone } from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "John Doe",
    role: "Software Engineer",
    email: "john.doe@example.com",
    phone: "+1234567890",
    avatarUrl: "https://github.com/nutlope.png",
  };

  // Estado para manejar el Switch de Signature
  const [isSignatureEnabled, setIsSignatureEnabled] = useState(false);
  const [signatureText, setSignatureText] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-8">
        {/* Tarjeta de perfil */}
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex justify-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatarUrl} alt="Profile picture" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-center mt-4">{user.name}</CardTitle>
            <CardDescription className="text-center">{user.role}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </CardContent>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <p className="text-sm text-muted-foreground">{user.phone}</p>
            </div>
          </CardContent>
        </Card>

        {/* Tarjeta de configuraciones */}
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6" />
              <div>
                <CardTitle className="text-sm">Notifications</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Manage your notifications settings
                </CardDescription>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Key className="w-6 h-6" />
              <div>
                <CardTitle className="text-sm">Password</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Update your password
                </CardDescription>
              </div>
              <Button variant="outline" className="ml-auto">
                Update
              </Button>
            </div>

            {/* Sección de Signature */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Signature className="w-6 h-6" />
                  <div>
                    <CardTitle className="text-sm">Signature</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Add a signature to your messages
                    </CardDescription>
                  </div>
                </div>
                <Switch
                  checked={isSignatureEnabled}
                  onCheckedChange={setIsSignatureEnabled}
                />
              </div>

              {/* Campo de texto para la firma */}
              {isSignatureEnabled && (
                <div className="mt-2">
                  <Input
                    value={signatureText}
                    onChange={(e) => setSignatureText(e.target.value)}
                    placeholder="Enter your signature"
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
