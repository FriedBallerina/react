import { useState } from "react";

const App = () => {
  let arr = ["hello ", "goodbye "];
  const [comments, setComments] = useState(arr);

  const addComment = () =>
    setComments((comments) => [...comments, "another comment "]);
  console.log("comments are", comments);
  console.log("arr is", arr);

  return (
    <>
      <button onClick={addComment}>comment</button>
      <p>{comments}</p>
    </>
  );
};

export default App;
