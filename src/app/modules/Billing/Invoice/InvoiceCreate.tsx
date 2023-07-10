import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InvoiceCreate = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectClick = () => {
    // Handle the select button click here
    console.log('Selected option:', selectedOption);
  };

  useEffect(() => {
    document.title = 'InvoiceCreate';
  }, []);

  return (
    <div>
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0 d-flex justify-content-between">
          <div className="card-title">
            <h3 className="er mb-0">Invoice Create</h3>
          </div>
          <div className="card-title">
            <Link to="/dashboard">
              <Button variant="primary" size="sm">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-sm-6">
              <label htmlFor="entriesSelect">Select Users</label>
              <select
                id="entriesSelect"
                className="form-control"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option>---Select options---</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              entries
            </div>
           
          </div>
          <div className="col-sm-6">
              <Button
                variant="primary"
                size="sm"
                onClick={handleSelectClick}
                disabled={!selectedOption}
              >
                Select
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCreate;
