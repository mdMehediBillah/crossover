import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Contact1 from "./Components/Contact1";
import Header from "./Components/Header";
import CommentList from "./Components/CommentList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/contact" element={<Contact1 />} />
        <Route path="/comment-list" element={<CommentList />} />
        {/* <Route path='*' element={<NotFound />} /> */}
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
