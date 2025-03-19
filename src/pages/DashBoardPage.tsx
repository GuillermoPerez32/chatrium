import {
  ArrowLeft,
  BarChart3,
  Users,
  MessageSquare,
  HardDrive,
  Bell,
  Lock,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router";

// Mock data for all chats (for desktop sidebar)
const allChats = [
  {
    id: "1",
    name: "María García",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "¿Cómo estás? ¿Nos vemos mañana?",
    time: "10:30",
    unread: 2,
  },
  {
    id: "2",
    name: "Juan Rodríguez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Gracias por la información",
    time: "9:15",
    unread: 0,
  },
  {
    id: "3",
    name: "Ana Martínez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Te envié los documentos por email",
    time: "Ayer",
    unread: 0,
  },
  {
    id: "4",
    name: "Carlos López",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "¿Viste el partido anoche?",
    time: "Ayer",
    unread: 5,
  },
  {
    id: "5",
    name: "Familia",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Mamá: Recuerden la cena del domingo",
    time: "Miércoles",
    unread: 0,
  },
];

// Mock data for dashboard stats
const stats = {
  totalChats: 24,
  totalMessages: 1248,
  activeContacts: 18,
  storage: {
    used: 1.2, // GB
    total: 5, // GB
    percentage: 24,
  },
  messageActivity: [
    { day: "Lun", count: 45 },
    { day: "Mar", count: 32 },
    { day: "Mié", count: 28 },
    { day: "Jue", count: 64 },
    { day: "Vie", count: 52 },
    { day: "Sáb", count: 12 },
    { day: "Dom", count: 8 },
  ],
  messageTypes: {
    text: 78,
    images: 12,
    videos: 5,
    audio: 3,
    documents: 2,
  },
};

// Mock data for recent chats
const recentChats = allChats.slice(0, 3);

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Desktop layout */}
      <div className="hidden md:flex h-screen">
        <div className="flex-1 flex flex-col bg-[#f8f9fa] overflow-y-auto">
          <div className="w-full max-w-5xl p-6 mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
              </div>
              <Avatar className="h-10 w-10">
                <img src="/placeholder.svg?height=40&width=40" alt="Profile" />
              </Avatar>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="analytics">Analíticas</TabsTrigger>
                <TabsTrigger value="settings">Configuración</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Chats
                      </CardTitle>
                      <MessageSquare className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {stats.totalChats}
                      </div>
                      <p className="text-xs text-gray-500">
                        +2 nuevos esta semana
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Mensajes
                      </CardTitle>
                      <BarChart3 className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {stats.totalMessages}
                      </div>
                      <p className="text-xs text-gray-500">+124 esta semana</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Contactos Activos
                      </CardTitle>
                      <Users className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {stats.activeContacts}
                      </div>
                      <p className="text-xs text-gray-500">+3 esta semana</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Almacenamiento
                      </CardTitle>
                      <HardDrive className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {stats.storage.used} GB
                      </div>
                      <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${stats.storage.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {stats.storage.used} GB de {stats.storage.total} GB
                        usados
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Actividad de Mensajes</CardTitle>
                    <CardDescription>
                      Mensajes enviados y recibidos esta semana
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-end justify-between">
                      {stats.messageActivity.map((day) => (
                        <div
                          key={day.day}
                          className="flex flex-col items-center"
                        >
                          <div
                            className="w-12 bg-emerald-500 rounded-t-md"
                            style={{ height: `${day.count * 2}px` }}
                          />
                          <span className="text-xs mt-2">{day.day}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent chats */}
                <Card>
                  <CardHeader>
                    <CardTitle>Chats Recientes</CardTitle>
                    <CardDescription>
                      Tus conversaciones más recientes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentChats.map((chat) => (
                        <div
                          key={chat.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <img
                                src={chat.avatar || "/placeholder.svg"}
                                alt={chat.name}
                              />
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{chat.name}</h3>
                              <p className="text-sm text-gray-500 truncate max-w-[200px]">
                                {chat.lastMessage}
                              </p>
                            </div>
                          </div>
                          <Link to={`/chat/${chat.id}`}>
                            <Button variant="ghost" size="sm">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tipos de Mensajes</CardTitle>
                    <CardDescription>
                      Distribución de los tipos de mensajes enviados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(stats.messageTypes).map(
                        ([type, percentage]) => (
                          <div key={type} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="capitalize">{type}</span>
                              <span>{percentage}%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-emerald-500 rounded-full"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Horas Activas</CardTitle>
                    <CardDescription>
                      Cuando estás más activo en la aplicación
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center text-gray-500">
                      Gráfico de horas activas (datos de ejemplo)
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuración Rápida</CardTitle>
                    <CardDescription>
                      Accede rápidamente a las configuraciones principales
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <div className="bg-emerald-100 p-2 rounded-md mr-3">
                          <Bell className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Notificaciones</h3>
                          <p className="text-sm text-gray-500">
                            Gestiona tus alertas y sonidos
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>

                    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <div className="bg-emerald-100 p-2 rounded-md mr-3">
                          <Lock className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Privacidad</h3>
                          <p className="text-sm text-gray-500">
                            Controla quién puede contactarte
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>

                    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <div className="bg-emerald-100 p-2 rounded-md mr-3">
                          <HardDrive className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Almacenamiento</h3>
                          <p className="text-sm text-gray-500">
                            Gestiona el uso de datos y almacenamiento
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>

                    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <div className="bg-emerald-100 p-2 rounded-md mr-3">
                          <Settings className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Configuración avanzada
                          </h3>
                          <p className="text-sm text-gray-500">
                            Más opciones de configuración
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col h-screen">
        {/* Header */}
        <header className="bg-emerald-600 text-white p-4">
          <div className="flex items-center">
            <Link to="/">
              <ArrowLeft className="h-5 w-5 mr-4" />
            </Link>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="flex-1 overflow-y-auto p-4">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="w-full">
              <TabsTrigger value="overview" className="flex-1">
                Resumen
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex-1">
                Analíticas
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1">
                Config
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Chats
                    </CardTitle>
                    <MessageSquare className="h-4 w-4 text-emerald-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalChats}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Mensajes
                    </CardTitle>
                    <BarChart3 className="h-4 w-4 text-emerald-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {stats.totalMessages}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Contactos
                    </CardTitle>
                    <Users className="h-4 w-4 text-emerald-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {stats.activeContacts}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Almacenamiento
                    </CardTitle>
                    <HardDrive className="h-4 w-4 text-emerald-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {stats.storage.used} GB
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Activity chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Actividad de Mensajes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[150px] flex items-end justify-between">
                    {stats.messageActivity.map((day) => (
                      <div key={day.day} className="flex flex-col items-center">
                        <div
                          className="w-8 bg-emerald-500 rounded-t-md"
                          style={{ height: `${day.count * 1.5}px` }}
                        />
                        <span className="text-xs mt-2">{day.day}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent chats */}
              <Card>
                <CardHeader>
                  <CardTitle>Chats Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentChats.map((chat) => (
                      <Link to={`/chat/${chat.id}`} key={chat.id}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <img
                                src={chat.avatar || "/placeholder.svg"}
                                alt={chat.name}
                              />
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{chat.name}</h3>
                              <p className="text-sm text-gray-500 truncate max-w-[150px]">
                                {chat.lastMessage}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tipos de Mensajes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(stats.messageTypes).map(
                      ([type, percentage]) => (
                        <div key={type} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="capitalize">{type}</span>
                            <span>{percentage}%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración Rápida</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="bg-emerald-100 p-2 rounded-md mr-3">
                        <Bell className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="font-medium">Notificaciones</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="bg-emerald-100 p-2 rounded-md mr-3">
                        <Lock className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="font-medium">Privacidad</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="bg-emerald-100 p-2 rounded-md mr-3">
                        <HardDrive className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="font-medium">Almacenamiento</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom navigation */}
        <div className="bg-white border-t flex justify-around py-2">
          <Link to="/" className="px-4 py-2 text-gray-500">
            Chats
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 text-emerald-600 font-medium"
          >
            Dashboard
          </Link>
          <Link to="/profile" className="px-4 py-2 text-gray-500">
            Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}
