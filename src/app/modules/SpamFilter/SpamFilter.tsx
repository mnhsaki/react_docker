import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddNewFilterModal from './AddNewFilterModal';

interface DataEntry {
  id: number;
  name: string;
  age: number;
}

const SpamFilter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<keyof DataEntry>('id');

  const data: DataEntry[] = [

  ];

  const totalPages = Math.ceil(data.length / pageSize);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    document.title = 'SpamFilter';
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  const handleSortChange = (column: keyof DataEntry) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
  if(sortOrder === 'asc') {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    } else {
      if (a[sortBy] < b[sortBy]) return 1;
      if (a[sortBy] > b[sortBy]) return -1;
      return 0;
    }
  });

  return (
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
            <h3 className='er m-0'>Spam Filter <span className='form-text'></span></h3>
          </div>

          <div className='card-title m-0'>
            <Link to='/dashboard'>
              <Button variant='primary' size='sm'>
                Dashboard
              </Button>
            </Link>

            <span style={{ marginLeft: '10px' }}></span> {/* Add gap between buttons */}

            <Button
              variant='primary'
              size='sm'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_1'
            >
              Add New Filter
            </Button>
            <AddNewFilterModal />
          </div>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Button
                variant="link"
                onClick={() => handleSortChange('id')}
              >
                ID {sortBy === 'id' && <span>&#x25BE;</span>}
              </Button>
            </th>
            <th>
              <Button
                variant="link"
                onClick={() => handleSortChange('name')}
              >
                Name {sortBy === 'name' && <span>&#x25BE;</span>}
              </Button>
            </th>
            <th>
              <Button
                variant="link"
                onClick={() => handleSortChange('age')}
              >
                Age {sortBy === 'age' && <span>&#x25BE;</span>}
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            variant={currentPage === index + 1 ? 'primary' : 'light'}
            size='sm'
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SpamFilter;
