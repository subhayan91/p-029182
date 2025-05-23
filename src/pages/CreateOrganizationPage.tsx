
import React from 'react';
import { CreateOrganization } from '@clerk/clerk-react';
// import { useNavigate } from 'react-router-dom'; // No longer needed here if Clerk handles redirect

const CreateOrganizationPage: React.FC = () => {
  // const navigate = useNavigate(); // No longer needed here

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-12 px-4">
      <CreateOrganization 
        path="/create-organization" 
        afterCreateOrganizationUrl="/" // Corrected: Must be a string
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
