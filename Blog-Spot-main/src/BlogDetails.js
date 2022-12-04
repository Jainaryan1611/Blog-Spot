import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const [choose, setChoose] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [updating, setUpdating] = useState(false);
    const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
    
    
   


    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {

            history.push("/");
        })
    }

    const handleEdit = () => {
        setChoose(true);
        setTitle(blog.title);
        setBody(blog.body);
        setAuthor(blog.author);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        setUpdating(true);
        // setNewAuthor("Gargi");
        // setNewTitle("Gargi");
        // setNewBody("Gargi");
        const updatedblog = { title, body, author };
        console.log(updatedblog);
        fetch("http://localhost:8000/blogs/"+id, {
            method: "PUT",
            headers: {"content-type": "application/json" },
            body: JSON.stringify(updatedblog)

        }).then(() => {
            console.log("Blog Updated");
            setUpdating(false);
            history.push("/");
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && !choose && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    <hr />
                    <p>written by {blog.author}</p>
                    <button className="btn" onClick={handleDelete}>Delete Blog</button>
                    <button className="btn" onClick={handleEdit}>Edit Blog</button>
                </article>
            )}
            {blog && choose && (
                <div className="create">
                    <form onSubmit={handleUpdate}>
                        <label>Blog title:</label>
                        
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <label>Blog Body:</label>
                        <textarea
                            required
                            value={body}
                            onChange={(event) => setBody(event.target.value)}
                        ></textarea>
                        <label>Author</label>
                        <input
                            type="text"
                            required
                            value={author}
                            onChange={(event) => setAuthor(event.target.value)}
                        />
                        {!updating && <button className="btn">Update Blog</button>}
                        {updating && <button disabled className="btn">Updating...</button>}

                    </form>
                </div>
            )}


        </div>
    );
}

export default BlogDetails;