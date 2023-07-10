import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SMSTodayAPI = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = {
    columns: [
      {
        label: 'SMS ID',
        field: 'smsId',
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
        label: 'MSISDN',
        field: 'msisdn',
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
        label: 'SMS Part',
        field: 'smsPart',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: 'SMS Cost',
        field: 'smsCost',
        sort: 'asc',
        width: 100
      },
      {
        label: 'User Name',
        field: 'userName',
        sort: 'asc',
        width: 100
      },
      {
        label: 'SMS Text',
        field: 'smsText',
        sort: 'asc',
        width: 200
      },
      {
        label: 'GW Res',
        field: 'gwRes',
        sort: 'asc',
        width: 100
      },
    ],
    rows: [
      // Add your data rows here
      // Example:
      {
        smsId: '1',
        date: '2023-06-21',
        msisdn: '123456789',
        sender: 'Company',
        smsPart: 'Part A',
        status: 'Active',
        smsCost: '$0.05',
        userName: 'John Doe',
        smsText: 'This is the message text.',
        gwRes: ''
      },
      // ...
    ]
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.rows.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.rows.length / itemsPerPage);

  useEffect(() => {
    document.title = 'SMSTodayAPI';
  }, []);

  return (
    <div>
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0 d-flex justify-content-between">
          <div className="card-title">
            <h3 className="er mb-0">SMS Today -By API Call</h3>
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
              <select id="entriesSelect" className="form-control">
                <option>---Select options---</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              entries
            </div>
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

export default SMSTodayAPI;
