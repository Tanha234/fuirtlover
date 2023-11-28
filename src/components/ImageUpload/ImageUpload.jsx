/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ImageUpload = () => {
    const [imageUrl, setImageUrl] = useState('');

    const displayImage = (event) => {
        const input = event.target;
        const preview = document.getElementById('previewImage');

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                preview.src = e.target.result;

                // Simulate uploading to a server and getting the image URL
                const placeholderUrl = 'https://example.com/upload'; // Replace with your actual server URL

                // Set the obtained URL (simulate server response)
                setImageUrl(placeholderUrl);

                // Log selected file information
                console.log('Selected File:', input.files[0]);
                console.log('Image URL:', placeholderUrl);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic for submitting the form if needed
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="file" id="imageInput" onChange={displayImage} />
                    <img id="previewImage" alt="Image Preview" />
                    {imageUrl && <p>Image URL: {imageUrl}</p>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ImageUpload;
