
import { useState,useEffect } from "react";
import BlogList from "./Bloglist";
import useFitch from "./useFitch";

const Home = () => {
 const {data:blogs,isPending,error} = useFitch (  'http://localhost:8000/blogs')
 const [name,setName]= useState ('man');
 
    return ( 
        <div className="home">
         {error && <div>{error}</div>}
         {isPending && <div>loading ...</div>}
         {blogs &&<BlogList blogs={blogs} title={"ALL BLOGS"}/>}
         
         <button onClick={(()=>setName('mario'))}>change me</button>
         <p>{name}</p>
        </div>
     );
}
 
export default Home;