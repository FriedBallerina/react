import { useState } from "react";

const App = () => {
  const Display = (props) => {
    return <div>Number of comments so far: {props.counter}</div>;
  };

  let arr = ["hello "];
  const [comments, setComments] = useState(arr);
  const addComment = () => {
    setComments((comments) => [...comments, " comment nr" + comments.length]);
  };

  return (
    <>
      <ul>{comments}</ul>
      <Display counter={comments.length} />
      <button onClick={addComment}>Add a comment</button>
    </>
  );
};

export default App;
