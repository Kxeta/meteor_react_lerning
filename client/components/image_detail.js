//Creats Image Detail component

// Import React

import React from 'react';

// Create the component

const ImageDetail = (props) => {
  //props.image = image object

  return(
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} alt={props.image.title} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.image.title}
        </h4>
      </div>
    </li>
  );
};

// Export the component
export default ImageDetail;