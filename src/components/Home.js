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
          <img style={{width: 1200, height: 732}} src={'public/images/orange-cats.jpg'} alt={'client/public/cats/assets/images/original/missing.png'} />
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Home;
