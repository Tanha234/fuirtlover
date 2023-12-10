import { useState } from 'react';

const ImageUpload = () => {
  const [imageURL, setImageURL] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const name = event.target.elements.name.value;
    const imageInput = event.target.elements.image;

    if (imageInput.files.length > 0) {
      const imageFile = imageInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataURL = reader.result;
        setImageURL(imageDataURL);

        const user = { name, image: imageDataURL };
        console.log(user);

        // Now you can send 'user' object to the server

        fetch('http://localhost:5000/upload', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.insertedId){
              alert("Inserted Sucessfully");
              user.reset()
            }
          });
      };

      reader.readAsDataURL(imageFile);
    } else {
      // Handle the case where no image is selected
      console.log('No image selected');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" id="name" />
        <input type="file" name="image" id="image" accept="image/png,image/gif,image/jpg,image/jpeg" />
        {imageURL && <img src={imageURL} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100px' }} />}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;
