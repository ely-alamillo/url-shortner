import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, InputGroup, Row, Col } from 'react-bootstrap';
import { isUrl } from '../helpers/helper';

import './Shortener.css';

class Shortener extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      shortUrl: null,
    };
  }

  handleUrl(event) {
    this.setState({
      url: event.target.value,
      shortUrl: null
    });
  }

  handleShorten(event) {
    event.preventDefault();
    const longUrl = this.state.url;
    if (!isUrl(longUrl)) return this.setState({ urlError: 'URL not valid, use http://likethis.com' });
    this.setState({ urlError: null });
    // axios.post('https://bitsy.herokuapp.com/api/shorten', { longUrl })
    axios.post('http://localhost:8080/api/shorten', { longUrl })
      .then((res) => {
        this.setState({ shortUrl: res.data.shortUrl });
      })
      // eslint-disable-next-line
      .catch((err) => {
        this.setState({ error: 'There was an error processing your request, try again.' });
      });
    this.setState({ url: '' });
  }

  RenderShortUrl() {
    return (
      this.state.shortUrl &&
      <Row>
        <Col md={8} mdOffset={2}>
          <div className='short-url'>
            <a href={this.state.shortUrl} className='short-url-link' target='_blank'>
              {this.state.shortUrl}
            </a>
          </div>
        </Col>
      </Row>
    );
  }

  renderUrlError() {
    return (
      this.state.urlError &&
      <p className='url-error'>{this.state.urlError}</p>
    );
  }

  render() {
    return (
      <div className='container center'>
        <Row>
          <Col md={8} mdOffset={2}>
            <h1 className='main-title'>URL Shortener</h1>
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
        {this.renderUrlError()}
        {this.RenderShortUrl()}
      </div>
    );
  }
}

export default Shortener;
