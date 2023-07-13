import React, { useState, ChangeEvent, useEffect } from 'react';
import './LogoUpload.css'; // Import the CSS file for styling
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogoUpload = () => {
  const [loginLogo, setLoginLogo] = useState<File | null>(null);
  const [sidebarLogo, setSidebarLogo] = useState<File | null>(null);
  const [favicon, setFavicon] = useState<File | null>(null);

  const handleLoginLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file, ['image/png', 'image/jpeg', 'image/jpg'])) {
      setLoginLogo(file);
    } else {
      // Handle invalid file type
    }
  };

  const handleSidebarLogoUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file, ['image/png', 'image/jpeg', 'image/jpg']) && (await validateImageSize(file, 28))) {
      setSidebarLogo(file);
    } else {
      // Handle invalid file type or image size
    }
  };

  const handleFaviconUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file, ['image/x-icon']) && (await validateImageSize(file, 16))) {
      setFavicon(file);
    } else {
      // Handle invalid file type or image size
    }
  };

  const handleRemoveLoginLogo = () => {
    setLoginLogo(null);
  };

  const handleRemoveSidebarLogo = () => {
    setSidebarLogo(null);
  };

  const handleRemoveFavicon = () => {
    setFavicon(null);
  };

  const validateFile = (file: File, allowedTypes: string[]): boolean => {
    if (allowedTypes.includes(file.type)) {
      return true;
    }
    return false;
  };

  const validateImageSize = (file: File, maxHeight: number): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        if (img.height <= maxHeight) {
          resolve(true);
        } else {
          resolve(false);
        }
      };
      img.onerror = function () {
        reject(false);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleUpload = () => {
    // Handle the upload action here
  };

  useEffect(() => {
    document.title = 'LogoUpdates';
  }, []);

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
          <h3 className='er m-0'>Logo Update <span className='form-text'></span></h3>
        </div>

        <div className='card-title m-0'>
          <Link to='/dashboard'>
            <Button variant='primary' size='sm'>
              DASHBOARD
            </Button>
          </Link>
        </div>

      </div>
      <div className="logo-upload-container">
      <h2>Login Page Logo</h2>
      <div className="upload-container">
        {loginLogo ? (
          <>
            <div className="preview-image-container">
              <img className="preview-image" src={URL.createObjectURL(loginLogo)} alt="Login Logo Preview" />
              <button className="remove-image-button" onClick={handleRemoveLoginLogo}>
                Remove
              </button>
            </div>
          </>
        ) : (
          <label htmlFor="loginLogo" className="upload-label">
            <div className="upload-placeholder">Drag and drop or click to upload</div>
          </label>
        )}
        <input id="loginLogo" type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleLoginLogoUpload} />
      </div>
      <p>Allowed file types: png, jpg, jpeg.</p>

      <h2>Sidebar Logo</h2>
      <div className="upload-container">
        {sidebarLogo ? (
          <>
            <div className="preview-image-container">
              <img className="preview-image" src={URL.createObjectURL(sidebarLogo)} alt="Sidebar Logo Preview" />
              <button className="remove-image-button" onClick={handleRemoveSidebarLogo}>
                Remove
              </button>
            </div>
           
          </>
        ) : (
          <label htmlFor="sidebarLogo" className="upload-label">
            <div className="upload-placeholder">Drag and drop or click to upload</div>
          </label>
        )}
        <input id="sidebarLogo" type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleSidebarLogoUpload} />
      </div>
      <p>Allowed file types: png, jpg, jpeg.
Max Height: 28px.</p>

      <h2>Favicon</h2>
      <div className="upload-container">
        {favicon ? (
          <>
            <div className="preview-image-container">
              <img className="preview-image" src={URL.createObjectURL(favicon)} alt="Favicon Preview" />
              <button className="remove-image-button" onClick={handleRemoveFavicon}>
                Remove
              </button>
            </div>
           
          </>
        ) : (
          <label htmlFor="favicon" className="upload-label">
            <div className="upload-placeholder">Drag and drop or click to upload</div>
          </label>
        )}
        <input id="favicon" type="file" accept="image/x-icon" onChange={handleFaviconUpload} />
      </div>
      <p>Allowed file types: ico
Image: Size 16x16</p>

      <Button variant="danger">Upload</Button>{' '}
    </div>
    </div>
   
  );
};

export default LogoUpload;
