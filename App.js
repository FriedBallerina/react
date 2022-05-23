import { useState } from "react";

const Display = ({ counter }) => (
  <div>Number of comments so far: {counter}</div>
);

const AllComments = ({ stuff }) => {
  console.log(stuff);
  return (
    <>
      {stuff.map((r) => (
        <li key={r.id}>{r.content}</li>
      ))}
    </>
  );
};

const App = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("a new");

  const addComment = (event) => {
    event.preventDefault();
    const commentObject = {
      content: newComment,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: comments.length + 1,
    };
    console.log("button clicked", event.target);
    setComments((comments) => comments.concat(commentObject));
  };

  const handleCommentChange = (event) => {
    console.log(event.target.value);
    setNewComment(event.target.value);
  };
  return (
    <>
      <h1>First post</h1>
      <form onSubmit={addComment}>
        <input value={newComment} onChange={handleCommentChange} />
        <button type="submit">Add a comment</button>
      </form>
      <AllComments stuff={comments} />
      <Display counter={comments.length} />
    </>
  );
};

export default App;
