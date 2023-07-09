import React from 'react'
import { KTSVG } from '../../../../_metronic/helpers'
import { Table, Form, Button } from 'react-bootstrap';
const data = [
  {
    id: 1,
    templateName: 'tem1',
    smsText: 'asdfaf #name# and #roll#',
    user: 'admin'
  }
];

const QuickSMSModal = () => {
  return (
  <div className="modal fade" tabIndex={-1} id="kt_modal_1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add New Message Template</h5>
        <div
          className="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <KTSVG
            path="/media/icons/duotune/arrows/arr061.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
      </div>
      <div className="modal-body">
      <div>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Template Name</th>
            <th>SMS Text</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td><button type="button" className="btn btn-primary btn-sm btn-xs">Use</button></td>
              <td>{item.templateName}</td>
              <td>{item.smsText}</td>
              <td>{item.user}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p>Showing 1 to {data.length} of {data.length} entries</p>
    </div>
      </div>
     
    </div>
  </div>
</div>
  )
}

export default QuickSMSModal