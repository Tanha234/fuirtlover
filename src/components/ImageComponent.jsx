// ImageComponent.js


// eslint-disable-next-line react/prop-types
const ImageComponent = ({ name, src, onClick }) => {
  return (
    <div>
      <img
        src={src}
        alt={name}
        onClick={() => onClick(name)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ImageComponent;
