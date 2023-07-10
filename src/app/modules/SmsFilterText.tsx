import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SmsFilterText = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      // Add your data rows here
      // Example:
      {
        name: 'John Doe',
        position: 'Manager',
        office: 'New York',
        age: '35',
        date: '2022/01/01',
        salary: '$100,000'
      },
      // ...
    ]
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.rows.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.rows.length / itemsPerPage);

  useEffect(() => {
    document.title = 'SmsFilterText';
  }, []);


  return (
    <div>
      <div className='card mb-5 mb-xl-10'>
        <div>
          <MDBDataTable
            striped
            bordered
            small
            data={{ columns: data.columns, rows: currentItems }}
          />
        </div>
      </div>

      
    </div>
  );
}

export default SmsFilterText;
