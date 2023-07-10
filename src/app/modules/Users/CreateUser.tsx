import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { Link } from 'react-router-dom';

const CreateUser = () => {
  const [nidFile, setNidFile] = useState(null);
  const [tradeLicenseFile, setTradeLicenseFile] = useState(null);
  const [userType, setUserType] = useState('');

  const handleNidFileChange = (event: { target: { files: any[]; }; }) => {
    const file = event.target.files[0];
    setNidFile(file);
  };

  const handleTradeLicenseFileChange = (event: { target: { files: any[]; }; }) => {
    const file = event.target.files[0];
    setTradeLicenseFile(file);
  };

  const handleUserTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserType(event.target.value);
  };

  const { acceptedFiles: contactFiles, getRootProps: getContactRootProps, getInputProps: getContactInputProps } = useDropzone();
  const { acceptedFiles: licenseFiles, getRootProps: getLicenseRootProps, getInputProps: getLicenseInputProps } = useDropzone();

  const contactFileItems = contactFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const licenseFileItems = licenseFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const options = [
    { value: 'one', label: 'Option One' },
    { value: 'two', label: 'Option Two' },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    document.title = 'CreateUser';
  }, []);

  return (
    <div>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-header border-0 cursor-pointer d-flex justify-content-between'>
          <div className='card-title m-0'>
            <h3 className='er m-0'>
              Create New Users
              <span className='form-text'>(Login ID and Password will be auto-generated)</span>
            </h3>
          </div>
          <div className='card-title m-0'>
            <Link to='/dashboard'>
              <Button variant='primary' size='sm'>
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <div className='card-body'>
              <div className='mb-3'>
                <label className='form-label'>User Type</label>
                <select
                  className='form-control'
                  value={userType}
                  onChange={handleUserTypeChange}
                  style={{ backgroundColor: 'transparent' }} // Remove background color
                >
                  <option value=''>Select user type</option>
                  <option value='admin'>Admin</option>
                  <option value='manager'>Manager</option>
                  <option value='employee'>Employee</option>
                </select>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter name'
                  onChange={() => {}}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter email'
                  onChange={() => {}}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Contact Number</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter contact number'
                  onChange={() => {}}
                />
              </div>
              <div className='row mb-6'>
                <div className='col-lg-4'>
                  <label className='col-form-label required fs-6'>Select Sender File</label>
                  <div {...getContactRootProps({ className: 'dropzone' })}>
                    <input {...getContactInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                  <aside>
                    <h4>Files</h4>
                    <ul>{contactFileItems}</ul>
                  </aside>
                </div>
                <div className='col-lg-4'>
                  <label className='col-form-label required fs-6'>Upload Trade License File</label>
                  <div {...getLicenseRootProps({ className: 'dropzone' })}>
                    <input {...getLicenseInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                  <aside>
                    <h4>Files</h4>
                    <ul>{licenseFileItems}</ul>
                  </aside>
                </div>
              </div>
              <Button as='input' type='button' value='Create' />{' '}
            </div>
          </div>
          <div className='col-6'>
            <div className='card-body'>
              <div className='row mb-6'>
                <span className='er m-0'>Select Sender ID</span>
                <div className="d-flex p-2 bg-secondary text-white">
                  <DualListBox
                    options={options}
                    selected={selected}
                    onChange={(value: string[]) => setSelected(value)}
                    canFilter
                    icons={{
                      moveLeft: <>&lt;</>,
                      moveAllLeft: <>&#8810;</>,
                      moveRight: <>&gt;</>,
                      moveAllRight: <>&#8811;</>,
                    }}
                    showOrderButtons={false}
                    showHeaderLabels={false}
                    // style={{ backgroundColor: 'white' }} // Set background color to white
                  />

                </div>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Margin Type</label>
                <select
                  className='form-control'
                  value={userType}
                  onChange={handleUserTypeChange}
                  style={{ backgroundColor: 'transparent' }} // Remove background color
                >
                  <option value=''>Select margin type</option>
                  <option value='admin'>Admin</option>
                  <option value='manager'>Manager</option>
                  <option value='employee'>Employee</option>
                </select>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Profit Margin (Tk)</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Profit Per'
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
