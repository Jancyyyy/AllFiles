import React, { useState, useEffect } from 'react';
import './Carousel.css';
 
const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlide(1);
    }, 2000);
 
    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);
 
  function moveSlide(step) {
    setSlideIndex((prevIndex) => (prevIndex + step + slides.length) % slides.length);
  }
 
  const slides = [
    "https://img.freepik.com/free-vector/instagram-carousel-templates_23-2148793986.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=ais",
    "data:image/jpeg;base64,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",
    "https://assets-global.website-files.com/605826c62e8de87de744596e/62b5a9572dab880f81c5d178_ajVzMkY7zNN-cU8hLJlTXR93WXkC09AI_0Dm-VBCfWe-kbHdRAAATBpSlNajuRsW7e0jHYCOVjdcHY1Sf-3X4tAI22KAFbbu31rgYGEmgCSV_WUrLFWhWl09ddXm7EhIITjKG0OggdxALfJeGQ.jpeg"
  ];
 
  return (
    <div>
      <div className="carousel">
        <div className="carousel-images">
          {slides.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} className={index === slideIndex ? 'active' : ''} />
          ))}
          <button className="prev" onClick={() => moveSlide(-1)}>
            &#8592;
          </button>
          <button className="next" onClick={() => moveSlide(1)}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default Carousel;

// import React from 'react';
// import './Carousel.css';
// const Carousel=(n)=>{
//  const slides = document.querySelectorAll(".carousel-images img");
//  slides[slideIndex].classList.remove("active"); // Hide current slide
// //  slideIndex += step;
//  if (n >= slides.length) { slideIndex = 0; }
//  if (n < 0) { slideIndex = slides.length - 1; }
//  slides.forEach(slide=>slide.classList.remove("active"));
//  slides[slideIndex].classList.add("active"); // Show new slide
//  return(
//     <div>
// <div className="carousel">
// <div className="carousel-images">
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvpYKvlaLOShU-d0IB6ENBzdSC6OxCwepfIQ&usqp=CAU" alt="Image 1"/>
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYFXO-wxJrupEG1LIAreqBeHplNkwMvXCjg&usqp=CAU" alt="Image 2"/>
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AEgTgQ49VeZ0LcdrrpHEWjHJ4i3_LLQSLg&usqp=CAU" alt="Image 3"/>
// </div>
// <button className="prev" onClick="moveSlide(-1)">&#8592;</button>
// <button className="next" onClick="moveSlide(1)">&#8594;</button>
// </div>
// </div>
 
//  );
// };
 
// let slideIndex = 0;
// Carousel(slideIndex);
// function moveSlide(step) {
//     slideIndex+=step;
//     Carousel(slideIndex);
// }

// setInterval(function(){
//     slideIndex++;
//     Carousel(slideIndex);
// },2000);

// export default Carousel;