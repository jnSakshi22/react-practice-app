import { useState } from "react";

const CheckedText = () => {
  const [liked, setLiked] = useState(true);

  const onInputChange = (e) => {
    setLiked(e.target.checked);
  };
  return (
    <div>
      <h3>Example 3: Checkbox Text</h3>
      <input type="checkbox" checked={liked} onChange={onInputChange} />
      You Liked me
      <p>You {liked ? "Liked me" : "did not like me"}</p>
    </div>
  );
};

export default CheckedText;
