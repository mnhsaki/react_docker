import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddNewFilterModal from './AddNewFilterModal';

const SpamFilter = () => {

  const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // Add more data entries here...
  ];


  useEffect(() => {
    document.title = 'SpamFilter';
  }, []);

  return (
    <div>
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
            <h3 className='er m-0'>Spam Filter <span className='form-text'></span></h3>
          </div>

          <div className='card-title m-0'>
            <Link to='/dashboard'>
              <Button variant='primary' size='sm'>
                Dashboard
              </Button>
            </Link>

            <span style={{ marginLeft: '10px' }}></span> {/* Add gap between buttons */}

            <Button
              variant='primary'
              size='sm'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_1'
            >
              Add New Filter
            </Button>
            <AddNewFilterModal />
          </div>
        </div>
      </div>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>{entry.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>

    </div>
  );
};

export default SpamFilter
