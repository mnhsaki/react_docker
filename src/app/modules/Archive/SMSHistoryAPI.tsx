import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SMSHistoryAPI = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const itemsPerPage = 5;

  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'User',
        field: 'user',
        sort: 'asc',
        width: 100
      },
      {
        label: 'SMS Part',
        field: 'smsPart',
        sort: 'asc',
        width: 100
      },
      {
        label: 'SMS Type',
        field: 'smsType',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Sender',
        field: 'sender',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Count',
        field: 'count',
        sort: 'asc',
        width: 75
      },
      {
        label: 'SMS Text',
        field: 'smsText',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
      // Add your data rows here
      // Example:
      {
        id: '1',
        date: '2023-06-21',
        user: 'John Doe',
        smsPart: 'Part A',
        smsType: 'Type X',
        sender: 'Company',
        count: '10',
        smsText: 'This is the message text.'
      },
      // ...
    ]
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.rows.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.rows.length / itemsPerPage);

  const handleDateChange = (event: { target: { name: any; value: any; }; }) => {
    // Update the start and end dates based on the date pickers' values
    const { name, value } = event.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else if (name === 'endDate') {
      setEndDate(value);
    }
  };

  const handleSearch = () => {
    // Perform search based on the selected start and end dates
    console.log('Search clicked!');
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  useEffect(() => {
    document.title = 'SMSHistoryAPI';
  }, []);

  return (
    <div>
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0 d-flex justify-content-between">
          <div className="card-title">
            <h3 className="er mb-0">Price</h3>
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
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group controlId="startDate">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleDateChange}
              />
            </Form.Group>
            <Form.Group controlId="endDate" className="d-flex align-items-center">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleDateChange}
              />
              <Button variant="primary" size="sm" onClick={handleSearch}>
                Search
              </Button>
            </Form.Group>
          </div>
          <MDBDataTable
            striped
            bordered
            small
            data={{ columns: data.columns, rows: currentItems }}
          />
        </div>
        <div className="card-footer d-flex justify-content-end">
          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default SMSHistoryAPI;
