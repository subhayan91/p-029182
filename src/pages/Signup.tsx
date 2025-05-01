
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

const Signup: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Sign up attempted",
      description: "This is a demo. Registration is not implemented yet."
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgba(236,240,255,1)] p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4657d6ada278753b496a1cdaaaa7ac3d522b81fc?placeholderIfAbsent=true"
            className="h-12 object-contain"
            alt="Logo"
          />
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#253A82]">Create an account</h2>
            <p className="text-[#667085] mt-2">Start your journey with us</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input 
                  id="firstName" 
                  placeholder="Enter first name" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input 
                  id="lastName" 
                  placeholder="Enter last name" 
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a password" 
                required 
              />
              <p className="text-xs text-[#667085]">Must be at least 8 characters</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-[#667085] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link to="/terms" className="text-[#253A82] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-[#253A82] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#253A82] hover:bg-[#253A82]/90"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Create account
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-[#667085]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#253A82] hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
