import React from "react";
import { saveDay } from '../db';

class DayViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grateful1: "",
      grateful2: "",
      grateful3: "",
      great1: "",
      great2: "",
      great3: "",
      iam: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
    saveDay(this.state, 'day');
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    saveDay(this.state, 'day');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5 className="align-center title title-text">I am grateful for...</h5>
        <div className="form-control">
          <label>1.</label>
          <input name="grateful1" value={this.state.grateful1} type="text" onChange={this.handleChange} />
          <label>2.</label>
          <input name="grateful2" value={this.state.grateful2} type="text" onChange={this.handleChange} />
          <label>3.</label>
          <input name="grateful3" value={this.state.grateful3} type="text" onChange={this.handleChange} />
        </div>

        <h5 className="align-center title title-text">
          What would make today great?
        </h5>
        <div className="form-control">
          <label>1.</label>
          <input name="great1" value={this.state.great1} type="text" onChange={this.handleChange} />
          <label>2.</label>
          <input name="great2" value={this.state.great2} type="text" onChange={this.handleChange} />
          <label>3.</label>
          <input name="great3" value={this.state.great3} type="text" onChange={this.handleChange} />
        </div>

        <h5 className="align-center title title-text">
          Daily affirmation. I am...
        </h5>
        <div className="form-control">
          <textarea name="iam" value={this.state.iam} type="text" onChange={this.handleChange} />
        </div>

        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default DayViewForm;
