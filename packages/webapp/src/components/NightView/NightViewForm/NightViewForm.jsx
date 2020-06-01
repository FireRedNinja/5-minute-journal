import React from "react";

class NightViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amazing1: "",
      amazing2: "",
      amazing3: "",
      todayBetter: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {}

  handleSubmit(event) {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5 className="align-center title title-text">
          3 Amazing things that happened today...
        </h5>
        <div className="form-control">
          <label>1.</label>
          <input name="amazing1" type="text" onChange={this.handleChange} />
          <label>2.</label>
          <input name="amazing2" type="text" onChange={this.handleChange} />
          <label>3.</label>
          <input name="amazing3" type="text" onChange={this.handleChange} />
        </div>

        <h5 className="align-center title title-text">
          How could I have made today even better?
        </h5>
        <div className="form-control">
          <textarea
            name="todaybetter"
            type="text"
            onChange={this.handleChange}
          />
        </div>

        <button type='submit' value='submit' className='button-primary'>
          Submit  
        </button>
      </form>
    );
  }
}

export default NightViewForm;
