/* eslint-disable no-unused-vars */
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Spinner } from "react-bootstrap";


const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return (
    <div className="home">
      { error && <div>{ error }</div> }
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
      </div> }
      { blogs && <BlogList blogs={blogs} title={"All Blogs"}/> }
    </div>
    );
  }
   
  export default Home;