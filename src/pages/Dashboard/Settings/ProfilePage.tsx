import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil } from "lucide-react";

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [role, setRole] = useState('Software Engineer');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [signatureEnabled, setSignatureEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [signatureText, setSignatureText] = useState('Best Regards,\nJohn Doe');

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    console.log('Updated Profile Information:', { name, role, email, phone });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
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
        <Button variant="outline" onClick={toggleEdit}>
          <Pencil className="mr-2" />
          Edit
        </Button>
      </div>
    </div>
    {isEditing && (
      <div className="mt-4 space-y-2 flex flex-col items-center">
        <div className="flex flex-col space-y-1">
          <Label htmlFor="name" className="text-center">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-64"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <Label htmlFor="role" className="text-center">Role</Label>
          <Input
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-64"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <Label htmlFor="email" className="text-center">Email</Label>
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <Label htmlFor="phone" className="text-center">Phone</Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-64"
          />
        </div>
        <Button
          onClick={saveChanges}
          className="w-64"
        >
          Save
        </Button>
      </div>
    )}
  </CardContent>
</Card>


          <Card>
            <CardHeader>
              <CardTitle>SMS Notifications</CardTitle>
              <CardDescription>Manage your SMS notification preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-enabled">Enable SMS Notifications</Label>
                  <Switch id="sms-enabled" checked={smsEnabled} onCheckedChange={setSmsEnabled} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card para Signature */}
          <Card>
            <CardHeader>
              <CardTitle>Signature</CardTitle>
              <CardDescription>Manage your signature.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="signature-enabled">Enable Signature</Label>
                  <Switch id="signature-enabled" checked={signatureEnabled} onCheckedChange={setSignatureEnabled} />
                </div>
                {signatureEnabled && (
                  <div className="flex flex-col space-y-1 mt-2">
                    <Label htmlFor="signature-text">Signature Text</Label>
                    <Input id="signature-text" value={signatureText} onChange={(e) => setSignatureText(e.target.value)} />
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