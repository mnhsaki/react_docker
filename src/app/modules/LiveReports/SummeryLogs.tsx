import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SummaryLogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Task',
        field: 'task',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Sender',
        field: 'sender',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Send Status',
        field: 'sendStatus',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Sms Count',
        field: 'smsCount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Sms Hit',
        field: 'smsHit',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      // Add your data rows here
      // Example:
      {
        id: '1',
        task: 'Task 1',
        sender: 'Sender 1',
        name: 'Name 1',
        sendStatus: 'Status 1',
        smsCount: 'Count 1',
        smsHit: 'Hit 1'
      },
      {
        id: '2',
        task: 'Task 2',
        sender: 'Sender 2',
        name: 'Name 2',
        sendStatus: 'Status 2',
        smsCount: 'Count 2',
        smsHit: 'Hit 2'
      },
      // ...
    ]
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.rows.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.rows.length / itemsPerPage);

  useEffect(() => {
    document.title = 'SummeryLogs';
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

export default SummaryLogs;
