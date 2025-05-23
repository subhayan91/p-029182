
    import React from 'react';
    import { OrganizationProfile } from '@clerk/clerk-react';

    const OrganizationProfilePage: React.FC = () => {
      return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 py-12 px-4">
          <OrganizationProfile path="/organization-profile" routing="path" />
        </div>
      );
    };

    export default OrganizationProfilePage;
    