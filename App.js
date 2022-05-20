const App = () => {
  return (
    <div>
      <h1>greetings, traveler!</h1>
      <Hello name="Fred" age={24} />
      <Hello name="Vilma" age={59} />
    </div>
  );
};

const Hello = ({ name, age }) => {
  console.log(name, age);
  const bornYear = () => new Date().getFullYear() - age;
  console.log(bornYear);

  return (
    <div>
      <p>
        hello {name}, you are {age} years old
      </p>
      <p>so you were born in about {bornYear()}</p>
    </div>
  );
};

export default App;
