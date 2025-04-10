import { useEffect, useRef, useState } from "react";
import {
  Search,
  Filter,
  RefreshCw,
  MessageSquare,
  MoreVertical,
  Phone,
  Send,
  Paperclip,
  Smile,
  ChevronDown,
  CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { conversations, selectedConversation } from "../mocks";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react"; // Importamos Theme

const InboxLayout = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      block: "nearest",
    });
  }, []);

  // Manejar el envío del mensaje
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("");
      setShowEmojiPicker(false);
    }
  };

  // Manejar la selección de un emoji con tipo explícito
  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setNewMessage((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  // Alternar la visibilidad del picker
  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  // Cerrar el picker al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showEmojiPicker &&
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmojiPicker]);

  return (
    <div className="flex h-full bg-background">
      {/* Middle panel - Conversation list */}
      <div className="w-96 border-r flex flex-col overflow-auto">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold mb-3">Unassigned (308)</h2>

          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search contacts"
              className="pl-10 bg-background"
            />
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="open" className="flex-1 flex flex-col">
          <TabsList className="self-center mx-4 mt-2">
            <TabsTrigger value="open">
              <MessageSquare className="h-4 w-4 mr-2" />
              OPEN
            </TabsTrigger>
            <TabsTrigger value="closed">
              <CheckCheck className="h-4 w-4 mr-2" />
              CLOSED
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="open"
            className="flex-1 overflow-y-auto mt-2 px-0"
          >
            <div className="divide-y">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 hover:bg-muted cursor-pointer ${
                    conversation.selected
                      ? "bg-muted/60 border-l-4 border-primary-500"
                      : ""
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 h-10 w-10 rounded-full ${conversation.avatarColor}  flex items-center justify-center mr-3`}
                    >
                      {conversation.avatarLetter}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium truncate">
                          {conversation.name}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {conversation.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      <div className="mt-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground mr-1"></span>
                          {conversation.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="closed" className="flex-1 overflow-y-auto mt-2">
            <div className="p-8 text-center text-muted-foreground">
              No closed conversations
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right panel - Conversation */}
      <div className="flex-1 flex flex-col">
        {/* Conversation header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center mr-3">
              E
            </div>
            <div>
              <h2 className="text-lg font-medium flex items-center">
                {selectedConversation.name}
                <span className="text-sm text-muted-foreground ml-2">
                  - {selectedConversation.tag}
                </span>
                <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground" />
              </h2>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                <span>Online</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Download</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </Button>
            <Button variant="secondary" size="sm">
              Assign
            </Button>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Conversation body */}
        <div className="flex-1 overflow-y-auto p-4 bg-muted">
          <div className="max-w-3xl mx-auto space-y-4">
            {selectedConversation.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-md ${
                    message.sender === "me"
                      ? "bg-primary-500 "
                      : "bg-background"
                  } rounded-lg shadow-sm p-3`}
                >
                  <p>{message.text}</p>
                  <div
                    className={`text-xs mt-1 flex justify-between items-center ${
                      message.sender === "me"
                        ? "text-primary-100"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span>{message.type}</span>
                    <span>{message.time}</span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message input */}
        <div className="border-t p-4 h-1/4">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-2 mb-2">
              <Button
                variant="outline"
                size="sm"
                className="text-muted-foreground"
              >
                <span>Text</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                <span>Email</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                <span>Internal note</span>
              </Button>
            </div>

            <div className="flex items-end border rounded-md bg-background relative">
              <div className="flex-1 p-3">
                <Input
                  placeholder="Type your message..."
                  className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-background"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newMessage.trim()) {
                      handleSendMessage();
                    }
                  }}
                />
              </div>
              <div className="flex items-center space-x-2 p-3">
                <Tooltip>
                  <TooltipTrigger>
                    <Paperclip className="text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>Attach file</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={toggleEmojiPicker}
                    >
                      <Smile className="text-muted-foreground" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Emoji</TooltipContent>
                </Tooltip>
                {showEmojiPicker && (
                  <div
                    ref={emojiPickerRef}
                    className="absolute bottom-16 right-0 z-10"
                  >
                    <EmojiPicker
                      theme={"dark" as Theme} // Usamos "dark" como valor de Theme
                      onEmojiClick={handleEmojiClick}
                    />
                  </div>
                )}
                <Button size="sm" onClick={handleSendMessage}>
                  <Send className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxLayout;
