
import React from 'react';
import { CreateOrganization } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const CreateOrganizationPage: React.FC = () => {
  const navigate = useNavigate(); // Keep useNavigate for potential future use if needed directly in component logic

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-12 px-4">
      <CreateOrganization 
        path="/create-organization" 
        // routing="path" // routing prop is not recommended by Clerk for Vite projects, path implies it
        afterCreateOrganizationUrl={() => {
          // It's generally better to let Clerk handle the redirect via the return value.
          // If programmatic navigation is strictly needed after some other logic,
          // Clerk also provides an `afterCreateOrganization` callback.
          // For now, simply returning the target URL is the most Clerk-idiomatic way.
          navigate('/'); // This call is okay if you want to ensure navigation happens,
                         // but the prop itself needs to return the string.
          return '/'; 
        }}
        appearance={{
          variables: {
            colorPrimary: '#253A82',
          }
        }}
      />
    </div>
  );
};

export default CreateOrganizationPage;
