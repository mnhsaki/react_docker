import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Add your logic for handling the form submission here
    console.log('Submitted!');
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);

    // Clear the form fields
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle=''
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='er m-0'>
            Change Password <span className='form-text'></span>
          </h3>
        </div>

        <div className='card-title m-0'>
          <Link to='/dashboard'>
            <Button variant='primary' size='sm'>
              Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <form>
          
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Old Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">New Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
