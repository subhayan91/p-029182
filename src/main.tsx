
    import React from 'react';
    import { createRoot } from 'react-dom/client';
    import App from './App.tsx';
    import './index.css';
    import { ClerkProvider } from '@clerk/clerk-react';

    // IMPORTANT: Replace this with your actual publishable key
    const PUBLISHABLE_KEY = "pk_test_cm9idXN0LXRyb2xsLTI2LmNsZXJrLmFjY291bnRzLmRldiQ";

    if (!PUBLISHABLE_KEY) {
      throw new Error("Missing Publishable Key");
    }

    createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </React.StrictMode>
    );
    