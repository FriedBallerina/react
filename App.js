import { useState } from "react";

const Display = ({ counter }) => (
  <div>Number of comments so far: {counter}</div>
);

const App = () => {
  let arr = ["hello "];
  const [comments, setComments] = useState(arr);
  const addComment = () =>
    setComments((comments) => comments.concat("comment nr" + comments.length));

  return (
    <>
      <ul>{comments.join(" ")}</ul>
      <Display counter={comments.length - 1} />
      <button onClick={addComment}>Add a comment</button>
    </>
  );
};

export default App;
