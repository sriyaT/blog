import React from 'react';

import './style.css';
import BlogPost from '../../Components/BlogPost';
import Sidebar from '../../Components/SideBar';
/**
* @author
* @function Post
**/

const Post = (props) => {
    console.log(props);
  return(
    <section className="container">
        <BlogPost {...props}/>
        <Sidebar />
    </section>
   )

 }

export default Post;
