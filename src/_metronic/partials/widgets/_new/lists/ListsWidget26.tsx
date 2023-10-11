/* eslint-disable jsx-a11y/anchor-is-valid */
import {Fragment} from 'react'
import {KTIcon} from '../../../../helpers'
import { Col, Row } from 'react-bootstrap'

type Props = {
  className: string
}

const rows: Array<{description: string}> = [
  {description: 'Avg. Client Rating'},
  {description: 'Instagram Followers'},
  {description: 'Google Ads CPC'},
]

const ListsWidget26 = ({className}: Props) => (
  <div className={`card card-flush ${className}`}>
    <div className='card-header pt-5'>
      <h3 className='card-title text-gray-800 fw-bold'>SMS Quantity</h3>
      <div className='card-toolbar'></div>
    </div>
    <div className='card-body pt-5'>
    <div className="container">
    <div className="d-flex flex-row">
  <div className="p-2"><button type="button" className="btn btn-danger">Masking</button></div>
  <div className="p-2"></div>
  <div className="p-2"><button type="button" className="btn btn-success">NonMasking</button></div>
</div>
  </div>
</div>
      
</div>
    
  
)
export {ListsWidget26}
