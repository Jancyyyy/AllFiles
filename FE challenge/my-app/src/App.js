// import React, { useEffect, useState } from "react";
// import "./App.css";
// import GrideSomething from "./components/Gride";
// // import GrideSomething from "../src/components/Gride"; 
// import examplelogo from "../src/images/beer.jpg";
// const Stories = () => {
//   const [dataarray, setDataArray] = useState("");
//   useEffect(() => {
//     fetch("https://api.punkapi.com/v2/beers?page=1&per_page=10")
//       .then((res) => res.json())
//       .then((data) => setDataArray(data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div>
//       <div>
//         <div className="logo-container">
//           <img className="bgimage" src={examplelogo} />
//         </div>
//         <div>
//           <a className="nav-item a" href="/Home">
//             Home
//           </a>
//           <a className="nav-item a" href="/About">
//             Beer
//           </a>
//           <a className="nav-item  a" href="/Contact">
//             Contact
//           </a>
//         </div>
//       </div>
//       <div>
//         <div className="image-text">
//           <h2>Great IPA</h2>
//           <pre>
//             Some hops is plowed. An often hairy girl scout thoroughly makes
//           </pre>
//           <pre>
//             a pact with the Honey Brown over the Budweiser. A blood clot
//           </pre>
//           <pre>
//             makes a pact with the discusting satelliste brewery. A lover about
//           </pre>
//           <pre>
//             the Pilsner Urquell takes a peek at the bottle of beer. The coors
//           </pre>
//           <pre>
//             light,the crank case of an IPA, and a Citra Ninja are what made
//           </pre>
//           <pre>America great!</pre>
//         </div>
//       </div>
//       {Array.from(dataarray).map((item) => {
//         return (
//           <>
//             <div >
//               <div  className="wrapper" >
//                 {" "}
//                 <img src={item.image_url} />
//               </div>
//               <h1 className="wrapper-h1">{item.name}</h1>
//               <p className="wrapper-p">{item.description} </p>
//               {/* <GrideSomething /> */}
//             </div>
//           </>
//         );
//       })}

//       <div>
//         <div className="bottom-border"></div>
//         <div className="lastbottom-border">Copyright Foolproof 2019</div>
//       </div>
//     </div>
//   )
// }
// export default Stories;

import React, { useState } from "react";
import "./App.css";
import exampleImg from "../src/images/beer.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import examplelogo from "../src/images/logo.svg";

function App() {
  const [isLiked, setIsLiked] = useState();
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="top-text">
        <div className="logo-container">
          <img className="logo" src={examplelogo} />
        </div>
        <div className="top-links">
          <a className="nav-item a" href="/Home">Home</a>

          <a className="nav-item a" href="/Beer">Beer</a>

          <a className="nav-item  a" href="/Contact">Contact</a>
        </div>
      </div>
      <div>
        <img className="bgimage" src={exampleImg} />
        <div className="image-text">
          <h2>Great IPA</h2>
          <pre>
            Some hops is plowed. An often hairy girl scout thoroughly makes
          </pre>
          <pre>
            a pact with the Honey Brown over the Budweiser. A blood clot
          </pre>
          <pre>
            makes a pact with the discusting satelliste brewery. A lover about
          </pre>
          <pre>
            the Pilsner Urquell takes a peek at the bottle of beer. The coors
          </pre>
          <pre>
            light,the crank case of an IPA, and a Citra Ninja are what made
          </pre>
          <pre>America great!</pre>
        </div>
      </div>
      <div className="small-images">
        <div className="centered-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/keg.png"} />
          <h2>Buzz</h2>
          <p>
            The earthy and floral aromas from the hops can be overpowering. Drop
            a little Cascade in at the end of the boil to lift the profile with
            a bit of citrus.
          </p>
        </div>
        <div className="small-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/2.png"} />
          <h2>Trashy Blond</h2>
          <p>
            Be careful not to collect too much wort from the mash. Once the
            sugars are all washed out there are some very unpleasant grainy
            tasting compounds that can be extracted into the wort.
          </p>
        </div>
        <div className="centered-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/keg.png"} />
          <h2>Berliner Weisse With Yuzu - B-Sides</h2>
          <p>
            Clean everything twice. All you want is the clean sourness of
            lactobacillus.
          </p>
        </div>
        <div className="small-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/4.png"} />
          <h2>Pilsen Lager</h2>
          <p>
            Play around with the fermentation temperature to get the best
            flavour profile from the individual yeasts.
          </p>
        </div>
        <div className="small-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/5.png"} />
          <h2>Avery Brown Dredge</h2>
          <p>
            Make sure you have a big enough yeast starter to ferment through the
            OG and lager successfully.
          </p>
        </div>
        <div className="small-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/6.png"} />
          <h2>Electric India</h2>
          <p>
            Source some really good heather honey to get the right spicy esters
            in the beer.
          </p>
        </div>
        <div className="small-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/7.png"} />
          <h2>AB:12</h2>
          <p>
            Don't worry too much about controlling the temperature with the
            Belgian yeast strain - just make sure it doesn't rise above 30°C!
          </p>
        </div>
        <div className="small-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/8.png"} />
          <h2>Fake Lager</h2>
          <p>
            Once the primary fermentation is complete get this beer as cold as
            you can and let it mature for as long as you've got.
          </p>
        </div>
        <div className="small-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/9.png"} />
          <h2>AB:07</h2>
          <p>
            Authentic heather honey adds a beautiful floral top note that is
            unachievable any other way.
          </p>
        </div>

        <div className="small-image">
          <div>
            {isLiked ? (
              <AiFillHeart
                data-testid="like-icon-filled"
                className="love-icon"
                color="red"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            ) : (
              <AiOutlineHeart
                data-testid="like-icon-outlined"
                className="love-icon"
                color="white"
                size={50}
                onClick={() => {
                  handleLikeClick();
                }}
              />
            )}
          </div>
          <img className="imgsize" src={"https://images.punkapi.com/v2/10.png "} />
          <h2>Bramling X</h2>
          <p>
            Getting good Bramling Cross is key. Most English hops are in leaf
            form (not pelletised), so getting fresh hops close to harvest
            (September) will give this beer the right amount of dark berry
            intensity.
          </p>
        </div>
      </div>
      <div>
        <div className="bottom-border"></div>
        <div className="lastbottom-border">Copyright Foolproof 2019</div>
      </div>
    </div>
  );
}

export default App;