import React, {useState} from "react"
import {render} from "react-dom"
import "./styles.css"


const animeDatabase = {
    Five_Rating: [
        { 
            name:"Demon Slayer",
            release_Date:"April 6, 2019",
            description: "Demon Slayer turns out to be one of the most enjoyable new anime to come out in the past few yearsand it's a very exciting addition to Netflix's growing anime library.",
        },

        {
            name:"Death Note",
            release_Date:"October 3, 2006",
            description: "Death Note is a great starter anime because it's just a great show in general. And if you haven't watched it yet, or you have someone begging you to drop some sweet, sweet anime recommendations into their lives like worms into the open beaks of baby birds, pull up Death Note",
        },

        {
            name:"Attack on Titan",
            release_Date:"2013",
            description: " The story starts off on the Paradis Island, where its inhabitants have built huge walls to protect themselves from attacks from mindless titans.",
        },

        {
            name:"One Piece",
            release_Date:"1999",
            description: "Monkey D. Luffy, along with his pirate crew. They attempt to find the greatest treasure, left by the legendary pirate, Gold Roger. ",
        }
    ],

    Four_Rating: [
        {
            name:"Tokyo Ghoul",
            release_Date:"1999",
            description: "Monkey D. Luffy, along with his pirate crew. They attempt to find the greatest treasure, left by the legendary pirate, Gold Roger. ",
        },

        {
            name:"Naruto",
            release_Date:"February 15, 2007",
            description: "Naruto, an adolescent ninja, dreams of becoming the Hokage in his village.",
        },

        {
            name:"Dragon Ball Z",
            release_Date:"1989",
            description: "This series follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. ",
        },

        {
            name:"Pokemon",
            release_Date:"1996",
            description: "Most loved Franchise and is still going on and will go on. ",
        }
        
    ],

    BestAnime_Movies_Rating: [
        {
            name:"The Witcher: Nightmare of the Wolf",
            release_Date:"2021",
            description: "Continuation of the THe Witcher TV series by Netflix.Story is based on Vessemir.",
        },

        {
            name:"Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
            release_Date:"2021 in India",
            description: "Continuation Part of the Demon Slayer Anime. How Ren GOku tires to stop the Mungnn Train and defeat the evil demon.",
        },


        {
            name:"Spirited Away",
            release_Date:"2001",
            description: "It is a magical story about a young girl named Chihiro. She gets lost alongside her parents in a forest, where she is separated from them. She then has to work in a bathhouse for the gods to save her parents, who have been turned into pigs!",
        },

        {
            name:"Your Name",
            release_Date:"2016",
            description: "Romantic Fantasy Film.  It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies.",
        }
    ]
};





function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [rating, setRating] = useState("BestAnime_Movies_Rating")

    function handleClickButton(grade) {
        setRating(grade)
    }

    const ratingList = Object.keys(animeDatabase).map((rank) => {
        return (
          <a className="btn" onClick={() => handleClickButton(rank)}>
            {rank}
          </a>
        );
      });

    

    if(loggedIn) {   // Here the user is loggedIn
        return (
            <> 
               
               
                {ratingList}
                <button className="login-btn" onClick={() => setLoggedIn(false)}>Logout</button>
                
      
      <hr />
      {animeDatabase[rating].map((rank) => {
        return (
          <div className="animes">
            <h3>{rank.name}</h3>
            <h4>{rank.release_Date}</h4>
            <p>{rank.description}</p>
          </div>
          
        );
      })}




            </>
        )


        
    } else {
        return (
            <> 
                <div className="container">
        <h1>Welcome to Anime Watch</h1>
        <h4>Know which anime to watch based on the ratings provided</h4>
        <button className="login-btn" onClick={ () => setLoggedIn(true)}>Log In</button>
            </div>
            </>
        )
    }

}

render(<App /> , document.querySelector("#root"))