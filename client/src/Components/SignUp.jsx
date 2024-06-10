import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      if (data.success === true) {
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto max-w-md rounded-xl shadow-xl whadow-gray-500 mt-8">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="mb-2 block">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
            {/* validation */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 mt-2"
          >
            Register
          </button>
        </form>
        <p className="mt-2">
          Already havean account?{" "}
          <Link to="/" className="text-blue underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
