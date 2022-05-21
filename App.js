import { useState } from "react";

class Comment {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}

const Display = ({ counter }) => (
  <div>Number of comments so far: {counter}</div>
);

const App = () => {
  const [comments, setComments] = useState([]);
  const p = new Comment(comments.length + 1, "new comment");
  const addComment = () => {
    setComments((comments) => comments.concat(p));
  };
  return (
    <>
      <h1>First post</h1>
      <ul>
        {comments.map((p) => (
          <li key={p.id}>{p.content + " " + p.id}</li>
        ))}
      </ul>
      <Display counter={comments.length} />
      <button onClick={addComment}>Add a comment</button>
    </>
  );
};

export default App;
