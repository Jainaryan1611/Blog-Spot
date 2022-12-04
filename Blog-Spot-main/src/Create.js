import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history=useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog={title,body,author};

        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(blog)
    
        }).then(()=>{
            console.log("New Blog added");
            setIsPending(false);
            history.push("/");
        })
    }


    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required 
                value={title} 
                onChange={(event)=> setTitle(event.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required 
                value={body}
                onChange={(event)=>setBody(event.target.value)}
                ></textarea>
                <label>Author</label>
                <input 
                type="text"
                required 
                value={author} 
                onChange={(event)=> setAuthor(event.target.value)}
                />
                { !isPending && <button className="btn">Add Blog</button>}
                { isPending && <button disabled className="btn">Adding...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;