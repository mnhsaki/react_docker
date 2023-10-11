import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toAbsoluteUrl } from '../../../../_metronic/helpers/AssetHelpers';
import clsx from 'clsx';

const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/http://192.241.135.61:8070';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

async function login(username: string, password: string) {

  let data = JSON.stringify({
    "username": username,
    "password": password
  });


  console.log("data",data);

  axios.post(`${API_BASE_URL}/authenticate/signin`, {
    headers: { 
      "Access-Control-Allow-Origin" : "*",
      'Content-Type': 'application/json'
    },
    data
  })
  .then(function (response) {
    console.log("success",response);
  })
  .catch(function (error) {
    console.log("error",error);
  });

  // try {
  //   const response = await axios.post(`${API_BASE_URL}/authenticate/signin`, {
  //     username,
  //     password,
  //   });
  //   return response.data.token;
  // } catch (error) {
  //   throw error;
  // }
}

async function getDataWithToken(token: any) {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Login() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const token = await login(values.username, values.password);
        // const userData = await getDataWithToken(token);
        // Handle user data as needed
        // console.log(userData);
        // setLoading(false);
      } catch (error) {
        console.error(error);
        setStatus('The login details are incorrect');
        setLoading(false);
      }
    },
  });
  
  return (
    <form
    className='form w-100'
    onSubmit={formik.handleSubmit}
    noValidate
    id='kt_login_signin_form'
  >
      {/* begin::Heading */}
      <div className='email-center mb-11'>
        <h1 className='email-dark fw-bolder mb-3'>Sign In</h1>
        <div className='email-gray-500 fw-semibold fs-6'>Your Social Campaigns</div>
      </div>
      {/* begin::Heading */}

      {/* begin::Login options */}
      <div className='row g-3 mb-9'>
        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <a
            href='#'
            className='btn btn-flex btn-outline btn-email-gray-700 btn-active-color-primary bg-state-light flex-center email-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
              className='h-15px me-3'
            />
            Sign in with Google
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <a
            href='#'
            className='btn btn-flex btn-outline btn-email-gray-700 btn-active-color-primary bg-state-light flex-center email-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
              className='theme-light-show h-15px me-3'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
              className='theme-dark-show h-15px me-3'
            />
            Sign in with Apple
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}
      </div>
      {/* end::Login options */}

      {/* begin::Separator */}
      <div className='separator separator-content my-14'>
        <span className='w-125px email-gray-500 fw-semibold fs-7'>Or with email</span>
      </div>
      {/* end::Separator */}

      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-email font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='email-info'>
            Use account <strong></strong> and password <strong></strong> to
            continue.
          </div>
        </div>
      )}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
  <label className='form-label fs-6 fw-bolder email-dark'>Email</label>
  <input
    placeholder='Username'
    {...formik.getFieldProps('username')} 
    className={clsx(
      'form-control bg-transparent',
      { 'is-invalid': formik.touched.username && formik.errors.username }, 
      { 'is-valid': formik.touched.username && !formik.errors.username } 
    )}
    type='text'
    name='username'
    autoComplete='off'
  />
  {formik.touched.username && formik.errors.username && ( 
    <div className='fv-plugins-message-container'>
      <span role='alert'>{formik.errors.username}</span> 
    </div>
  )}
</div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder email-dark fs-6 mb-0'>Password</label>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />

        {/* begin::Link */}
        <Link to='/auth/forgot-password' className='link-primary'>
          Forgot Password ?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='d-grid mb-10'>
      <button
        type='submit'
        className='btn btn-primary'
        disabled={formik.isSubmitting || !formik.isValid}
      >
        {!loading ? (
          <span className='indicator-label'>Continue</span>
        ) : (
          <span className='indicator-progress' style={{ display: 'block' }}>
            Please wait...
          </span>
        )}
      </button>
      </div>
      {/* end::Action */}

      <div className='email-gray-500 email-center fw-semibold fs-6'>
        Not a Member yet?{' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign up
        </Link>
      </div>
    </form>
  );
}

export default Login;
