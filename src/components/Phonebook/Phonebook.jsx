import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes, { number } from 'prop-types';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeName = e => this.setState({ name: e.target.value });
  handleChangeNumber = e => this.setState({ number: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <Form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={this.handleChangeName}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Number
          </label>
          <input
            type="tel"
            name="number"
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={this.handleChangeNumber}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </Form>
    );
  }
}

export default Phonebook;
