
import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const navigate = useNavigate(); // Keep useNavigate for potential future use

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
          // routing="path" // routing prop is not recommended by Clerk for Vite projects
          signInUrl="/login" 
          forceRedirectUrl="/" // Fallback if afterSignUpUrl is not hit or if user directly navigates.
          afterSignUpUrl={() => {
            // Similar to CreateOrganizationPage, ensure this returns the target URL string.
            // navigate('/create-organization'); // This call is okay if you want to ensure navigation happens.
            return '/create-organization'; // This makes the prop correct.
          }}
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
