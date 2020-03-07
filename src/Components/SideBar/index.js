import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

import './style.css';
import Card from '../UI/Card';
import blogPost from "../../Containers/Data/blog.json";


/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts);
    },posts);


  return(
      <div className="sidebarConatiner">
           <Card style={{marginBottom:"20px", padding:"20px", boxSizing:"border-box"}}>
                <div className="cardHeader">
                    <span>About Us</span>
                    
                </div>
                <div className="profileImageConatiner">
                    <img src={require('../../assets/mine/sriyuu.jpg')} alt="about me"/>
                </div>
                <div className="cardBrief">
                    <p className="personalBio">My name is Sriya. I am a software developer specialization in Front-End Development.... :)</p>
                </div>
           </Card>
           <Card style={{marginBottom:"20px", padding:"20px", boxSizing:"border-box"}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
           </Card>
           <Card style={{marginBottom:"20px", padding:"20px", boxSizing:"border-box"}}>
           <div className="cardHeader">
                    <span>Recent Post</span>
            </div>

            <div className="recentPosts">
                {
                    posts.map(post =>{
                        return(
                            <NavLink to = {`/post/${post.id}`}>
                                <div className="recentPost">
                                    <h3 >{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>  
                            </NavLink>
                            
                        )
                    })
                }
               
            </div>

           </Card>
      </div>
   
   )

 }

export default Sidebar