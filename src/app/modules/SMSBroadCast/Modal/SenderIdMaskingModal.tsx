import React, { useState } from 'react';
import { KTSVG } from '../../../../_metronic/helpers';
import { Table, Form, Button, Tabs, Tab, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const data = [
  {
    id: 1,
    templateName: 'tem1',
    smsText: 'asdfaf #name# and #roll#',
    user: 'admin'
  }
];
const SenderIdMaskingModal = () => {
  const [selectedDropdownItem, setSelectedDropdownItem] = useState<string | null>('Banglalink');

  const handleDropdownSelect = (eventKey: string | null) => {
    if (eventKey) {
      setSelectedDropdownItem(eventKey);
    }
  };

  const [selectedDropdownItem2, setSelectedDropdownItem2] = useState<string | null>('Route');

  const handleDropdownSelect2 = (eventKey: string | null) => {
    if (eventKey) {
      setSelectedDropdownItem2(eventKey);
    }
  };

  return (
    <div className="modal fade" tabIndex={-1} id="kt_modal_1">
      <div className="modal-dialog modal-lg"> {/* Increased modal size */}
        <div className="modal-content">
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Masking">
              <div className="border p-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Sender Id</Form.Label>
                  <FormControl type="Name" placeholder="Enter Branded sender Id" />
                </Form.Group>
                <div>
                  <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <InputGroup.Text>88013</InputGroup.Text>
                    <InputGroup.Text><DropdownButton
                      variant="outline-secondary"
                      title={selectedDropdownItem}
                      id="input-group-dropdown-1"
                      onSelect={handleDropdownSelect}
                    >
                      <Dropdown.Item eventKey="Banglalink">Banglalink</Dropdown.Item>
                      <Dropdown.Item eventKey="Robi/Airtel">Robi/Airtel</Dropdown.Item>
                      <Dropdown.Item eventKey="Gp">Gp</Dropdown.Item>
                      <Dropdown.Item eventKey="TelitalkOld">TelitalkOld</Dropdown.Item>
                      <Dropdown.Item eventKey="Telitalk">Telitalk</Dropdown.Item>
                    </DropdownButton></InputGroup.Text>
                    
                    <Form.Control
                      placeholder="Branded name 88013 prefix"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="d-flex justify-content-end"> {/* Right-aligned buttons */}
                <Button variant="danger" className="me-2">Cancel</Button>
                <Button variant="success">Save</Button>
              </div>

              </div>
              
            </Tab>
            <Tab eventKey={2} title="NonMasking">
              <div className="border p-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Sender Id</Form.Label>
                  <InputGroup>
                    <FormControl type="Name" placeholder="Enter Branded sender Id" />
                    <InputGroup.Text><DropdownButton
                      variant="outline-secondary"
                      title={selectedDropdownItem2}
                      id="input-group-dropdown-2"
                      onSelect={handleDropdownSelect2}
                    >
                      <Dropdown.Item eventKey="Banglalink">Banglalink</Dropdown.Item>
                      <Dropdown.Item eventKey="Robi/Airtel">Robi/Airtel</Dropdown.Item>
                      <Dropdown.Item eventKey="Gp">Gp</Dropdown.Item>
                      <Dropdown.Item eventKey="TelitalkOld">TelitalkOld</Dropdown.Item>
                      <Dropdown.Item eventKey="Telitalk">Telitalk</Dropdown.Item>
                    </DropdownButton></InputGroup.Text>
                    
                  </InputGroup>
                </Form.Group>
                <div className="d-flex justify-content-end"> {/* Right-aligned buttons */}
                <Button variant="danger" className="me-2">Cancel</Button>
                <Button variant="success">Save</Button>
              </div>
              </div>
              
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SenderIdMaskingModal;
