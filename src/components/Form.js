import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

export default class Form extends Component {
  state = {
    title: '',
    date: '',
    lead: '',
    text: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/news/", {
        title: this.state.title,
        date: this.state.date,
        lead: this.state.lead,
        text: this.state.text,
      })
      .then((res) => {
        this.setState({
          title: '',
          date: '',
          lead: '',
          text: ''
        });
      })
      .catch((err) => {});
    this.props.addNewsItem(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form m-3'>
        <div className="form-group">
          <input
            value={this.state.title}
            onChange={this.handleInput}
            type="text" name="title"
            className="form-control"
            placeholder="Title" required />

          <input
            value={this.state.date}
            onChange={this.handleInput}
            type="date" name="date"
            className="form-control"
            placeholder="Date" required />
     
          <input
            value={this.state.lead}
            onChange={this.handleInput}
            type="text" name="lead"
            className="form-control"
            placeholder="Lead" />
     
          <input
            value={this.state.text}
            onChange={this.handleInput}
            type="text" name="text"
            className="form-control"
            placeholder="Text" required />
        </div>
        <button type="submit" className="btn btn-primary">Add news</button>
      </form>
    )
  }
}
