import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BalanceThreshold = () => {
  const data = {
    columns: [
      {
        label: 'SL',
        field: 'sl',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Threshold',
        field: 'threshold',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        sl: '1',
        name: 'Teletalk',
        threshold: '20000',
        action: <Button variant="warning" size="sm"><i className="fas fa-edit"></i></Button>
      },
      {
        sl: '2',
        name: 'GP',
        threshold: '2000000',
        action: <Button variant="warning" size="sm"><i className="fas fa-edit"></i></Button>
      }
    ]
  };

  useEffect(() => {
    document.title = 'BalanceThreshold';
  }, []);

  return (
    <div>
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0 d-flex justify-content-between">
          <div className="card-title">
            <h3 className="er mb-0">Balance Threshold</h3>
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
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default BalanceThreshold;
