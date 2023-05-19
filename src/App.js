import Header from "./components/Header";

function App() {
  // Constantes
  const nbStudents = 16; // number
  const name = "Baptiste"; // string
  const city = "Villejuif";
  const flowers = ["tulipe", "rose"]; // array
  const classroom = { // object
    name: "React Classroom",
    nbStudents,
  };

  // CSS
  let style = {
    paragraph1: {backgroundColor: "yellow"}, //camelCase
    paragraph2: {backgroundColor: "red"},
  }
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Reste de la page */}
      <ul>
        {flowers.map((flower, index) => (
          <li key={index}>{flower}</li>
        ))}
      </ul>
      <p style={style.paragraph1}>
        {name} is teacher of a class of {nbStudents} students.
      </p>
      <p style={style.paragraph2}>He lives in {city}.</p>
      <table>
        <th>Classroom</th>
        <tr>
          <td>{classroom.name}</td>
        </tr>
        <tr>
          <td>{classroom.nbStudents}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;