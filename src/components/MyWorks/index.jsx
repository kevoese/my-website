import React from 'react';
import './MyWorks.scss';
import SliderMenu from 'react-slider-menu-package';
import ProjectDiv from './ProjectDiv';

const MyWorks = () => (
  <div className="my-works">
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
          appLink="https://demeter-ah-frontend-staging.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572108439/Screen_Shot_2019-10-25_at_10.33.32_AM_o7vila.png"
        />
        <ProjectDiv
          appLink="https://my-diary-angular.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572108432/Screen_Shot_2019-10-25_at_9.21.11_AM_scwpfy.png"
        />
        <ProjectDiv
          appLink="https://hello-books-deferral-staging.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572108431/Screen_Shot_2019-10-25_at_9.24.23_AM_iu0hmb.png"
        />
        <ProjectDiv
          appLink="https://kevoese.github.io/Epic-mail/UI/epic-mail.html"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110611/Screen_Shot_2019-10-26_at_6.17.21_PM_fzolzm.png"
        />
        <ProjectDiv
          appLink="https://epic-mail-react-app.herokuapp.com/#/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110587/Screen_Shot_2019-10-26_at_6.21.10_PM_tg3li7.png"
        />
        <ProjectDiv
          appLink="https://crypto-book-order-app-react.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110595/Screen_Shot_2019-10-26_at_6.18.56_PM_jisamy.png"
        />
        <ProjectDiv imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110675/Screen_Shot_2019-10-26_at_6.20.09_PM_jnin7m.png" />
        <ProjectDiv
          appLink="https://lyrics-app-react.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110588/Screen_Shot_2019-10-26_at_6.22.22_PM_v4txrg.png"
        />
        <ProjectDiv
          appLink="https://busha-admin-dashboars-app.herokuapp.com/balances"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572111009/Screen_Shot_2019-10-26_at_6.27.29_PM_mxpny0.png"
        />
      </SliderMenu>
    </div>
  </div>
);

export default MyWorks;
