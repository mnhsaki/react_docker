import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { PageTitle } from '../../../_metronic/layout/core';
import {

  CardsWidget17,
  CardsWidget20,
  CardsWidget7,

  // Import other card components as needed
} from '../../../_metronic/partials/widgets';
import { CardsWidget5 } from '../../../_metronic/partials/widgets/_new/cards/ChartsWidget5';
import { CardsWidget6 } from '../../../_metronic/partials/widgets/_new/cards/ChartsWidget6';

const DashboardPage: FC = () => (


  <>
    <div className="container text-center">
      <div className="row g-2">
        <div className="col-6">
{/* 
          <CardsWidget20
            className='h-md-50 mb-5 mb-xl-10'
            description='Balance'
            color='#F1416C'
            img={''}
          /> */}
         <h5>Some error occured  .. under constraction.....</h5>
        </div>
        <div className="col-6">
{/* 
          <CardsWidget17
            className='h-md-50 mb-5 mb-xl-10'
            description='Balance'
            color='#F1416C'
            img={''}
          /> */}
        </div>
        <div className="col-6">
          {/* <CardsWidget7
            className='h-md-50 mb-5 mb-xl-10'
            description='Balance'
            color='#F1416C'
            img={''}
          /> */}
        </div>
        <div className="col-6">
          <div className="p-3">
            {/* <CardsWidget5
              className='h-md-50 mb-5 mb-xl-10'
              description='Balance'
              color='#F1416C'
              img={''}
            /> */}
          </div>
        </div>
        <div className="col-6">

          {/* <CardsWidget6
            className='h-md-50 mb-5 mb-xl-10'
            description='Balance'
            color='#F1416C'
            img={''}
          /> */}
        </div>

      </div>
    </div>

  </>



);

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
