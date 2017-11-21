import React, { Component } from 'react';

const About = () => {
  return (
    <div className='jumbotron'>
      <div className='container'>
        <p className='lead'>
          URL Shortener is a project built to shorten URLs. It is
          implemented using a Base58 encoding algorithm to create
          unique identifiers for each URL. The identifiers are used to create
          a shorter URL that will redirect to the original destination.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Source on GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default About;
