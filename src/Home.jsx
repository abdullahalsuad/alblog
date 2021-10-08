const Home = () => {

    const handelClick = () =>{
        console.log('hello suad')
    }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handelClick}>Click me </button>
      </div>
    );
  }
   
  export default Home;