import Contact from "./Components/Contact";
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

// =======
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import User from "./Pages/User";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/user" element={<User />} />
//       </Routes>
//       <></>
//     </div>
// >>>>>>> main
//   );
// }
// import LoginForm from "./Components/Login";

export default App;
