import { useState } from "react";

function Counter() {
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)
    return(
      <div className="counter-container">
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
    </div>
    )
  }

  export {Counter}