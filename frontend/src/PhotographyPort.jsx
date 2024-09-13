import {React,useState} from 'react';
import img1 from './Photography/Copy of 31.jpg';
import img2 from './Photography/Copy of 32.jpg';
import img3 from './Photography/Copy of 29.jpg';
import img4 from './Photography/Copy of 28.jpg';
import img5 from './Photography/Copy of 21.jpg';
import img6 from './Photography/Copy of 22.jpg';
import img7 from './Photography/Copy of 25.jpg';
import img8 from './Photography/Copy of 30.jpg';
import img9 from './Photography/Copy of 24.jpg';
import img10 from './Photography/Copy of 26.jpg';
import img11 from './Photography/Copy of 23.jpg';
import img12 from './Photography/Copy of 27.jpg';
import img13 from './Photography/Copy of 13.jpg';
import img14 from './Photography/Copy of 11.jpg';
import img15 from './Photography/Copy of 18.jpg';
import img16 from './Photography/Copy of 12.jpg';
import img17 from './Photography/Copy of 14.jpg';
import img18 from './Photography/Copy of 17.jpg';
import img19 from './Photography/Copy of 15.jpg';
import img20 from './Photography/Copy of 19.jpg';
import img21 from './Photography/Copy of 20.jpg';
import img22 from './Photography/Copy of 16.jpg';
import img23 from './Photography/Copy of 7.jpg';
import img24 from './Photography/Copy of 5.jpg';
import img25 from './Photography/Copy of 3.jpg';
import img26 from './Photography/Copy of 6.jpg';
import img27 from './Photography/Copy of 2.jpg';
import img28 from './Photography/Copy of 10.jpg';
import img29 from './Photography/Copy of 9.jpg';
import img30 from './Photography/Copy of 1.jpg';
import img31 from './Photography/Copy of 4.jpg';
import img32 from './Photography/Copy of 8.jpg';
import { useNavigate } from 'react-router-dom';

const PhotoGallery = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32
  ];

  const [selectedImage, setSelectedImage] = useState(null); // State to hold the clicked image

  const navigate=useNavigate();
  const handlenav = (url) =>{
    navigate(url);
    window.scrollTo(0, 0);



  }

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '100px', justifyContent:'center', alignItems:'center' }}>
        <label
          className='labeltest'
          style={{
            color: 'black',
            fontSize: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1, // Ensure the label is on top
            position: 'relative',
            marginTop: '0px'
          }}
        >
          Our Photography Gallery
        </label>
      </div>

      <div className="gallery-container">
        <div className="grid-container">
          {images.map((image, index) => (
            <div key={index} className="grid-item">
              <img
                src={image}
                alt={`Photography ${index + 1}`}
                onClick={() => setSelectedImage(image)} // Set clicked image
                style={{ cursor: 'pointer' }} // Indicate clickable image
              />
            </div>
          ))}
        </div>
      </div>
      <div id='book-now' style={{ textAlign: 'center', marginTop: '100px',display:'block' }}>
        <label
          className='labeltest'
          style={{
            color: 'black',
            fontSize: '30px',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1, // Ensure the label is on top
            position: 'relative',
            marginTop: '0px'
          }}
        >
          What are you waiting for? Book Now and elevate your business !
        </label>
        <br/>
        <button onClick={()=>{handlenav('/BookNow')}}  style={{ width: '30%', marginTop: '30px',fontSize:'20px',marginBottom:'100px' }} className="booknow">Book Now</button>
      </div>

      {/* Modal to show enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
