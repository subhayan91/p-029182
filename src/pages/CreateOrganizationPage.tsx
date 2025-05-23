
    import React from 'react';
    import { CreateOrganization } from '@clerk/clerk-react';
    import { useNavigate } from 'react-router-dom';

    const CreateOrganizationPage: React.FC = () => {
      const navigate = useNavigate();
      return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 py-12 px-4">
          <CreateOrganization 
            path="/create-organization" 
            routing="path" 
            afterCreateOrganizationUrl={() => navigate('/')} // Navigate to home after creation
          />
        </div>
      );
    };

    export default CreateOrganizationPage;
    