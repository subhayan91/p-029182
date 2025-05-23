
    import React from 'react';
    import { UserProfile } from '@clerk/clerk-react';

    const UserProfilePage: React.FC = () => {
      return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 py-12 px-4">
          <UserProfile path="/user" routing="path" />
        </div>
      );
    };

    export default UserProfilePage;
    