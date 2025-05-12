
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, HelpCircle, ArrowLeft } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const CreateTopic: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [conversationStart, setConversationStart] = useState("");
  const [client, setClient] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [suggestedAction, setSuggestedAction] = useState("");
  const [context, setContext] = useState("");
  const [assignee, setAssignee] = useState("self");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !conversationStart) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // For demo purposes, just show a toast and navigate back
    toast({
      title: "Topic created!",
      description: "AI will track this topic for updates, related messages, and help you follow through.",
    });
    navigate("/");
  };

  const handleSuggestAction = () => {
    setSuggestedAction("Prepare documentation and schedule follow-up meeting");
    toast({
      title: "AI suggestion generated",
      description: "Based on the topic information provided.",
    });
  };

  const handleSummarize = () => {
    if (!context) {
      toast({
        description: "Please add some context first to summarize.",
      });
      return;
    }
    
    setContext("Summary: Client needs a new quote for their upcoming project. Follow up within 3 days.");
    toast({
      title: "Context summarized",
      description: "AI has summarized your notes.",
    });
  };

  return (
    <div className="min-h-screen bg-[rgba(236,240,255,1)] p-6">
      <div className="max-w-3xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-4 flex items-center text-[#253A82]"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-semibold text-[#253A82] mb-2">Create a New Topic</h1>
          <p className="text-[#667085] mb-6">
            AI will track this topic for updates, related messages, and help you follow through.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Topic Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-[#344054] font-medium">
                Topic Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. New quote request from Acme"
                className="border-[#D0D5DD]"
                required
              />
            </div>

            {/* Conversation Start */}
            <div className="space-y-2">
              <Label className="text-[#344054] font-medium">
                Where did this conversation start? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup value={conversationStart} onValueChange={setConversationStart} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="outside" id="outside" />
                  <Label htmlFor="outside" className="font-normal">Outside DEEMERGE (call, meeting, etc.)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="missed" id="missed" />
                  <Label htmlFor="missed" className="font-normal">DEEMERGE missed this</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-involved" id="not-involved" />
                  <Label htmlFor="not-involved" className="font-normal">I wasn't involved</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Client */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Label htmlFor="client" className="text-[#344054] font-medium">Client</Label>
                <div className="text-[#667085] flex items-center">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  <span className="text-xs">Used to retrieve relevant past communication.</span>
                </div>
              </div>
              <Select value={client} onValueChange={setClient}>
                <SelectTrigger className="border-[#D0D5DD]">
                  <SelectValue placeholder="e.g. Acme Corp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="acme">Acme Corp</SelectItem>
                  <SelectItem value="globex">Globex Corporation</SelectItem>
                  <SelectItem value="initech">Initech</SelectItem>
                  <SelectItem value="umbrella">Umbrella Corporation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Label htmlFor="category" className="text-[#344054] font-medium">Category</Label>
                <div className="text-[#667085] flex items-center">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  <span className="text-xs">Auto-suggested based on title. Editable.</span>
                </div>
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="border-[#D0D5DD]">
                  <SelectValue placeholder="e.g. Marketing, Customers, Finance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="customers">Customers</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tag */}
            <div className="space-y-2">
              <Label htmlFor="tag" className="text-[#344054] font-medium">Tag</Label>
              <Select value={tag} onValueChange={setTag}>
                <SelectTrigger className="border-[#D0D5DD]">
                  <SelectValue placeholder="e.g. Quote Request, Creative Review" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quote">Quote Request</SelectItem>
                  <SelectItem value="creative">Creative Review</SelectItem>
                  <SelectItem value="support">Support Issue</SelectItem>
                  <SelectItem value="payment">Payment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Due Date */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Label htmlFor="duedate" className="text-[#344054] font-medium">Due Date (optional)</Label>
                <div className="text-[#667085] flex items-center">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  <span className="text-xs">Will trigger "Due Soon" or "Overdue" indicators automatically.</span>
                </div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal border-[#D0D5DD]",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Suggested Action */}
            <div className="space-y-2">
              <Label htmlFor="action" className="text-[#344054] font-medium">Suggested Action</Label>
              <div className="flex space-x-2">
                <Input
                  id="action"
                  value={suggestedAction}
                  onChange={(e) => setSuggestedAction(e.target.value)}
                  placeholder="e.g. Prepare quote and send to Acme"
                  className="border-[#D0D5DD] flex-grow"
                />
                <Button 
                  type="button" 
                  onClick={handleSuggestAction} 
                  variant="outline"
                  className="whitespace-nowrap text-[#253A82] border-[#253A82]"
                >
                  Let AI suggest
                </Button>
              </div>
            </div>

            {/* Context/Notes */}
            <div className="space-y-2">
              <Label htmlFor="context" className="text-[#344054] font-medium">Context / Notes</Label>
              <Textarea
                id="context"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="Paste notes from the call, or describe what was discussed…"
                className="border-[#D0D5DD] min-h-[120px]"
              />
              <Button 
                type="button" 
                onClick={handleSummarize} 
                variant="outline"
                className="mt-2 text-[#253A82] border-[#253A82]"
              >
                Summarize with AI
              </Button>
            </div>

            {/* Assignment */}
            <div className="space-y-2">
              <Label htmlFor="assignment" className="text-[#344054] font-medium">Assignment</Label>
              <Select value={assignee} onValueChange={setAssignee}>
                <SelectTrigger className="border-[#D0D5DD]">
                  <SelectValue placeholder="Assign to..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="self">Assign to myself</SelectItem>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                  <SelectItem value="team">Entire Team</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button 
                type="submit" 
                className="bg-[#253A82] hover:bg-[#253A82]/90 text-white px-8"
              >
                Create
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="border-[#D0D5DD] text-[#344054]"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTopic;
