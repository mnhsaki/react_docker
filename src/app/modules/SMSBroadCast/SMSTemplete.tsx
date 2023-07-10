import React, {useEffect, useState} from 'react'

import { Table } from 'react-bootstrap';
import {IProfileDetails, profileDetailsInitValues as initialValues} from './SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';



const smsTemplates = [
  {
    id: 1,
    templateName: 'tem1',
    smsText: 'asdfaf #name# and #roll#',
    user: 'admin',
  },
];

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

const SMSTemplete: React.FC = () => {
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

  useEffect(() => {
    document.title = 'SMSTemplete';
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
          <h3 className='er m-0'>Sms Templete</h3>
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
        {smsTemplates.map((template) => (
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
            Showing 1 to {smsTemplates.length} of {smsTemplates.length} entries
          </td>
        </tr>
      </tfoot>
    </Table>
      </div>
    </div>
  )
}

export {SMSTemplete}
