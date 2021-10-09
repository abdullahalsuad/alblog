const BlogList = ({blogs,name}) => {
    // const blogs = props.blogs; 
    // const name = props.name;

    return ( 
        <div className="blog-list">
            <h1>Hi {name} !</h1>
            {blogs.map((blog) =>(
           <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
           </div>   
       ))} 
        </div>
     );
}
 
export default BlogList;