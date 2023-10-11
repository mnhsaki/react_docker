import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MNOBalanceNotifyList = () => {
  const data = {
    columns: [
      {
        label: 'SL',
        field: 'sl',
        sort: 'asc',
        width: 50
      },
      {
        label: 'MSISDN',
        field: 'msisdn',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Gmail',
        field: 'gmail',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Action',
        field: 'action',
        width: 100
      }
    ],
    rows: [
      {
        sl: '1',
        msisdn: '8801789991332',
        gmail: '',
        action: (
          <>
            <Button variant="warning" size="sm" className="mr-2">
              <i className="fas fa-edit"></i>
            </Button>
            
            <Button variant="danger" size="sm">
              <i className="fas fa-trash"></i>
            </Button>
          </>
        )
      },
      {
        sl: '2',
        msisdn: '8801553084509',
        gmail: '',
        action: (
          <>
            <Button variant="warning" size="sm" className="mr-2">
              <i className="fas fa-edit"></i>
            </Button>
            <Button variant="danger" size="sm">
              <i className="fas fa-trash"></i>
            </Button>
          </>
        )
      },
      {
        sl: '3',
        msisdn: '8801841438144',
        gmail: '',
        action: (
          <>
            <Button variant="warning" size="sm" className="mr-2">
              <i className="fas fa-edit"></i>
            </Button>
            <Button variant="danger" size="sm">
              <i className="fas fa-trash"></i>
            </Button>
          </>
        )
      },
      {
        sl: '4',
        msisdn: '8801973162552',
        gmail: '',
        action: (
          <>
            <Button variant="warning" size="sm" className="mr-2">
              <i className="fas fa-edit"></i>
            </Button>
            <Button variant="danger" size="sm">
              <i className="fas fa-trash"></i>
            </Button>
          </>
        )
      },
      {
        sl: '5',
        msisdn: '8801939900090',
        gmail: '',
        action: (
          <>
            <Button variant="warning" size="sm" className="mr-2">
              <i className="fas fa-edit"></i>
            </Button>
            <Button variant="danger" size="sm">
              <i className="fas fa-trash"></i>
            </Button>
          </>
        )
      }
    ]
  };

  useEffect(() => {
    document.title = 'MNOBalanceNotifyList';
  }, []);

  return (
    <div>
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0 d-flex justify-content-between">
          <div className="card-title">
            <h3 className="er mb-0">MNO Balance Notify List</h3>
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

export default MNOBalanceNotifyList;
