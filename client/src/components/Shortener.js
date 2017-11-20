import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup, ControlLabel, Row, Col } from 'react-bootstrap';

class Shortener extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
    };
  };

  handleUrl(event) {
    this.setState({
      url: event.target.value,
    });
  };

  handleShorten(event) {
    event.preventDefault();
    console.log('clicked yo: ', this.state.url);
  }

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
                  <button className='btn btn-success' type='submit'> Login </button>
                </span>
              </InputGroup>
            </form>
          </Col>
        </Row>
      </div>
    );
  };
}

export default Shortener;
