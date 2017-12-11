import './ErrorPage.css';
import { Link } from 'react-router-dom';
const React = require('react');



const ErrorPage = () => {
  return (
    <div className='error-container'>
      <h1 className='error-404'>404</h1>
      <p className='return'>Take me back to <Link  className='' to='/'>Home</Link></p>
    </div>

  );
};
export default ErrorPage;
