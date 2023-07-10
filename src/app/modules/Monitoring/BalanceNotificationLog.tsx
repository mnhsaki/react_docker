import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BalanceNotificationLog = () => {
  const data = {
    columns: [
      {
        label: 'SL',
        field: 'sl',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Alarm Log',
        field: 'alarmLog',
        sort: 'asc',
        width: 500
      }
    ],
    rows: [
      {
        sl: '1',
        alarmLog: 'Operator Balance Notification: GP=58345473 Time=2022-02-23 07:58:02.0; Teletalk_BK=334262 Time=2022-02-23 07:58:04.0;'
      },
      {
        sl: '2',
        alarmLog: 'Operator Balance Notification: GP=59984208 Time=2022-02-22 19:58:02.0; Teletalk_BK=336363 Time=2022-02-22 19:58:04.0;'
      },
      {
        sl: '3',
        alarmLog: 'Operator Balance Notification: GP=29151482 Time=2022-02-22 13:58:02.0; Teletalk_BK=340194 Time=2022-02-22 13:58:03.0;'
      },
      {
        sl: '4',
        alarmLog: 'Operator Balance Notification: GP=1612983 Time=2022-02-22 07:58:02.0; Teletalk_BK=342259 Time=2022-02-22 07:58:04.0;'
      },
      {
        sl: '5',
        alarmLog: 'Operator Balance Notification: GP=1908147 Time=2022-02-21 19:58:02.0; Teletalk_BK=344840 Time=2022-02-21 19:58:03.0;'
      },
      {
        sl: '6',
        alarmLog: 'Operator Balance Notification: GP=1 Time=2022-02-21 13:58:02.0; Teletalk_BK=346900 Time=2022-02-21 13:58:04.0;'
      },
      {
        sl: '7',
        alarmLog: 'Operator Balance Notification: GP=9127758 Time=2022-02-21 07:58:02.0; Teletalk_BK=362026 Time=2022-02-21 07:58:04.0;'
      },
      {
        sl: '8',
        alarmLog: 'Operator Balance Notification: GP=5485392 Time=2022-02-20 19:58:02.0; Teletalk_BK=365886 Time=2022-02-20 19:58:04.0;'
      },
      {
        sl: '9',
        alarmLog: 'Operator Balance Notification: GP=21222870 Time=2022-02-20 13:58:02.0; Teletalk_BK=377402 Time=2022-02-20 13:58:03.0;'
      },
      {
        sl: '10',
        alarmLog: 'Operator Balance Notification: GP=34646955 Time=2022-02-20 07:58:02.0; Teletalk_BK=386298 Time=2022-02-20 07:58:03.0;'
      },
      {
        sl: '11',
        alarmLog: 'Operator Balance Notification: GP=36621160 Time=2022-02-19 19:58:02.0; Teletalk_BK=388980 Time=2022-02-19 19:58:03.0;'
      },
      {
        sl: '12',
        alarmLog: 'Operator Balance Notification: GP=43431501 Time=2022-02-19 13:58:03.0; Teletalk_BK=397309 Time=2022-02-19 13:58:04.0;'
      },
      {
        sl: '13',
        alarmLog: 'Operator Balance Notification: GP=48111334 Time=2022-02-19 07:58:02.0; Teletalk_BK=401754 Time=2022-02-19 07:58:03.0;'
      },
      {
        sl: '14',
        alarmLog: 'Operator Balance Notification: GP=50025178 Time=2022-02-18 19:58:02.0; Teletalk_BK=404280 Time=2022-02-18 19:58:04.0;'
      },
      {
        sl: '15',
        alarmLog: 'Operator Balance Notification: GP=52503308 Time=2022-02-18 13:58:02.0; Teletalk_BK=407225 Time=2022-02-18 13:58:04.0;'
      }
    ]
  };

  useEffect(() => {
    document.title = 'BalanceNotificationLog';
  }, []);

  return (
    <div>
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0 d-flex justify-content-between">
          <div className="card-title">
            <h3 className="er mb-0">Balance Notification Log</h3>
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

export default BalanceNotificationLog;
