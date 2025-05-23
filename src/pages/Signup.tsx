
import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgba(236,240,255,1)] p-4">
      <div className="w-full max-w-md">
         <div className="flex justify-center mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4657d6ada278753b496a1cdaaaa7ac3d522b81fc?placeholderIfAbsent=true"
            className="h-12 object-contain"
            alt="Logo"
          />
        </div>
        <SignUp 
          path="/signup" 
          signInUrl="/login" 
          afterSignUpUrl="/create-organization" // Corrected: Use afterSignUpUrl for redirect after sign up
          appearance={{
            variables: {
              colorPrimary: '#253A82',
            }
          }}
        />
      </div>
    </div>
  );
};

export default SignupPage;
