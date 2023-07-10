import React, { useEffect } from 'react'

const InvoiceList = () => {

  useEffect(() => {
    document.title = 'InvoiceList';
  }, []);

  return (
    <div>InvoiceList</div>
  )
}

export default InvoiceList