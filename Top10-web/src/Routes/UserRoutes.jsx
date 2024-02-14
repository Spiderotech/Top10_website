import { Routes, Route } from "react-router-dom";
import {Homepage,Adswithpage,TopInsurancepage,TopITpage,About,Contact} from "../Pages/index";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="advertise-with-us" element={<Adswithpage />} />
      <Route path="insurance-company" element={<TopInsurancepage />} />
      <Route path="it-company" element={<TopITpage />} />
      <Route path="about" element={<About/>} />
      <Route path="contact-us" element={<Contact/>} />
    </Routes>
  );
}
