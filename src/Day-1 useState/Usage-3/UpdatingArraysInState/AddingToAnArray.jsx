import { useState } from "react";

const AddingToAnArray = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const onInputChange = (e) => {
    setName(e.target.value);
  };

  const onHandleClick = () => {
    setArtists([{ name: name }, ...artists]);
  };

  console.log("Name", name);
  return (
    <div>
      <h1>Inspiring sculptors:</h1>
      <input type="text" value={name} onChange={onInputChange} />
      <button onClick={onHandleClick}>Add</button>
      <ul>
        {artists.map((artist, idx) => {
          return (
            <div>
              <li key={idx}>{artist.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default AddingToAnArray;
