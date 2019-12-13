import React, { Component } from 'react';
import SearchSectionLayout from './layout';

class SearchSectionContainer extends Component {
  state = {
    place: '', lastSearch: '', startDate: '', endDate: '', lastStartDate: '', lastEndDate: '', today: new Date()
  }

  handleChange = place => this.setState({ place: place.address_components[0].long_name });

  handleStartDateChange = date => this.setState({ startDate: date });

  handleEndDateChange = date => this.setState({ endDate: date });

  handleClick = (value, start, end) => this.setState({
    lastSearch: value, lastStartDate: start, lastEndDate: end
  });


  render() {
    const {
      lastSearch, place, startDate, today, endDate, lastStartDate, lastEndDate
    } = this.state;
    return (
      <SearchSectionLayout
        onPlaceSelected={this.handleChange}
        onStartDateChange={this.handleStartDateChange}
        onEndDateChange={this.handleEndDateChange}
        startDate={startDate}
        endDate={endDate}
        today={today}
        start={lastStartDate}
        end={lastEndDate}
        lastSearch={lastSearch}
        place={place}
        onClick={this.handleClick}
        disabled={!startDate || !endDate || !place}
      />
    );
  }
}


export default SearchSectionContainer;
