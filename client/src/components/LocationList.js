import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';


const LocationList = ({ cats }) => {
  const listLocations = cats.map(cat =>
    <iframe title={cat.id} width="500" height="300" frameBorder="0" styles="border:0"
     src={"https://goo.gl/maps/kVCCTswykXM2"}
     allowFullScreen>
    </iframe>

  );

  return (
    <Segment>
      <ol>
        {listLocations}
      </ol>
    </Segment>
  )
}


export default LocationList;
