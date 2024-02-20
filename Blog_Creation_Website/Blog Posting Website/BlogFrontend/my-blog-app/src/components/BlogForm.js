import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const BlogForm = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    content: ''
  });

  // useEffect(()=>
  //   formSubmit()
  //   ,[]);

  const formSubmit = (e) => {
    e.preventDefault();
    const blogPost = {
      id:formData.id,
      name: formData.name,
      content: formData.content
    };

    const blogPostsArray = [blogPost];

    axios
      .post("http://localhost:8080/api/blogposts/add", blogPostsArray)
      .then((response) => {
        setFormData(response.data)
        navigate('/');
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="body1">
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          <div className="main-wrapper">
            <h1 className="main-title">Write your thoughts</h1>

            <form onSubmit={formSubmit}>
              <div className="idarea"></div>
              <div className="idarea">
                <div className="element">
                  <label className="review-label">your id</label>
                  <textarea
                    id="ID"
                    rows={2}
                    type="text"
                    className="review-input"
                    value={formData.id}
                    onChange={(e) => {
                      setFormData({ ...formData, id: e.target.value });
                    }}
                  />
                </div>
                <div className="element">
                  <label class="review-label">your name</label>
                  <textarea
                    id="name"
                    rows={2}
                    type="text"
                    className="review-input"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <label className="review-label">What do you think ?</label>

              <textarea
                id="review"
                rows={7}
                type="text"
                className="review-input"
                value={formData.content}
                onChange={(e) => {
                  setFormData({ ...formData, content: e.target.value });
                }}
              />
              
              <button
                className="review-button"
                type="submit"
                // onClick={formSubmit}
              >
                Share
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
