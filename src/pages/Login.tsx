
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from "lucide-react";

const Login: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Login attempted",
      description: "This is a demo. Authentication is not implemented yet."
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
            <h2 className="text-2xl font-bold text-[#253A82]">Welcome back</h2>
            <p className="text-[#667085] mt-2">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-[#253A82] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                required 
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#253A82] hover:bg-[#253A82]/90"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign in
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-[#667085]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#253A82] hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
