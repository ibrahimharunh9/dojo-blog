import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title,setTitle] = useState ('');
    const [body,setBody] = useState ('');
    const [author,setAuthor] = useState ('');
    const [isPending,setIsPending] = useState (false);
    const history = useHistory ();
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author}
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog add')
            setIsPending(false)
            // history.go(1)
            history.push('/')
        })
    }
    
    return ( 
        <div className="create">
            <h2>CREATE A BLOG</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog-Details</label>
                <input 
                type="text"
                required
                value={title}
                onChange={((e)=>setTitle(e.target.value))}
                />
                 <label >Blog-Body</label>
                <textarea
                required
                value={body}
                onChange={((e)=>setBody(e.target.value))}
                ></textarea>
                 <label >Blog-Details</label>
                <select
                value={author}
                onChange={((e)=>setAuthor(e.target.value))}
                >
                    <option value="mario">mario</option>
                    <option value="man">man</option>
                </select>
                {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding-blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;
