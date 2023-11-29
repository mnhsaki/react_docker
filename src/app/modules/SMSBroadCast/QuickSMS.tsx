import React, { useEffect, useState } from 'react'

import axios from 'axios'
// import { IProfileDetails, profileDetailsInitValues  as initialValues } from '../SMSBroadCast/SettingsModel'
import { QuickSmsForm, QuickSmsFormInitValues as initialValues } from '../SMSBroadCast/SettingsModel'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Button } from 'react-bootstrap'
import QuickSMSModal from './Modal/QuickSMSModal'
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import Select from 'react-select'
import { API_BASE_URL } from '../../modules/config';
const GET_SENDER_ID = `${API_BASE_URL}/api/gw/senderid/list`
// import Select, { Option, ReactSelectProps } from "react-select";
// const {auth, logout, setCurrentUser} = useAuth()

console.log("API_BASE_URL GET_SENDER_ID", GET_SENDER_ID);
// /api/gw/senderid/list


const profileDetailsSchema = Yup.object().shape({
  senderid: Yup.string().required('Sender Id is required'),
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})






// quickSmsSchema
const quickSmsSchema = Yup.object().shape({
  // senderId: Yup.string().required('Sender Id is required'),
})

const QuickSMS: React.FC = () => {
// const QuickSMS = () => {


  useEffect(()=> {


    let data = {
      pageNumber  : "Hello World!",
      pageSize: "This is a new post.",
      assignedBy: "This is a new post.",
      userId: "This is a new post.",
      routeConfId  : "This is a new post.",
    };


    // let ls = localStorage.getItem('kt-auth-react-v');


    // const lsValue: string | null = localStorage.getItem('kt-auth-react-v')

    // const auth: AuthModel = JSON.parse(lsValue) as AuthModel

    // console.log("Auth",JSON.parse(lsValue));

    // console.log("IS Value",JSON.parse(lsValue));


    // console.log("api_token",ls.);

    // const config = {
    //   headers: { Authorization: `Bearer ${token}` }
    // };


    // axios.post( 
    //   GET_SENDER_ID,
    //   data,
    // ).then(console.log).catch(console.log);





    // axios
    // .post(GET_SENDER_ID, {
    //   pageNumber  : "Hello World!",
    //   pageSize: "This is a new post.",
    //   assignedBy: "This is a new post.",
    //   userId: "This is a new post.",
    //   routeConfId  : "This is a new post.",
    // })
    // .then((response) => {
    // });

  }, []);





  const [data, setData] = useState<QuickSmsForm>(initialValues)
  const updateData = (fieldsToUpdate: Partial<QuickSmsForm>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)

  // const formik = useFormik<QuickSmsForm>({
  const formik = useFormik({
    initialValues,
    validationSchema: quickSmsSchema,
    onSubmit: (values) => {
      console.log("values", values);
      // setLoading(true)
      // setTimeout(() => {
        // values.communications.email = data.communications.email
        // values.communications.phone = data.communications.phone
        // values.allowMarketing = data.allowMarketing
        // const updatedData = Object.assign(data, values)
        // setData(updatedData)
        // setLoading(false)
      // }, 1000)
    },
  })

  console.log("formik", formik);





  const [smsText, setSmsText] = useState('');
  const [smsTextCharacterCount, setSmsTextCharacterCount] = useState(0);
  const [noOfSMS, setNoOfSMS] = useState(1);
  const [smsTextStatndardCharacterCount, setSmsTextStandardCharacterCount] = useState(0);
  const [smsType, setSmsType] = useState(1);

  const [disableDateTime, setDisableDateTime] = useState<Boolean>(true);

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



  const handleCancel = () => {
    formik.resetForm();
    // Additional logic or redirection if needed
  };

  const senderIds = [
    { value: 1, label: '01840001672' },
    { value: 2, label: '01768555552' },
    { value: 3, label: '01954665566' }
  ]

  const checkUnicode = (text : string)=>{
    console.log("VALL",text);
    var isUni = false;
    var smsLength = 0;
    var uniCount = 0;
    var normalCount = 0;

    for (var i = 0, l = text.length; i < l; i++) {
        if (text.charCodeAt(i) > 255)
        {
            uniCount++;
            isUni = true;
        } else {
            normalCount++;
        }
    }

    if(isUni){
      formik.setFieldValue("sms_type", "3")
    }else{
      formik.setFieldValue("sms_type", "1")
    }

   

    // smsLength = normalCount + (uniCount * 2);

    // console.log("isUni isUni",isUni);
    // console.log("smsLength",smsLength);

    // return {'isUni': isUni, 'smsLength': smsLength};

    // countSMSTextCharacter(e.target.value);
  }

  return (
    

    <div className='card mb-5 mb-xl-10'>
      
      <div
        className='card-header border-0 cursor-pointer'
        role='button'

        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='er m-0'>Quick SMS <span className='form-text'>Send SMS to Recipient (new)</span></h3>
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
                <span className='required'>Campaign Name</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  name="cm_name"
                  placeholder="Campaign Name"
                  className='form-control form-control-lg form-control-solid'
                  value={formik.values.cm_name}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className='row mb-4'>
              <label className='col-lg-4 col-form-label  fs-6'>
                <span className='required'>Select Sender ID</span>
              </label>

              <div className='col-lg-8 fv-row'>
                  <Select 
                    name="senderId"
                    placeholder='Choose year value'
                    value={formik.values.senderId}
                    onChange={selectedOption => {
                      formik.setFieldValue("senderId", selectedOption)
                    }}
                    options={senderIds}
                  />
              </div>
            </div>

            

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required  fs-6'>Enter Mobile Numbers</label>
              <div className='col-lg-8 fv-row-3'>
                <textarea
                  name="mobile"
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Please start with country code and New Line Separated text-bold'
                  rows={5}
                  onChange={formik.handleChange}
                  style={{ resize: 'vertical', fontSize: '1.0rem' }}
                  value={formik.values.mobile}
                ></textarea>
                {/* <div className='form-text'>
                  Please start with country code and New Line Separated text-bold.
                </div> */}
              </div>
            </div>

            {/* sms_type */}

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label  fs-6'>Select SMS Type</label>

              <div className='col-lg-8 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      name='sms_type'
                      type='radio'
                      value='1'
                      disabled={ formik.values.sms_type !== '1' }
                      checked={formik.values.sms_type === "1"}
                      onChange={() => formik.setFieldValue("sms_type", "1")}
                    />
                    <span className=' ps-2 fs-6'>Text</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      name='sms_type'
                      type='radio'
                      value='3'
                      disabled={ formik.values.sms_type !== '3' }
                      checked={formik.values.sms_type === "3"}
                      // onChange={() => console.log('o')}
                      onChange={() => formik.setFieldValue("sms_type", "3")}
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
                  name='sms_content'
                  style={{ resize: 'vertical', fontSize: '1.0rem' }}
                  value={formik.values.sms_content}

                  onChange={(e) => {
                    formik.handleChange(e);
                    checkUnicode(e.target.value);
                    // countSMSTextCharacter(e.target.value);
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
            <QuickSMSModal></QuickSMSModal>



            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fs-6'>Schedule SMS *</label>
              <div className='col-lg-8 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      name='sms_schedule'
                      type='radio'
                      value='now'
                      checked={formik.values.sms_schedule === "now"}

                      onChange={(e) => {
                        formik.setFieldValue("sms_schedule", "now")
                        setDisableDateTime(true);
                      }}
                    />
                    <span className='ps-2 fs-6'>Send Now</span>
                  </label>
                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      name='sms_schedule'
                      type='radio'
                      value='later'
                      checked={formik.values.sms_schedule === "later"}
                      onChange={() => {
                        formik.setFieldValue("sms_schedule", "later")
                        setDisableDateTime(false);
                      }
                      }
                    />
                    <span className='ps-2 fs-6'>Send Later</span>
                  </label>
                </div>

                <div className='col-lg-8'>

                  {disableDateTime ? (
                    <div className='date-time-text'>{formik.values ? formik.values.schedule_date.toLocaleString() : ''}</div>
                  ) : (
                    <div className='send-later-date-picker'>
                      <DateTimePicker
                        value={formik.values.schedule_date}
                        name="schedule_date"
                        onChange={(val) => 
                          formik.setFieldValue("schedule_date", val)
                        }
                        className='form-select form-select-solid form-select-lg'
                        format='MMMM d, yyyy HH:mm'
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

          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='button' className='btn btn-danger me-2 col-sm-2' onClick={handleCancel}>
              Cancel
            </button>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
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

export { QuickSMS }
