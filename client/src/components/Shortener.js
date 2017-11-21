import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup, InputGroup, ControlLabel, Row, Col } from 'react-bootstrap';

class Shortener extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      shortUrl: null
    };
  };

  handleUrl(event) {
    this.setState({
      url: event.target.value,
      shortUrl: null
    });
  };

  handleShorten(event) {
    event.preventDefault();
    const longUrl = this.state.url;
    console.log('clicked yo: ', this.state.url);
    axios.post('http://localhost:8080/api/shorten', { longUrl })
      .then((res) => {
        console.log('resposne: ', res.data);
        this.setState({ shortUrl: res.data.shortUrl });
      })
      .catch((err) => {
        this.setState({ error: 'There was an error processing your request, try again.'})
        console.log('error: ', err);
      });
    this.setState({ url: ''});
  };

  RenderShortUrl() {
    return (
      this.state.shortUrl &&
      <Row>
        <Col md={8} mdOffset={2}>
          <a href={this.state.shortUrl}>{this.state.shortUrl}</a>
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <div className='container'>
        <Row>
          <Col md={8} mdOffset={2}>
            <form onSubmit={this.handleShorten.bind(this)}>
              <InputGroup bsSize='lg'>
                <FormControl
                  type='text'
                  placeholder='Enter Url...'
                  value={this.state.url}
                  onChange={this.handleUrl.bind(this)}
                />
                <span className='input-group-btn'>
                  <button className='btn btn-success' type='submit'> Shorten Me! </button>
                </span>
              </InputGroup>
            </form>
          </Col>
        </Row>
        {this.RenderShortUrl()}
      </div>
    );
  };
}

export default Shortener;