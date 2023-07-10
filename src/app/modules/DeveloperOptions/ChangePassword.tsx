import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
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
    <Card className='mb-5 mb-xl-10'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <h3 className='m-0'>Change Password</h3>
        <Link to='/dashboard'>
          <Button variant='primary' size='sm'>
            Dashboard
          </Button>
        </Link>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Old Password <i className="bi-key"></i></Form.Label>
            <Form.Control
              type='password'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>New Password <i className="bi-key"></i></Form.Label>
            <Form.Control
              type='password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password <i className="bi-key"></i></Form.Label>
            <Form.Control
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type='submit' variant='primary'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ChangePassword;
