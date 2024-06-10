import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact1() {
  const [postData, setPostData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/comments/new-comment",
        postData
      );
      if (data.success === true) {
        setPostData({
          fullName: "",
          email: "",
          message: "",
        });
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-8 rounded-xl shadow-xl shadow-gray-500">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Post Comments</h2>
        <form onSubmit={handlePost}>
          <div className="mb-4">
            <label className="block mb-2">Full name:</label>
            <input
              type="text"
              name="fullName"
              value={postData.fullName}
              onChange={handleChange}
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={postData.email}
              onChange={handleChange}
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message:</label>
            <input
              type="text"
              name="message"
              value={postData.message}
              onChange={handleChange}
              className="border rounded w-full p-2"
            />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact1;
