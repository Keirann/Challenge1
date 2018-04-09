import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './custom.css';
import { NavbarMenu,NavbarItem} from 'bloomer';

function getDay(day) {
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
  if(day === today)
    return "today";
  else
    return day;
}




class DayChooserComponent extends Component {

  constructor (props){
    super(props);
    this.state = { activeDay:""};
  }


  render(){
    var workingDays = 5;
    var unorderedList = this.props.dropoffs.slice(0,workingDays).map((dayEntry) => {
       return (
      <NavbarItem className={this.props.display === dayEntry.day ? 'active' : ''}   key={dayEntry.day} href={'/#/'+dayEntry.day} onClick={this.props.callbacks.handleDayClick.bind(this,dayEntry.day)}>
         {getDay(dayEntry.day)}
       </NavbarItem>)
    });

    return (

      <NavbarMenu id="navMenu"  >
      {unorderedList}
      </NavbarMenu>

   );
  }
}



export default DayChooserComponent;
