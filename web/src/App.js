import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import DeliveryScheduleComponent from './DeliveryScheduleComponent';

class App extends Component {

  render() {

    return (
      <div className="App">
        <section className="section">
          <div className="content">

            <Route exact path="/" component={DeliveryScheduleComponent}/>

          </div>
        </section>
      </div>
    );
  }
}

export default App;
