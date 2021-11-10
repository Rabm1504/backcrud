import { useState } from "react";

function Counter() {
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)
    const incrementLike = () => setLike(like + 1)
    const incrementDisLike = () => setDisLike(disLike + 1)
    return(
      <div className="counter-container">
      <button onClick={incrementLike}>👍 {like}</button>
      <button onClick={incrementDisLike}>👎 {disLike}</button>
    </div>
    )
  }

  export {Counter}