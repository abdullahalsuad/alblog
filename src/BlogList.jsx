import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    // const blogs = props.blogs; 
    // const name = props.name;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) =>(
           <div className="blog-preview" key={blog.id}>
                   
              {/* <p><b>published:<b> {blog.date}</p> */}
              <Link to={`/blogs/${blog.id}`} >
                <h2>{blog.title}</h2>
                <h6>{blog.dec}</h6>
                <h6><b>Written by :</b> <span style={{'color':'blue'}}>{blog.author}</span></h6>
                <small>{blog.date}</small>
              </Link>
           </div>   
       ))} 
        </div>
     );
}
 
export default BlogList;