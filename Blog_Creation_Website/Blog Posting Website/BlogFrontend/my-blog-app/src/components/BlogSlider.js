import React from 'react';
import BlogPost from './BlogPost';
import HomeIcon from '@mui/icons-material/Edit';
import '../App.css';
import { Link } from 'react-router-dom';



const BlogSlider = () => {
  
 

  return (
    <div className='body1'>
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
      <div className="blog-slider__img">

</div>
        <BlogPost/>
        <Link to="/blogform"> <HomeIcon /></Link>

      </div>
      
    </div>
    </div>
  );
};

export default BlogSlider;
