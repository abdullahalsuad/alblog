import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [dec, setDec] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author,dec,date};

    console.log(blog);
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          placeholder="Blog Title -20 limit"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          placeholder="Blog Body..."
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={author}
          placeholder="Author Name"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Blog Deception :</label>
        <input 
          type="text" 
          required 
          value={dec}
          placeholder="short description - 20 limit"
          onChange={(e) => setDec(e.target.value)}
        />
        <label>Published Date :</label>
        <input 
          type="text" 
          required 
          value={date}
          placeholder="MM-DD-YYYY at TIME"
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;