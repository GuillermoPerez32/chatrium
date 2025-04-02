import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pencil } from "lucide-react"

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('John Doe')
  const [role, setRole] = useState('Software Engineer')
  const [email, setEmail] = useState('john.doe@example.com')
  const [phone, setPhone] = useState('123-456-7890')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [signatureEnabled, setSignatureEnabled] = useState(true)
  const [signatureText, setSignatureText] = useState('Best Regards,\nJohn Doe')

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const saveChanges = () => {
    console.log('Updated Profile Information:', { name, role, email, phone })
    setIsEditing(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>Manage your profile information.</CardDescription>
            <div className="flex items-center space-x-4 mt-4">
              <Avatar>
                <AvatarImage src="https://github.com/nutlope.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{role}</CardDescription>
              </div>
              <Button variant="outline" onClick={toggleEdit}>
                <Pencil className="mr-2" />
                Edit
              </Button>
            </div>
            {isEditing && (
              <div className="mt-4 space-y-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" value={role} onChange={(e) => setRole(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <Button onClick={saveChanges}>Save</Button>
              </div>
            )}
          </div>
          <div>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account settings.</CardDescription>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Switch id="email-notifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
                <Switch id="sms-notifications" checked={smsNotifications} onCheckedChange={setSmsNotifications} />
              </div>
            </div>
          </div>
          <div>
            <CardTitle>Signature</CardTitle>
            <CardDescription>Manage your signature.</CardDescription>
            <div className="mt-4 space-y-2">
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}