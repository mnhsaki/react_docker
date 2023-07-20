import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CSVLink } from 'react-csv';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const RechargeFrom = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('2023-06-22');
  const [endDate, setEndDate] = useState('2023-06-22');
  const itemsPerPage = 10;
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#F5F5F5',
      padding: '20px'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    card: {
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
      padding: '20px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0
    },
    actionButtons: {
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      marginLeft: '10px'
    },
    formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px' // Adjust the margin-bottom value as needed
  },
  formLabel: {
    marginRight: '10px'
  },
    tableContainer: {
      marginTop: '20px'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px'
    },
    textCopied: {
      color: '#28A745',
      marginLeft: '10px'
    }
  });

  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'User',
        field: 'user',
        sort: 'asc',
        width: 100
      },
      {
        label: 'SMS Part',
        field: 'smsPart',
        sort: 'asc',
        width: 100
      },
      {
        label: 'SMS Type',
        field: 'smsType',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Sender',
        field: 'sender',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Count',
        field: 'count',
        sort: 'asc',
        width: 75
      },
      {
        label: 'SMS Text',
        field: 'smsText',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      // Add your data rows here
      {
        id: '1',
        date: 'No data available in table',
        user: 'Showing 0 to 0 of 0 entries',
        smsPart: '',
        smsType: '',
        sender: '',
        count: '',
        smsText: ''
      }
    ]
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.rows.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.rows.length / itemsPerPage);

// -------------------------------------date time--------------------------------------//
  

  const handleDateChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else if (name === 'endDate') {
      setEndDate(value);
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setStartDate(getCurrentDate());
    setEndDate(getCurrentDate());
  }, []);

  const handleSearch = () => {
    console.log('Search clicked!');
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  // -------------------------------------date time--------------------------------------//


  const handleCopy = () => {
    const tableData = currentItems.map((item) => Object.values(item).join('\t')).join('\n');
    navigator.clipboard.writeText(tableData);
    setShowCopiedMessage(true);
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 2000); 
  };

  useEffect(() => {
    document.title = 'RechargeFrom';
  }, []);

  const handleExcel = (currentItems: { id: string; date: string; user: string; smsPart: string; smsType: string; sender: string; count: string; smsText: string; }[]) => {
    // Implement your Excel logic here
  };

  const renderPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>PDF Content</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div >
      <div className="card mb-5 mb-xl-10" style={styles.card}>
        <div className="card-header border-0" style={styles.header}>
          <div className="card-title">
            <h3 className="er mb-0" style={styles.title}>
              Transaction History: Recharge From
            </h3>
          </div>
          <div className="card-title" style={styles.actionButtons}>
            <Link to="/dashboard">
              <Button variant="primary" size="sm">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
     
        <div className="card-body">
          <div role="group" className="d-flex justify-content-center align-items-center mb-2 bg-secondary text-white border border-light">
            {/* <Form.Group controlId="startDate" style={styles.formGroup}>
              <Form.Label style={styles.formLabel}><span className="input-group-text" id="basic-addon1">From</span></Form.Label>
              <Form.Control type="date" name="startDate" value={startDate} aria-describedby="basic-addon1" onChange={handleDateChange} />

            </Form.Group>
            <Form.Group controlId="endDate" className="d-flex align-items-center" style={styles.formGroup}>
              <Form.Label style={styles.formLabel}><span className="input-group-text" id="basic-addon1">To</span></Form.Label>
              <Form.Control type="date" name="endDate" value={endDate} onChange={handleDateChange} />
            </Form.Group> */}

            <div className='w-75 p-3 d-flex flex-row'>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">From</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className='w-50 p-3'
                  type="date" name="startDate" value={startDate} onChange={handleDateChange}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">To</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className='w-50 p-3'
                  type="date" name="endDate" value={endDate} onChange={handleDateChange}
                />
              </InputGroup>
              <div className='button'>
                <Button variant="primary" size="sm" onClick={handleSearch} style={styles.button}>
                  Search
                </Button>
              </div>
            </div>




          </div>

          <div className="btn-group  bg-secondary" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={handleCopy}>
              Copy
            </button>
            {showCopiedMessage && (
              <div className="text-copied" style={styles.textCopied}>
                Text Copied!
              </div>
            )}
            <CSVLink data={currentItems} filename="recharge_data.csv">
              <button type="button" className="btn btn-outline-primary btn-sm">
                CSV
              </button>
            </CSVLink>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleExcel(currentItems)}
            >
              Excel
            </button>
            <PDFDownloadLink document={renderPDF()} fileName="recharge_data.pdf">
              <button type="button" className="btn btn-outline-primary btn-sm">
                PDF
              </button>
            </PDFDownloadLink>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleExcel(currentItems)}
            >
              Print
            </button>
          </div>



          <div style={styles.tableContainer}>
            <MDBDataTable striped bordered small data={{ columns: data.columns, rows: currentItems }} />
          </div>
        </div>
        <div className="card-footer d-flex justify-content-end" style={styles.pagination}>
          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default RechargeFrom;
