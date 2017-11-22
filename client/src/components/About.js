import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className='container about'>
      <div className='jumbotron about-jumbo'>
        <div className='container'>
          <p className='lead text-left'>
            URL Shortener is a project built to shorten URLs. It is
            implemented using a Base58 encoding algorithm to create
            unique identifiers for each URL. The identifiers are used to create
            a shorter URL that will redirect to the original destination.
          </p>
          <p class="lead text-left">
            <a class="btn btn-primary btn-lg right-margin" href="https://github.com/ely-alamillo/url-shortner" role="button" target='_blank'>Source on GitHub</a>
            <a class="btn btn-primary btn-lg right-margin" href="https://github.com/ely-alamillo/url-shortner#api-guide" role="button" target='_blank'>API Guide</a>
            <Link to='/' className='btn btn-lg btn-success'> Try Me</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
