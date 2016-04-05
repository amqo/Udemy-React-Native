// var React = require('react-native');
// var Text = React.Text;

import React, { Text } from 'react-native';

var DayItem = React.createClass({
  render() {
    return (
      <Text style={ this.style() }>
        { this.props.day }
      </Text>
    );
  },
  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },
  color() {
      var opacity = 1 / this.props.daysUntil;
      return 'rgba(0, 0, 0, ' + opacity + ')';
  },
  fontWeight() {
    var weight = 8 - this.props.daysUntil;
    return '' + weight * 100;
  },
  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight() {
    return 70 -  4 * this.props.daysUntil;
  }
});

//Export this code to be available elsewhere
module.exports = DayItem;
