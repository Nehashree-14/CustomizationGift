import React, { useState } from 'react';

function CustomizationOptions() {
  const [customText, setCustomText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customized with text:', customText);
    console.log('Selected image:', image);
  };

  return (
    <div>
      <h2>Customize Your Gift</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Custom Text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Submit Customization</button>
      </form>
    </div>
  );
}

export default CustomizationOptions;