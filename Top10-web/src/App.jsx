import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Dashboardpage from "./Components/Admin/Pages/Dashboardpage";
import Companydatapage from "./Components/Admin/Pages/Companydatapage";
import Companyfrompage from "./Components/Admin/Pages/Companyfrompage";
import Loginpage from "./Components/Admin/Pages/Loginpage";
import LoadingPage from './Components/Loadingpage';
import Dataeditpage from './Components/Admin/Pages/Dataeditpage';
import { useSelector } from "react-redux";

const UserRoutes = lazy(() => import("./Routes/UserRoutes"));

function App() {
  const admindata = useSelector((state) => state.admin.value);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<LoadingPage/>}><Homepage /></Suspense>} />
       
        {admindata?.email ? (
          <Route path="/admin/*" element={<Suspense fallback={<LoadingPage/>}><AdminRoutes /></Suspense>} />
        ) : (
          <Route path="/admin/*" element={<LoginRedirect />} />
        )}
      
        <Route path="/admin" element={<Loginpage />} />
        <Route path="/*"  element={<Suspense fallback={<LoadingPage/>}><UserRoutes /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}


function AdminRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboardpage />} />
      <Route path="/companylist" element={<Companydatapage />} />
      <Route path="/dataform" element={<Companyfrompage />} />
      <Route path="/dataformedit" element={<Dataeditpage />} />
    </Routes>
  );
}

function LoginRedirect() {
  return <Navigate to="/admin" />;
}

export default App;
