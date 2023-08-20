import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import AppartmentList from "./pages/AppartmentList/AppartmentList";
import Appartment from "./pages/Appartment/Appartment";
import Contacts from "./components/Contacts/Contacts";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="appatment-list" element={<AppartmentList />} />
          <Route path="appatment" element={<Appartment />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
