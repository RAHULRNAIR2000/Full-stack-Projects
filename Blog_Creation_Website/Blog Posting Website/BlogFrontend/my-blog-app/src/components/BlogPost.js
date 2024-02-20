// src/components/BlogPost.js
import React, {useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import axios from 'axios';

import '../App.css';
import { Await, Link } from 'react-router-dom';
import BlogForm from './BlogForm';
import { Button } from '@mui/material';





const BlogPost = () => {


  const handleLikeButton = async (id) =>{
    try{
      await axios.post(`http://localhost:8080/api/blogposts/likes/${id}`);
      getFunction();
    }
    catch(error){
      console.error('Error adding like',error);
    }
   }


  const [blogpost, setBlogpost] = useState([]);

  useEffect(()=>
    getFunction()
    ,[]);

  const getFunction =() => {axios.get("http://localhost:8080/api/blogposts/get")
  .then(response => setBlogpost(response.data))
  .catch(error => console.error("error", error))

}


  return (
    // <div>
    //   {blogpost.map((blog, index) => (
    //   <div key={index}>
    //     <h2>{blog.name}</h2>
    //     <h2>{blog.content}</h2>
    //   </div>
    // ))}
    //   </div>
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      effect={'fade'}
      spaceBetween={30}
      mousewheel={true}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true
       
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      {blogpost.map((blog, index) => (
      <SwiperSlide>
        
        <div className="blog-slider__item swiper-slide">

          
          <div className="blog-slider__content" key={index}>
            <span className="blog-slider__code">{blog.id}
            </span>
            <div className="blog-slider__title">{blog.name}</div>
            <div className="blog-slider__text">{blog.content}</div>
            {/* <button className="blog-slider__button" onClick={handleLikeButton}></button> */}
            <div className='button-wrapper'>
            <Button variant="text" className = "lovebutton" onClick={()=> handleLikeButton(blog.id)} sx={{ fontSize: '2.5rem', padding: '0.5rem 1rem' }}>❤️</Button>
            <div className="blog-slider__text">{blog.likes} likes</div>
            </div>
          </div>
          
        </div> 
      </SwiperSlide>
      ))}
    
    </Swiper>
  );
};

export default BlogPost;
