import React from 'react';
import './MyWorks.scss';
import SliderMenu from 'react-slider-menu-package';
import ProjectDiv from './ProjectDiv';

const MyWorks = () => (
  <div className="my-works" id="myworks">
    <h2 className="my-works__title">My Works</h2>
    <div className="my-works__slider-wrap">
      <SliderMenu
        autoMode
        elementsPerView={3}
        height={250}
        sliderTransition={1.5}
        autoModeDelayTime={15}
        elementsMinWidth={350}
      >
        <ProjectDiv
          appLink="https://paymentgateway.accessbankplc.com/#/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621627721/Screen_Shot_2021-05-21_at_8.30.00_PM_tiubjw.png"
        />
        <ProjectDiv
          appLink="https://nn-ship-maintenance.herokuapp.com/#/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621629452/Screen_Shot_2021-05-21_at_9.39.27_PM_hqtq2u.png"
        />
        <ProjectDiv
          appLink="https://payfi.ng/#/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621628629/Screen_Shot_2021-05-21_at_9.16.59_PM_psf3oy.png"
        />
        <ProjectDiv
          appLink="http://dhml-staging.herokuapp.com/#/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621628627/Screen_Shot_2021-05-21_at_9.23.48_PM_u4oxce.png"
        />
        <ProjectDiv
          appLink="https://demeter-ah-frontend-staging.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572108439/Screen_Shot_2019-10-25_at_10.33.32_AM_o7vila.png"
        />
        <ProjectDiv
          appLink="https://payfi.netlify.app/#/register/verify-email"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621628458/Screen_Shot_2021-05-21_at_9.21.42_PM_i7rmat.png"
        />
        <ProjectDiv
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621628629/Screen_Shot_2021-05-21_at_9.24.31_PM_einydk.png"
          appLink="https://payfi-merchant-web.herokuapp.com/"
        />
        <ProjectDiv
          appLink="https://lyrics-app-react.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110588/Screen_Shot_2019-10-26_at_6.22.22_PM_v4txrg.png"
        />
        <ProjectDiv
          appLink="https://hire-my-services.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621629162/Screen_Shot_2021-05-21_at_9.34.33_PM_rxiqqe.png"
        />
      </SliderMenu>
    </div>
  </div>
);

export default MyWorks;
