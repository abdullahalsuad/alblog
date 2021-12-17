import { useParams,useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { Spinner } from "react-bootstrap";

const BlogDetails = () => {

    const {id} = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate  = useNavigate();

    
    const handleClick = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        navigate('/');
      }) 
    }
    return (  
        <div className="blog-details">
        { isPending && 
        
        <div className="d-flex justify-content-center">
        <Spinner animation="grow" variant="primary" className="m-2"/>
        <Spinner animation="grow" variant="secondary" className="m-2"/>
        <Spinner animation="grow" variant="success" className="m-2"/>
        <Spinner animation="grow" variant="danger" className="m-2"/>
        <Spinner animation="grow" variant="warning" className="m-2"/>
        <Spinner animation="grow" variant="info" className="m-2"/>
        <Spinner animation="grow" variant="light" className="m-2"/>
        <Spinner animation="grow" variant="dark" className="m-2"/>
      </div>
        
        }
        { error && <div>{ error }</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <h6><b>Written by :</b> <span style={{'color':'blue'}}>{blog.author}</span></h6>
            <small>{blog.date}</small>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>Delete Blog</button>
          </article>
        )}
      </div>
    );
}
 
export default BlogDetails;
