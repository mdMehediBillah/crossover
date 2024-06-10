import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Contact1 from "./Pages/Contact1";

function App() {
  return (
    <>
   <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/post' element={<Contact1 />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    
    </>
  );
}
import LoginForm from "./Components/Login";

export default App;
