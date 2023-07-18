import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination, Form } from 'react-bootstrap';
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
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        width: 50,
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'User',
        field: 'user',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'SMS Part',
        field: 'smsPart',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'SMS Type',
        field: 'smsType',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Sender',
        field: 'sender',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Count',
        field: 'count',
        sort: 'asc',
        width: 75,
      },
      {
        label: 'SMS Text',
        field: 'smsText',
        sort: 'asc',
        width: 200,
      },
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
        smsText: '',
      },
    ],
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.rows.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.rows.length / itemsPerPage);

  const handleDateChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else if (name === 'endDate') {
      setEndDate(value);
    }
  };

  const handleSearch = () => {
    console.log('Search clicked!');
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  const handleCopy = () => {
    const tableData = currentItems.map((item) => Object.values(item).join('\t')).join('\n');
    navigator.clipboard.writeText(tableData);
    setShowCopiedMessage(true);
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 2000); // Adjust the duration as needed
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
    <div>
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0 d-flex justify-content-between">
          <div className="card-title">
            <h3 className="er mb-0">Transaction History: Recharge From</h3>
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
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group controlId="startDate">
              <Form.Label>From</Form.Label>
              <Form.Control type="date" name="startDate" value={startDate} onChange={handleDateChange} />
            </Form.Group>
            <Form.Group controlId="endDate" className="d-flex align-items-center">
              <Form.Label>To</Form.Label>
              <Form.Control type="date" name="endDate" value={endDate} onChange={handleDateChange} />
              <Button variant="primary" size="sm" onClick={handleSearch}>
                Search
              </Button>
              <CopyToClipboard text="Your text to copy">
                <Button variant="primary" size="sm" onClick={handleCopy}>
                  Copy Text
                </Button>
              </CopyToClipboard>
              {showCopiedMessage && <div className="text-copied">Text Copied!</div>}
              <CSVLink data={currentItems} filename="recharge_data.csv">
                <Button variant="primary" size="sm">
                  CSV
                </Button>
              </CSVLink>
              <Button variant="primary" size="sm" onClick={() => handleExcel(currentItems)}>
                Excel
              </Button>
              <PDFDownloadLink document={renderPDF()} fileName="recharge_data.pdf">
                <Button variant="primary" size="sm">
                  PDF
                </Button>
              </PDFDownloadLink>
            </Form.Group>
          </div>
          <MDBDataTable striped bordered small data={{ columns: data.columns, rows: currentItems }} />
        </div>
        <div className="card-footer d-flex justify-content-end">
          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
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
