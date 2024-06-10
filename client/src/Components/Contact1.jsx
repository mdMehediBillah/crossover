import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Contact1() {
  const [postData, setPostData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/comments',
        postData,
        { withCredentials: true }
      );
      if (response.status === 201) {
        setPostData({
          fullname: '',
          email: '',
          message: '',
        });
        toast.success('Congratz!');
        navigate('/');
      }
    } catch (error) {
      // toast.error(error.response.data.error);
      // console.error(error);
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mx-auto max-w-md mt-8 rounded-xl shadow-xl shadow-gray-500'>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Post Comments</h2>
        <form onSubmit={handlePost}>
          <div className='mb-4'>
            <label className='block mb-2'>Full name:</label>
            <input
              type='text'
              name='fullname'
              value={postData.fullname}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Email:</label>
            <input
              type='text'
              name='email'
              value={postData.email}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Message:</label>
            <input
              type='text'
              name='message'
              value={postData.message}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <button className='bg-blue-500 text-white p-2 rounded' type='submit'>
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact1;
