
    import React from "react";
    import { SignUp } from "@clerk/clerk-react";
    import { useNavigate } from "react-router-dom";

    const SignupPage: React.FC = () => {
      const navigate = useNavigate();
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
              routing="path" 
              signInUrl="/login" 
              forceRedirectUrl="/" // Fallback if afterSignUpUrl is not hit or if user directly navigates.
              afterSignUpUrl={() => navigate('/create-organization')} // Redirect to create org after sign up.
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
    