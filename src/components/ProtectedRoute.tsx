
    import React from 'react';
    import { useAuth } from '@clerk/clerk-react';
    import { Navigate, Outlet } from 'react-router-dom';
    import { Loader2 } from 'lucide-react'; // Using a lucide icon for loading

    export const ProtectedRoute: React.FC = () => {
      const { userId, isLoaded } = useAuth();

      if (!isLoaded) {
        return (
          <div className="flex justify-center items-center h-screen">
            <Loader2 className="h-8 w-8 animate-spin text-[#253A82]" />
          </div>
        );
      }

      if (!userId) {
        return <Navigate to="/login" replace />;
      }

      return <Outlet />;
    };
    