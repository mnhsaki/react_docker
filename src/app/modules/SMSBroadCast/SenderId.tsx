import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SenderIdMaskingModal from './Modal/SenderIdMaskingModal'
import { MDBDataTable } from 'mdbreact'


const SenderId = () => {

  const data = {
    columns: [
      {
        label: '#',
        field: 'sl',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Sender',
        field: 'sl',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Type',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Date',
        field: 'threshold',
        sort: 'asc',
        width: 150
      },
      {
        label: 'User',
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
        name: 'Branded',
        threshold: '20000',
        action: <Button variant="warning" 
        size='sm'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_1'><i className="fas fa-edit"> <SenderIdMaskingModal /></i></Button>
        
      }
     
      
    ]
  };

  useEffect(() => {
    document.title = 'SenderId';
  }, []);

  return (
    <div>
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
              <h3 className='er m-0'>Sender IDs<span className='form-text'></span></h3>
            </div>

            <div className='card-title m-0'>
              <Link to='/dashboard'>
                <Button variant='primary' size='sm'>
                  Dashboard
                </Button>
              </Link>

              <span style={{ marginLeft: '10px' }}></span>
              <Button
                variant='primary'
                size='sm'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_1'
              >
                Create Sender Id
              </Button>
              <SenderIdMaskingModal />

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
    </div>

  )
}

export default SenderId