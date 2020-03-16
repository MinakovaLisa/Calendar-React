import React from "react";

class DateTimeInput extends React.Component {
  render() {
    return (
      <div className="dateTimeBlock">
        <p>{this.props.title}</p>
        <div className="dateTimeInput">
          <input
            required
            type="date"
            name={this.props.dateName}
            className="dateInput"
            onChange={this.props.onChange}
            value={this.props.dateValue}
            /*   value="2019-03-03" */
          />
          <input
            required
            type="time"
            name={this.props.timeName}
            className="timeInput"
            onChange={this.props.onChange}
            value={this.props.timeValue}
            /*  value="11:00" */
          />
          {/*   <input type="datetime-local" /> */}
        </div>
      </div>
    );
  }
}

export default DateTimeInput;