import { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";

export default function App() {
  const users = [
    {
      name: "Jayesh",
      pic:
        "https://asset.swarovski.com/images/$size_1000/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5379499_png/star-wars---darth-vader-swarovski-5379499.png"
    },
    {
      name: "Dev",
      pic:
        "https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=0%2C48%2C1536%2C768&width=960"
    }
  ];

  const movies = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg',
      name: 'Avengers: Endgame',
      rating: 8.5,
      discription: 'Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Marvels The Avengers[6] (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland),[3][7] or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
      name: 'Interstellar',
      rating: 8,
      discription: 'Interstellar is a 2014 epic science fiction film co-written, directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
      name: 'Inception',
      rating: 9.2,
      discription: 'Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another persons idea into a targets subconscious.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Tenet_movie_poster.jpg/220px-Tenet_movie_poster.jpg',
      name: 'Tenet',
      rating: 7.8,
      discription: 'Tenet is a 2020 science fiction action thriller film written and directed by Christopher Nolan, who produced it with Emma Thomas. A co-production between the United Kingdom and United States, it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Prestige_poster.jpg/220px-Prestige_poster.jpg',
      name: 'The Prestige',
      rating: 8.8,
      discription: 'The Prestige is a 2006 mystery thriller film directed by Christopher Nolan, written by Nolan and his brother Jonathan, based on the 1995 novel of the same name by Christopher Priest. It follows Robert Angier and Alfred Borden'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/The_Illusionist_Poster.jpg/220px-The_Illusionist_Poster.jpg',
      name: 'The Illusionist',
      rating: 9.5,
      discription: 'The Illusionist is a 2006 American romantic mystery film written and directed by Neil Burger and starring Edward Norton, Paul Giamatti, and Jessica Biel.'
    },
  ]

  return (
    <div className="App">
      {/* {users.map(({ pic, name }) => (
        <Msg name={name} pic={pic} />
      ))} */}

    {/* <MovieList movies={movies} /> */}
    <AddColor />
  </div>
  );
}

function AddColor() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState(['red', 'blue', 'cyan'])
  const styles = {backgroundColor: color }

  return(
    <div>
          <input style={styles} onChange={(event) => setColor(event.target.value) } placeholder="Enter Input" />
          <button onClick={() => setColors([...colors, color])}>Add Color</button>
          {colors.map((clr, index) => (
            <ColorBox key={index} clr= {clr} />
          ))} 
    </div>
  )
}

function ColorBox({clr}) {
  const styles = {backgroundColor: clr, height: '100px', width: '180px', margin: '20px'}
    return <div style={styles}></div>
}