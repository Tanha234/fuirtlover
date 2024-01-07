// App.js

import ImageComponent from '../components/ImageComponent';

const Animated = () => {
  const images = [
    { name: 'Image 1', src: '../../images/1574972-removebg-preview.png' },
    { name: 'Image 2', src: 'path/to/image2.jpg' },
    // Add more images as needed
  ];

  const handleClick = (imageName) => {
    alert(`Clicked on ${imageName}`);
  };

  return (
    <div>
      <h1>Image Click App</h1>
      {images.map((image, index) => (
        <ImageComponent
          key={index}
          name={image.name}
          src={image.src}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Animated;
