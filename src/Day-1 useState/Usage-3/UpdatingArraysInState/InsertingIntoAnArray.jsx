import { useState } from "react";

const initialArtists = [
  {
    id: 1,
    name: "Sakshi",
  },
  {
    id: 2,
    name: "Payal",
  },
  {
    id: 3,
    name: "Kinnu",
  },
];
const InsertingIntoAnArray = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  const onInputChange = (e) => {
    setName(e.target.value);
  };

  const onHandleInsert = (id) => {
    const insertAt = 1; // Could be any index
    const nextArtist = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      {
        id: initialArtists.id++,
        name: name,
      },
      // Items after the insertion point:
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtist);
    setName("");
  };

  return (
    <div>
      <h1>Inspiring Artists</h1>
      <input type="text" value={name} onChange={onInputChange} />
      <button onClick={onHandleInsert}>Insert</button>
      <ul>
        {artists.map((artist) => {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default InsertingIntoAnArray;
