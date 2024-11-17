// import './App.css';

// import { SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/layouts/app-sidebar";

// import BotRoutes from './lib/routes';
// import { useContext } from "react";
// import { AuthContext } from "@/contexts/AuthContext";

// function App() {
  // const authContext = useContext(AuthContext);

//   return (
//     <>  
//         {authContext?.isAuthenticated && <AppSidebar />}
//       <main className={`w-full bg-slate-200 ${authContext?.isAuthenticated ? "pl-64" : ""}`}>
//         {authContext?.isAuthenticated && (
//           <SidebarTrigger className="w-16 h-16 absolute xl:hidden lg:hidden md:hidden" />
//         )}
//         {/* Render the sidebar trigger only if the user is authenticated */}
        
//         <div className="flex items-center justify-center h-full p-10">
//           <BotRoutes />
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;

import './App.css'

import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layouts/app-sidebar"
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

import BotRoutes from './lib/routes'

function App() {
  const authContext = useContext(AuthContext);
  return (
    <>  
        {authContext?.isAuthenticated && <AppSidebar />}
        <main className='w-full bg-slate-200'>
          {authContext?.isAuthenticated && (
          <SidebarTrigger className="w-16 h-16 absolute xl:hidden lg:hidden md:hidden" />
        )}
           <div className='flex items-center justify-center h-full p-10'>
             <BotRoutes/>
           </div>
         </main>
     </>
  )
}

export default App
