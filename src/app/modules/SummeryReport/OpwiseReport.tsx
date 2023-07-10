import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Pagination, Form } from 'react-bootstrap';

const OpwiseReport = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reportType, setReportType] = useState('daily');
    const itemsPerPage = 10;

    const data = {
        columns: [
            {
                label: 'Date',
                field: 'date',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Status',
                field: 'status',
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
                label: 'Hit',
                field: 'hit',
                sort: 'asc',
                width: 75
            },
            {
                label: 'Channel',
                field: 'channel',
                sort: 'asc',
                width: 100
            },
        ],
        rows: [
            // Add your data rows here
            // Example:
            {
                date: '2023-07-03',
                name: 'Operator A',
                status: 'Active',
                count: 5,
                hit: 10,
                channel: 'Email'
            },
            // ...
        ]
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

    const handleReportTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setReportType(event.target.value);
    };

    const handleSearch = () => {
        console.log('Search clicked!');
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Report Type:', reportType);
    };

    useEffect(() => {
        document.title = 'OpwiseReport';
      }, []);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h3 className="card-title">Operator Wise Summary Report</h3>
                    <div>
                        <Button variant="primary" size="sm" className="me-2">
                            Download
                        </Button>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row border border-light p-3 mb-2 bg-secondary text-white">
                        <div className="col-lg-4">
                            <Form.Group controlId="reportType">
                                <Form.Label>Type</Form.Label>
                                <Form.Control as="select" name="reportType" value={reportType} onChange={handleReportTypeChange} className="border">
                                    <option value="daily">Daily</option>
                                    <option value="monthly">Monthly</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className="col-lg-4">
                            <Form.Group controlId="startDate">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" name="startDate" value={startDate} onChange={handleDateChange} className="border" />
                            </Form.Group>
                        </div>
                        <div className="col-lg-4">
                            <Form.Group controlId="endDate">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" name="endDate" value={endDate} onChange={handleDateChange} className="border" />
                            </Form.Group>
                            
                        </div>
                        <div className="col-lg-12 d-flex justify-content-end mt-3">
                        <Button variant="primary" size="sm" onClick={handleSearch}>
                            <span id="boot-icon" className="bi bi-search"></span> Search
                            </Button>
                        </div>
                    </div>



                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={{ columns: data.columns, rows: currentItems }}
                    />
                    <div className="d-flex justify-content-end mt-3">
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
        </div>
    );
};

export default OpwiseReport;
