import React, { Component } from 'react';
import DayChooserComponent from '../DayChooserComponent';
import RestaurantListComponent from '../RestaurantListComponent';
import { Container,Title, Panel,PanelBlock} from 'bloomer';


class DeliveryScheduleComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        display : "",
        dropoffs: []
      }

  }

  componentDidMount() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var today = weekday[d.getDay()];

    fetch('/api/loadData')
    .then(res => res.json())
    .then( jsonData => {this.setState({dropoffs: jsonData['dropoffs'],display:today});})
    .catch(function (error){
      console.log(error);
    });

  }

  handleDayClick(day){
    this.setState({display:day});
    console.log('Selected day: '+day);
  }


  render() {
    return(
        <Container isFluid style={{ marginTop: 10 }}>
        <Title style={{color:'red'}} isSize={1} hasTextAlign='centered'>Delivery Schedule</Title>
        <Panel  isDisplay='block' isMarginless='true'>

            <PanelBlock >
            <DayChooserComponent display={this.state.display}
                                   dropoffs={this.state.dropoffs}
                                   callbacks={{
                                     handleDayClick: this.handleDayClick.bind(this)
                                   }}
              />
          </PanelBlock>
        </Panel>
        <Panel>
           <PanelBlock>
            <RestaurantListComponent display={this.state.display}
                                   dropoffs={this.state.dropoffs}
            />
          </PanelBlock>
        </Panel>
        </Container>
    );
  }
}

export default DeliveryScheduleComponent;
