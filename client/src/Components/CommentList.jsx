import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CommentList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/comments");
        setData(data.comments);

    
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchCommentData();
  }, []);

  return (
    <div>
      {data &&
        data.map((comment) => {
          return (
            <section key={comment._id}>
              <h1>{comment.fullName} </h1>
              <p> {comment.message} </p>
            </section>
          );
        })}
    </div>
  );
};

export default CommentList;
