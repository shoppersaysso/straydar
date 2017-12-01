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
        <br></br>
        <p>And if you are looking to adopt, please take a look below :)</p>
        <br></br>
          <iframe title="petFinder"
          src="https://fpm.petfinder.com/petlist/petlist.cgi?shelter=ALL_NY&status=A&age=&limit=50&offset=0&animal=Cat&title=Adoptable Pets in Your Area&style=10&ref=753ntezPO7rdwnq"
          width="700px" height="600px" hspace="0" vspace="0"  frameborder="10" scrolling="yes" marginheight="0" marginwidth="0" bordercolor="#000000"></iframe>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <footer>This site was created by Sara Hopper. Check out the code at <a href="http://github.com/shoppersaysso/straydar">Github.</a></footer>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default About;
