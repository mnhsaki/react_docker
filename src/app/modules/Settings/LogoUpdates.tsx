import React, { useState, ChangeEvent } from 'react';

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
    if (file && validateFile(file, ['image/png', 'image/jpeg', 'image/jpg']) && await validateImageSize(file, 28)) {
      setSidebarLogo(file);
    } else {
      // Handle invalid file type or image size
    }
  };

  const handleFaviconUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file, ['image/x-icon']) && await validateImageSize(file, 16)) {
      setFavicon(file);
    } else {
      // Handle invalid file type or image size
    }
  };

  const validateFile = (file: File, allowedTypes: string[]): boolean => {
    if (allowedTypes.includes(file.type)) {
      return true;
    }
    return false;
  };

  const validateImageSize = (file: File, maxHeight: number): Promise<boolean> => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    return new Promise<boolean>((resolve, reject) => {
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
    });
  };

  return (
    <div>
      <h2>Login Page Logo</h2>
      <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleLoginLogoUpload} />

      <h2>Sidebar Logo</h2>
      <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleSidebarLogoUpload} />

      <h2>Favicon</h2>
      <input type="file" accept="image/x-icon" onChange={handleFaviconUpload} />
    </div>
  );
};

export default LogoUpload;
