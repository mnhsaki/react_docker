import React, { useEffect, useState } from 'react'

import { IProfileDetails, profileDetailsInitValues as initialValues } from '../SMSBroadCast/SettingsModel'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Button } from 'react-bootstrap'
import QuickSMSModal from './Modal/QuickSMSModal'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ContactFileAndSmsModal, { DataFromChild } from './Modal/ContactFileAndSmsModal'
import { Link } from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import Select from 'react-select'
import { useDropzone } from 'react-dropzone';

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  senderid: Yup.string().required('Sender Id is required'),
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})

const ContactFileSMS: React.FC = () => {
  const [receivedData, setReceivedData] = useState<string | null>(null);

  


  
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })



  const [smsText, setSmsText] = useState('');
  const [smsTextCharacterCount, setSmsTextCharacterCount] = useState(0);
  const [noOfSMS, setNoOfSMS] = useState(1);
  const [smsTextStatndardCharacterCount, setSmsTextStandardCharacterCount] = useState(0);
  const [smsType, setSmsType] = useState(1);

  const countSMSTextCharacter = (value: string) => {
    const count = value.length;
    setSmsText(value);
    setSmsTextCharacterCount(count);

    if (/[^\u0000-\u00ff]/.test(value)) {
      setNoOfSMS(count <= 0 ? 0 : count > 70 ? Math.ceil((count - 3) / 67) : 1);
      setSmsTextStandardCharacterCount(count <= 70 ? 70 : 67);
      setSmsType(3);
    } else {
      setNoOfSMS(count <= 0 ? 0 : count > 160 ? Math.ceil((count - 7) / 153) : 1);
      setSmsTextStandardCharacterCount(count <= 160 ? 160 : 153);
      setSmsType(1);
    }
  };


  // Define the callback function to receive data from the child
  const handleDataFromChild = (data: DataFromChild) => {
    console.log("data",data);
    setSmsText(data.dataToSend);
  };

  const [selectedCommunication, setSelectedCommunication] = useState(data.communications?.email ? 'email' : 'phone');
  const [disableDateTime, setDisableDateTime] = useState(selectedCommunication === 'email');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [value, onChange] = useState(new Date());

  const handleCancel = () => {
    formik.resetForm();

  };
  const optionsforSenderID = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    document.title = 'ContactFileSMS';
  }, []);

  return (
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
          <h3 className='er m-0'>Contact File SMS <span className='form-text'>upload contacts from file</span></h3>
        </div>

        <div className='card-title m-0'>
          <Link to='/dashboard'>
            <Button variant='primary' size='sm'>
              Dashboard
            </Button>
          </Link>
        </div>

      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>

            <div className='row mb-4'>
              <label className='col-lg-4 col-form-label  fs-6'>
                <span className='required'>Select Sender ID</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <Select options={optionsforSenderID} />
                {formik.touched.senderid && formik.errors.senderid && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.senderid}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fs-6">Select Contact File</label>
              <div className="col-lg-8 fv-row-3">
                <section className="container">
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                  <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                  </aside>
                </section>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label  fs-6'>Select SMS Type</label>

              <div className='col-lg-8 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='radio'
                      defaultChecked={data.communications?.email}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: !data.communications?.email,
                            phone: data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className=' ps-2 fs-6'>Text</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='radio'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className=' ps-2 fs-6'>UniCode</span>
                  </label>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required  fs-6'>Enter Sms Content</label>
              <div className='col-lg-8 fv-row-3'>
                <textarea
                
                  className='form-control form-control-lg form-control-solid'
                  placeholder='SMS Content'
                  rows={5}
                  style={{ resize: 'vertical', fontSize: '1.0rem' }}
                  value={smsText}
                  onChange={(e) => {
                    formik.handleChange(e);
                    countSMSTextCharacter(e.target.value);
                  }}
                ></textarea>
                <div className='form-text'>
                  {smsTextCharacterCount} Characters | {noOfSMS} SMS | {smsTextStatndardCharacterCount} Char/SMS{' '}
                  <span>
                    <button
                      style={{ borderRadius: 5, border: 'light' }}
                      type='button'
                      className='custom-sm-btn'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_1'
                    >
                      Insert SMS Template
                    </button>
                  </span>
                  |
                </div>

              </div>
            </div>
            <ContactFileAndSmsModal onDataSend={handleDataFromChild}></ContactFileAndSmsModal>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fs-6'>Schedule SMS *</label>
              <div className='col-lg-8 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='radio'
                      defaultChecked={selectedCommunication === 'email'}
                      onChange={() => {
                        setSelectedCommunication('email');
                        setDisableDateTime(true);
                        updateData({
                          communications: {
                            email: true,
                            phone: data.communications?.phone,
                          },
                        });
                      }}
                    />
                    <span className='ps-2 fs-6'>Send Now</span>
                  </label>
                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='radio'
                      defaultChecked={selectedCommunication === 'phone'}
                      onChange={() => {
                        setSelectedCommunication('phone');
                        setDisableDateTime(false);
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: true,
                          },
                        });
                      }}
                    />
                    <span className='ps-2 fs-6'>Send Late</span>
                  </label>
                </div>
                <div className='col-lg-8'>
                  {disableDateTime ? (
                    <div className='date-time-text'>{selectedDate ? selectedDate.toLocaleString() : ''}</div>
                  ) : (
                    <div className='send-later-date-picker'>
                      <DateTimePicker
                        value={selectedDate}
                        onChange={setSelectedDate}
                        className='form-select form-select-solid form-select-lg'
                        format='d, yyyy HH:mm'
                        minDate={new Date()}
                        disableClock={true}
                        clearIcon={null}
                        calendarIcon={null}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='row mb-6'>

            </div>

          </div>


          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='button' className='btn btn-danger me-2 btn-sm' onClick={handleCancel} style={{ marginRight: '10px' }}>
              Cancel
            </button>
            <button type='submit' className='btn btn-primary btn-sm' disabled={loading}>
              {!loading && 'Submit'}
              {loading && (
                <span className='indicator-progress' style={{ display: 'block' }}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { ContactFileSMS }