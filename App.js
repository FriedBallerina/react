import { useState } from "react";
let counter = 0;

const App = () => {
  const Display = (props) => {
    return <div>{props.counter}</div>;
  };

  let arr = ["hello "];
  const [comments, setComments] = useState(arr);
  const addComment = () => {
    counter++;
    setComments((comments) => [...comments, "comment nr", counter]);
  };

  return (
    <>
      <button onClick={addComment}>comment</button>
      <ul>{comments}</ul>
      <Display counter={counter} />
    </>
  );
};

export default App;
