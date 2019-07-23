import React from 'react';
import { Route } from 'react-router-dom';

const About = (props) => {
  console.log('About', props);
  console.log(props.match.params.id);
  return (
    <h1>
      About {props.match.params.id}
      <Route path={`${props.match.path}/henry`} render={props => {
        console.log('Henry', props);
        return <div>Henry</div>;
      }}/>
      <Route path={`${props.match.path}/brad`}render={props => <div>Brad</div>}/>
      <button onClick={() => {
        console.log('We Clicked the Button!');
        props.history.push('/');
      }}>Navigate to Home</button>
      <button onClick={() => {
        console.log('We Clicked Back!');
        props.history.goBack();
      }}>Go Back</button>
    </h1>
  );
};

export default About;
