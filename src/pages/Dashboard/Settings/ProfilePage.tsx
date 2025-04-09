import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [role, setRole] = useState("Software Engineer");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [signatureEnabled, setSignatureEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [signatureText, setSignatureText] = useState("Best Regards,\nJohn Doe");

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    console.log("Updated Profile Information:", { name, role, email, phone });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-3xl mb-6">
        <CardContent className="space-y-6">
          {/* Card para User Profile */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>User Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/nutlope.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{role}</CardDescription>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant="outline" onClick={toggleEdit}>
                        <Pencil className="mr-2" />
                        Edit
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit your profile information</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              {isEditing && (
                <div className="mt-4 space-y-2 flex flex-col items-center">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="name" className="text-center">
                      Name
                    </Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-64"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter your full name</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="role" className="text-center">
                      Role
                    </Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <Input
                          id="role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-64"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter your job title or role</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="email" className="text-center">
                      Email
                    </Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <Input
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-64"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter your email address</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="phone" className="text-center">
                      Phone
                    </Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <Input
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-64"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter your phone number</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button onClick={saveChanges} className="w-64">
                        Save
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Save your profile changes</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Card para SMS Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>SMS Notifications</CardTitle>
              <CardDescription>
                Manage your SMS notification preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-enabled">Enable SMS Notifications</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Switch
                        id="sms-enabled"
                        checked={smsEnabled}
                        onCheckedChange={setSmsEnabled}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Toggle SMS notifications on or off</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card para Signature sin el texto "Signature Text" */}
          <Card>
            <CardHeader>
              <CardTitle>Signature</CardTitle>
              <CardDescription>Manage your signature.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="signature-enabled">Enable Signature</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Switch
                        id="signature-enabled"
                        checked={signatureEnabled}
                        onCheckedChange={setSignatureEnabled}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Toggle signature on or off</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                {signatureEnabled && (
                  <div className="flex flex-col space-y-4 mt-2">
                    <Label htmlFor="signature-text"></Label>{" "}
                    {/* Etiqueta vacía */}
                    <Tooltip>
                      <TooltipTrigger>
                        <Input
                          id="signature-text"
                          value={signatureText}
                          onChange={(e) => setSignatureText(e.target.value)}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter your email signature</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
