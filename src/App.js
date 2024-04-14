
import {  Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/Authcontext";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Account from "./pages/account";

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/account' element={<Account />} />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
