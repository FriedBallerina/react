import { useState, useEffect } from "react";
import axios from "axios";

const Display = ({ counter }) => (
  <div>
    <br />
    Number of comments so far: {counter}
  </div>
);

const AllComments = ({ stuff }) => {
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

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3002/notes").then((response) => {
      console.log("promise fulfilled");
      setComments(response.data);
      console.log(response.data);
    });
  };

  useEffect(hook, []);
  console.log("render", comments.length, "comments");

  return (
    <>
      <h1>A post</h1>
      <Display counter={comments.length} />
      <div>
        <p>Comments:</p>
        <AllComments stuff={comments} />
      </div>
    </>
  );
};

export default App;
