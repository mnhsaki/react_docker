import React, { useEffect, useState } from 'react';
import { Button, Form, Pagination, Table, Card } from 'react-bootstrap';
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

  useEffect(() => {
    document.title = 'ContactAndGroup';
  }, []);

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-header d-flex justify-content-between align-items-center'>
        <h3 className='m-0'>Contact Group</h3>
        <div>
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
            <Card className='shadow'>
              <Card.Header>
                <div className='d-flex align-items-center'>
                 
                  <div className='flex-grow-1'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search by name'
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                      <button className='btn btn-primary' type='button'>
                        <i className='bi bi-search'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Card.Header>

              <Card.Body>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th onClick={() => handleSort('name')}>
                        Name {getSortSymbol('name')}
                      </th>
                      <th onClick={() => handleSort('position')}>
                        Position {getSortSymbol('position')}
                      </th>
                      <th onClick={() => handleSort('office')}>
                        Office {getSortSymbol('office')}
                      </th>
                      <th onClick={() => handleSort('age')}>
                        Age {getSortSymbol('age')}
                      </th>
                      <th onClick={() => handleSort('startDate')}>
                        Start date {getSortSymbol('startDate')}
                      </th>
                      <th onClick={() => handleSort('salary')}>
                        Salary {getSortSymbol('salary')}
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
                </Table>
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
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4'>
            <Card>
              <Card.Header>Create New Group</Card.Header>
              <Card.Body>
                <Form.Control type='text' placeholder='Group Name' />
                <Button variant='light' className='mt-3'>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-header d-flex justify-content-between align-items-center'>
          <h3 className='m-0'>Contact List</h3>
          <div>
            <Button variant='success' size='sm'>
            <i className="bi-plus-circle-dotted"></i> Create Contact
            </Button>{' '}
            <Button variant='primary' size='sm'>
            <i className="bi-download"></i>    Upload Contact
            </Button>
          </div>
        </div>
        <div className='card-body'>
          <div className='mb-3'>
          <Card.Header>
                <div className='d-flex align-items-center'>
                  <div className='flex-grow-1'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search by name'
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                      <button className='btn btn-primary' type='button'>
                        <i className='bi bi-search'></i>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </Card.Header>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  Name {getSortSymbol('name')}
                </th>
                <th onClick={() => handleSort('position')}>
                  Position {getSortSymbol('position')}
                </th>
                <th onClick={() => handleSort('office')}>
                  Office {getSortSymbol('office')}
                </th>
                <th onClick={() => handleSort('age')}>
                  Age {getSortSymbol('age')}
                </th>
                <th onClick={() => handleSort('startDate')}>
                  Start date {getSortSymbol('startDate')}
                </th>
                <th onClick={() => handleSort('salary')}>
                  Salary {getSortSymbol('salary')}
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
          </Table>
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
  );
};

export default ContactAndGroup;
