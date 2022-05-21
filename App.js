import { useState } from "react";

const App = () => {
  const Display = ({ counter }) => (
    <div>Number of comments so far: {counter}</div>
  );

  let arr = ["hello "];
  const [comments, setComments] = useState(arr);
  const addComment = () =>
    setComments((comments) => [...comments, " comment nr" + comments.length]);

  return (
    <>
      <ul>{comments}</ul>
      <Display counter={comments.length - 1} />
      <button onClick={addComment}>Add a comment</button>
    </>
  );
};

export default App;
