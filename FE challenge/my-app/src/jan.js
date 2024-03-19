/* .container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  border-top: 2px solid black;
  margin-top: auto;
}
.love-icon {
  position: absolute;
  cursor: pointer;
  width: 50px !important;
  height: 50px;
  margin-left: 350px;
}
.top-text {
  position: absolute;
  top: 0;
  right: 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 350px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  height: 250px;
  font-size: 50px;
  width: 100%;
  box-sizing: border-box;
}
.top-links {
  display: flex;
  gap: 90px;
  margin: left 9px;
}
.top-link {
  cursor: pointer;
}
.logo-container {
  display:flex;
  align-items: center;
}
.logo {
  width: 100px; 
  height: 140px;
  margin-right: 10px; 
}
.image-text {
  position: absolute;
  top: 400px;
  left: 80px;
  color: white;
  font-size: 50px;
  padding: 30px 300px;
  width: 800px;
  height: 300px;
}
.image-text h2 {
  font-size: 140px;
  margin-bottom: 20px;
}
.image-text pre {
  font-size: 50px;
  padding: 2%;
  margin: 0;
}
.bgimage {
  flex: 1;
  width: 100%;
}
.small-images {
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  padding-left: 500px;
  padding-right: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 450px;
  margin-top: 20px;
}
.small-image,
.centered-image {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(4, 109, 141);
  padding: 20px 10px;
  width: 880px;
  height: 300px;
}
.small-image img {
  width: 70px;
  background-position: center;
  margin-bottom: 10px;

}
.centered-image img {
  width: 130px;
  background-position: center;
}
.small-image h2,
.centered-image h2 {
  font-size: 60px;
  font-weight: bold;
}
.small-image p,
.centered-image p {
  font-size: 40px;
}
.bottom-border {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background-color: black;
  margin-top: 500px;
}

.lastbottom-border {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
} */

/*.love-icon {
    position: absolute;
  
    cursor: pointer;
  
    width: 50px !important;
  
    height: 50px;
  
    margin-left: 350px;
  }
  
  .logo-container {
    display: flex;
  
    align-items: center;
  }
  
  .logo {
    width: 100px;
  
    height: 140px;
  
    margin-right: 10px;
  }
  
  .a:hover {
    opacity: 1;
  }
  
  .a::before {
    content: "";
  
    position: absolute;
  
    left: 0;
  
    bottom: 0;
  
    width: 0%;
  
    height: 2px;
  
    background: #ffffff;
  
    transition: all 0.45s;
  }
  
  .a:hover::before {
    width: 100%;
  }
  
  .nav-item {
    color: aliceblue;
  
    font-size: 20px;
  
    text-decoration: none;
  
    margin: 15px;
  
    position: relative;
  
    opacity: 0.9;
  }
  
  .top-text {
    position: absolute;
  
    display: flex;
  
    justify-content: space-between;
  
    align-items: center;
  
    padding: 20px 50px;
  
    color: white;
  
    background-color: rgba(0, 0, 0, 0.7);
  
    height: 10px;
  
    width: 100%;
  
    box-sizing: border-box;
  }
  
  .image-text {
    position: absolute;
  
    padding: 1%;
  
    top: 2%;
  
    left: 2%;
  
    color: white;
  
    font-size: 15px;
  }
  
  .small-images {
    flex-wrap: wrap;
  
    justify-content: space-around;
  
    align-items: center;
  
    display: grid;
  
    grid-template-columns: repeat(3, 1fr);
  
    column-gap: 10%;
  
    row-gap: 0%;
  }
  
  .small-image,
  .centered-image {
    display: grid;
  }
  
  .imgsize {
    display: flex;
  
    size: 5%;
  
    width: 5%;
  }
  
  .love-icon {
    position: absolute;
  
    cursor: pointer;
  
    width: 60px !important;
  
    height: 25px;
  
    margin-left: 10%;
  
    color: white;
  }
  
  .bgimage {
    width: 100%;
  }
  
  .bottom-border {
    height: 40px;
  
    background-color: black;
  
    margin-top: 10%;
  }
  
  .lastbottom-border {
    width: 100%;
  
    height: 10%;
  
    background-color: rgba(0, 0, 0, 0.7);
  
    display: flex;
  
    justify-content: center;
  
    font-size: calc(10px + 2vmin);
  
    align-items: center;
  
    color: white;
  
    font-size: 20px;
  }
  
  .small-image p,
  .centered-image p {
    font-size: 15px;
  
    height: 10%;
  }
  
  .centered-image img {
    width:130%;
  
    background-position: center;
  }
  
  .small-image h2,
  .centered-image h2 {
    font-size: 20px;
  
    font-weight: bold;
  }
  
  .centered-image img {
    width: 100px;
  
    padding: 0%;
  
    background-position: center;
  }
  
  .small-image img {
    width: 15%;
  
    background-position: center;
  
    margin-bottom: 20%;
  }
  
  .small-image,
  .centered-image {
    display: flex;
  
    align-items: center;
  
    flex-direction: column;
  
    background-color: rgb(4, 109, 141);
  
    padding: 5% 5%;
  
    width: 100%;
  
    height: 50%;
  }
  
  .image-text h2 {
    font-size: 50px;
  
    margin-bottom: 20px;
  }
  
  .top-link {
    cursor: pointer;
  }
  
  .top-links {
    display: flex;
  
    gap: 10%;
  
    margin: left 9px;
  }
  
  .container {
    display: flex;
  
    flex-direction: column;
  
    position: relative;
  
    border-top: solid black;
  
    margin-top: auto;
  }
//---------------------------------------


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
*/