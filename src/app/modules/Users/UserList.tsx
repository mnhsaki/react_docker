import React, { useEffect, useState } from 'react';
import { Table, Pagination, Form, Row, Col } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([
    {
      id: 2,
      userName: 'demo',
      type: 'Reseller',
      name: 'Intelligent Automation Technology Limited',
      balance: 60477518.67,
      status: 'A',
      email: 'mhasan@iatlbd.com',
      kycForm: '',
      contactNo: '01939900090',
      lastRechargeDate: '2022-01-23 18:22:28',
    },
    {
      id: 4,
      userName: 'admin',
      type: 'Reseller',
      name: 'adaAdmin',
      balance: 29976176.38,
      status: 'A',
      email: 'elias@smart-voice.biz',
      kycForm: '',
      contactNo: '01973162552',
      lastRechargeDate: '2022-02-16 12:03:33',
    },
    {
      id: 5,
      userName: 'M00001',
      type: 'Client',
      name: 'adaClient1',
      balance: 497.6,
      status: 'A',
      email: 'elias@smart-voice.biz',
      kycForm: '',
      contactNo: '01973162552',
      lastRechargeDate: '2022-01-04 11:03:15',
    },
    {
      id: 6,
      userName: 'M00002',
      type: 'Client',
      name: 'adaClient',
      balance: 450,
      status: 'A',
      email: 'a@b.com',
      kycForm: '',
      contactNo: '123456789',
      lastRechargeDate: '2022-01-03 16:21:05',
    },
    {
      id: 7,
      userName: 'M00003',
      type: 'Client',
      name: 'adaClient2',
      balance: 3000,
      status: 'A',
      email: 'a@b.com',
      kycForm: '',
      contactNo: '01973162552',
      lastRechargeDate: '2022-01-04 11:20:31',
    },
    {
      id: 8,
      userName: 'M00004',
      type: 'Client',
      name: 'charpatro',
      balance: 4996.7,
      status: 'A',
      email: 'elias@smart-voice.biz',
      kycForm: '',
      contactNo: '01973162552',
      lastRechargeDate: '2022-01-11 11:40:54',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  // Sorting
  const handleSort = (column: React.SetStateAction<string>) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedItems = sortColumn
    ? [...currentItems].sort((a, b) => {
       
        return 0;
      })
    : currentItems;

  // Searching
  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredItems = searchQuery
    ? sortedItems.filter(
        (item) =>
          item.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.contactNo.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sortedItems;

    useEffect(() => {
      document.title = 'UserList';
    }, []);
  

  return (
    <div>
      <h3>User List</h3>

      <Row className="my-3">
        <Col sm={6}>
          <Form.Control
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </Col>
        <Col sm={6} className="d-flex justify-content-end">
          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => handleSort('userName')}>User Name</th>
            <th onClick={() => handleSort('type')}>Type</th>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('balance')}>Balance</th>
            <th onClick={() => handleSort('status')}>Status</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th>KYC Form</th>
            <th onClick={() => handleSort('contactNo')}>Contact No</th>
            <th onClick={() => handleSort('lastRechargeDate')}>
              Last Recharge Date
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.type}</td>
              <td>{user.name}</td>
              <td>{user.balance}</td>
              <td>{user.status}</td>
              <td>{user.email}</td>
              <td>{user.kycForm}</td>
              <td>{user.contactNo}</td>
              <td>{user.lastRechargeDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
