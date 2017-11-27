import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const About = () => {
  return (
    <div>
      <Grid>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <h1>About Straydar</h1>
          <p><em>We want to save all the stray kitties and help find the lost ones.</em></p>
          <h3>How to use Straydar:</h3>
          <p>If you spot a stray cat, please <Link to={`/cats/new`} >report a stray sighting.</Link></p>
          <p>If you are looking for a cat that may have been reported, please view our <Link to={`/cats`} >cat list.</Link></p>
          <img style={{width: 1300, height: 732}} src={'cats/assets/images/original/calico-cats.jpeg'} alt={'client/public/cats/assets/images/original/missing.png'} />
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default About;
