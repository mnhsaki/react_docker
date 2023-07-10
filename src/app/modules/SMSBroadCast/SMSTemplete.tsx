import React, { useEffect, useState } from 'react';
import { Table, Button, Pagination } from 'react-bootstrap';
import { IProfileDetails, profileDetailsInitValues as initialValues } from './SettingsModel';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const smsTemplates = [
  {
    id: 1,
    templateName: 'tem1',
    smsText: 'asdfaf #name# and #roll#',
    user: 'admin',
  },
  // ... additional data entries
];

const profileDetailsSchema = Yup.object().shape({
  // ... validation schema
});

const pageSizeOptions = [5, 10, 20]; // Available page size options

const SMSTemplete: React.FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues);
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate);
    setData(updatedData);
  };

  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        values.communications.email = data.communications.email;
        values.communications.phone = data.communications.phone;
        values.allowMarketing = data.allowMarketing;
        const updatedData = Object.assign(data, values);
        setData(updatedData);
      }, 1000);
    },
  });

  useEffect(() => {
    document.title = 'SMSTemplete';
  }, []);

  const [sortConfig, setSortConfig] = useState<{ key: keyof typeof smsTemplates[0]; order: 'asc' | 'desc' }>({
    key: 'id',
    order: 'asc',
  });

  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]); // Number of entries to show per page

  const handleSort = (key: keyof typeof smsTemplates[0]) => {
    let order: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.order === 'asc') {
      order = 'desc';
    }
    setSortConfig({ key, order });
  };

  const sortedTemplates = smsTemplates.sort((a, b) => {
    const aValue = a[sortConfig.key].toString();
    const bValue = b[sortConfig.key].toString();
    return sortConfig.order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  // Pagination logic
  const totalEntries = sortedTemplates.length;
  const totalPages = Math.ceil(totalEntries / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = sortedTemplates.slice(startIndex, endIndex);

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 d-flex justify-content-between align-items-center">
        <div className="card-title">
          <h3 className="er mb-0">Sms Template</h3>
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
        <div className="d-flex align-items-center mb-3">
          <span className="mr-2">Page Size:</span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(parseInt(e.target.value))}
            className="form-control form-control-sm"
            style={{ width: '70px' }}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th onClick={() => handleSort('templateName')} className="cursor-pointer">
                Template Name {sortConfig.key === 'templateName' && (sortConfig.order === 'asc' ? <>&uarr;</> : <>&darr;</>)}
              </th>
              <th onClick={() => handleSort('smsText')} className="cursor-pointer">
                SMS Text {sortConfig.key === 'smsText' && (sortConfig.order === 'asc' ? <>&uarr;</> : <>&darr;</>)}
              </th>
              <th onClick={() => handleSort('user')} className="cursor-pointer">
                User {sortConfig.key === 'user' && (sortConfig.order === 'asc' ? <>&uarr;</> : <>&darr;</>)}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((template) => (
              <tr key={template.id}>
                <td>{template.id}</td>
                <td>{template.templateName}</td>
                <td>{template.smsText}</td>
                <td>{template.user}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>
                Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of {totalEntries} entries
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
      <div className="card-footer d-flex justify-content-end">
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
  );
};

export { SMSTemplete };
