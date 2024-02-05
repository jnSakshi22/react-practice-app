import { useState } from "react";

let nextId = 0;

const RemovingFromAnArray = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const onHAndleClick = () => {
    setArtists([...artists, { id: nextId++, name: name }]);
  };

  const onInputChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onHandleDelete = (id) => {
    setArtists((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input name="name" value={name} onChange={onInputChange} />
      <button onClick={onHAndleClick}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            <button onClick={() => onHandleDelete(artist.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RemovingFromAnArray;
