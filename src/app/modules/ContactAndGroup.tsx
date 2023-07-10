import React, { useEffect, useState } from 'react';
import { Button, Form, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IDataItem {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}

const ContactAndGroup = () => {
  const initialData: IDataItem[] = [
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: '$320,800' },
    { name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: '$170,750' },
  ];

  const [data, setData] = useState<IDataItem[]>(initialData);
  const [sortConfig, setSortConfig] = useState<{ key: keyof IDataItem | null; order: 'asc' | 'desc' | null }>({ key: null, order: null });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const handleSort = (key: keyof IDataItem) => {
    let order: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.order === 'asc') {
      order = 'desc';
    }
    setSortConfig({ key, order });
    sortData(key, order);
  };

  const sortData = (key: keyof IDataItem, order: 'asc' | 'desc') => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[key].toString();
      const bValue = b[key].toString();
      return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
    setData(sortedData);
  };

  const getSortSymbol = (key: keyof IDataItem) => {
    if (sortConfig.key === key) {
      return sortConfig.order === 'asc' ? <>&uarr;</> : <>&darr;</>;
    }
    return null;
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
 const optionsforSenderID = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  useEffect(() => {
    document.title = 'ContactAndGroup';
  }, []);

  return (
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
          <h3 className='er m-0'>Contact Group <span className='form-text'></span></h3>
        </div>

        <div className='card-title m-0'>
          <Link to='/dashboard'>
            <Button variant='primary' size='sm'>
              Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <div className='card-body'>
        <div className='row'>
          <div className='col-8'>
            <div className='card card-custom shadow'>
              <div className='card-header'>
                <span>Search</span>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search by name'
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <table className='table table-hover table-rounded table-striped border gy-7 gs-7'>
                  <thead>
                    <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                      <th onClick={() => handleSort('name')}>
                        Name
                        {getSortSymbol('name')}
                      </th>
                      <th onClick={() => handleSort('position')}>
                        Position
                        {getSortSymbol('position')}
                      </th>
                      <th onClick={() => handleSort('office')}>
                        Office
                        {getSortSymbol('office')}
                      </th>
                      <th onClick={() => handleSort('age')}>
                        Age
                        {getSortSymbol('age')}
                      </th>
                      <th onClick={() => handleSort('startDate')}>
                        Start date
                        {getSortSymbol('startDate')}
                      </th>
                      <th onClick={() => handleSort('salary')}>
                        Salary
                        {getSortSymbol('salary')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>{item.age}</td>
                        <td>{item.startDate}</td>
                        <td>{item.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination>
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  {Array.from(Array(totalPages), (e, i) => {
                    const pageNumber = i + 1;
                    return (
                      <Pagination.Item
                        key={pageNumber}
                        active={pageNumber === currentPage}
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </Pagination.Item>
                    );
                  })}
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>Create New Group</div>
            <div className='card-body'>
              <Form.Control type='text' placeholder='Group Name' />
              <Button variant='light' className='mt-3'>
                Submit
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
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
            <h3 className='er m-0'>Contact List <span className='form-text'></span></h3>
          </div>

          <div className='card-title m-0'>
            <div>
              <Button variant="primary" size="sm">
                Create Contact
              </Button>{' '}
              <Button variant="info" size="sm">
                Upload Contact
              </Button>
            </div>
          </div>
          <div className='card card-custom shadow'>
            <div className='card-header'>
              <span>Search</span>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search by name'
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <table className='table table-hover table-rounded table-striped border gy-7 gs-7'>
              <thead>
                <tr>
                  <th onClick={() => handleSort('name')}>
                    Name
                    {getSortSymbol('name')}
                  </th>
                  <th onClick={() => handleSort('position')}>
                    Position
                    {getSortSymbol('position')}
                  </th>
                  <th onClick={() => handleSort('office')}>
                    Office
                    {getSortSymbol('office')}
                  </th>
                  <th onClick={() => handleSort('age')}>
                    Age
                    {getSortSymbol('age')}
                  </th>
                  <th onClick={() => handleSort('startDate')}>
                    Start date
                    {getSortSymbol('startDate')}
                  </th>
                  <th onClick={() => handleSort('salary')}>
                    Salary
                    {getSortSymbol('salary')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>{item.office}</td>
                    <td>{item.age}</td>
                    <td>{item.startDate}</td>
                    <td>{item.salary}</td>
                  </tr>
                ))}
              </tbody>
              </table>
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from(Array(totalPages), (e, i) => {
                  const pageNumber = i + 1;
                  return (
                    <Pagination.Item
                      key={pageNumber}
                      active={pageNumber === currentPage}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </Pagination.Item>
                  );
                })}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactAndGroup;
