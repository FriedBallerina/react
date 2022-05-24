import { useState } from "react";

const Display = ({ counter }) => (
  <div>
    <br />
    Number of comments so far: {counter}
  </div>
);

const AllComments = ({ stuff }) => {
  console.log(stuff);
  return (
    <>
      {stuff.map((r) => (
        <li key={r.id}>{r.content}</li>
      ))}
      <br />
    </>
  );
};

const App = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = (event) => {
    event.preventDefault();
    const commentObject = {
      content: newComment,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: comments.length + 1,
    };
    setComments((comments) => comments.concat(commentObject));
    setNewComment("");
  };

  const handleCommentChange = (event) => {
    console.log(event.target.value);
    setNewComment(event.target.value);
  };

  return (
    <>
      <h1>A post</h1>
      <div></div>
      <p>Some random content. The comments are below.</p>
      <form onSubmit={addComment}>
        <input value={newComment} onChange={handleCommentChange} />
        <button type="submit">Add a comment</button>
      </form>
      <Display counter={comments.length} />
      <div>
        <p>Comments:</p>
        <AllComments stuff={comments} />
      </div>
    </>
  );
};

export default App;
