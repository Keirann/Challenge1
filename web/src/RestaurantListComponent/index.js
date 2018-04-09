import React from 'react';
import RestaurantCardComponent from '../RestaurantCardComponent';

class RestaurantListComponent extends React.Component {

  render(){

    var cards = this.props.dropoffs
                 .filter((dayRecord) => dayRecord.day === this.props.display)
                 .map((dayRecord) => {
                     return (dayRecord.deliveries.map((restaurantEntry)=>{
                       return (<RestaurantCardComponent key={restaurantEntry.storeId} info={restaurantEntry}/>);
                     }));
                   }
                 );
    return (
      <div className="tile is-vertical">
          {(cards.length === 0)?<div>"No Delivery for this day"</div>:(cards)}
      </div>
    )
  }
}

export default RestaurantListComponent;
