import React from 'react';
import { Grid } from 'semantic-ui-react';

const Home = () => {
  return (
    <div>
      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={12}>
          <h1> Welcome to Straydar</h1>
          <img style={{width: 1200, height: 732}} src={'/images/orange-cats.jpg'} alt={'/images/missing.png'} />
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Home;
