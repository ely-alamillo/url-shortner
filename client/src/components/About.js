import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './About.css';

const About = () => {
  return (
    <div className='container about'>
      <div className='jumbotron'>
        <div className='container'>
          <p className='lead text-left'>
            URL Shortener is a project built to shorten URLs. It is
            implemented using a Base58 encoding algorithm to create
            unique identifiers for each URL. The identifiers are used to create
            a shorter URL that will redirect to the original destination.
          </p>
          <p class="lead text-left">
            <a class="btn btn-primary btn-lg" href="https://github.com/ely-alamillo/urlshortner" role="button">Source on GitHub</a>
            <Link to='/' className='btn btn-lg btn-default'> Try Me</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
