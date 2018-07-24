import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots:[] 

    }
  }
  
  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  
  
  
  
  render() {
    
    return (
      
      <div className='App someshit'>
      
      <div className="container somethin" style={{border: "solid"}} >
        <h1>San Diego Top Spots</h1>
        <h4>A list of the top 30 places to see in San Diego</h4>
      </div>
     
      <div className="container somefat" style={{border: "dotted"}}>
      { 
    this.state.topspots.map(topspot => (
        <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />
    ))
}
      </div> 

      </div>

      
    );
  }
  
}

export default App;
