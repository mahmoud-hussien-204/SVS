import {RouterProvider} from "react-router-dom";

import AuthProvider from "@/modules/auth/providers/AuthProvider";

import {router} from "./router/Router";

import LoadingScreen from "@/components/LoadingScreen";

import {AnimatePresence} from "framer-motion";

import ScreenTitleProvider from "./providers/ScreenTitleProvider";

function App() {
  return (
    <AuthProvider>
      <ScreenTitleProvider>
        <main className='font-poppins'>
          <AnimatePresence>
            <RouterProvider router={router} fallbackElement={<LoadingScreen />} />
          </AnimatePresence>
        </main>
      </ScreenTitleProvider>
    </AuthProvider>
  );
}

export default App;
