import React, {
  useContext, useEffect, useState, Fragment,
} from 'react';
import './ToastMessage.scss';
import { StoreContext } from '../../Context/WithStore';

const ToastMessage = () => {
  const { mailState, setMailState } = useContext(StoreContext);
  const [notif, setNotif] = useState(false);
  const [delayToast, setDelayToast] = useState(null);

  const closeNotif = () => {
    setNotif(false);
    setMailState({ showNotif: false, errorState: false, messsage: '' });
    clearTimeout(delayToast);
  };

  const showNotif = () => {
    if (!notif) {
      setNotif(true);
      setDelayToast(setTimeout(() => {
        closeNotif();
      }, 10000));
    }
  };

  useEffect(() => {
    if (mailState.showNotif) showNotif();
  }, [mailState.showNotif]);
  return (
    <Fragment>
      {notif ? (
        <div
          className="toast-message"
          style={{
            borderColor: `${mailState.errorState ? '#F20303' : '#0C9B00'}`,
          }}
        >
          {mailState.errorState ? (
            <img
              src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572255328/error_snlywi.svg"
              alt=""
            />
          ) : (
            <img
              src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572255328/Vector_hz4xkr.svg"
              alt=""
            />
          )}
          <p
            style={{ color: `${mailState.errorState ? '#F20303' : '#0C9B00'}` }}
          >
            {mailState.message}
          </p>
          <svg
            onClick={closeNotif}
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.48555 4.49614L8.81888 1.16283C9.08508 0.896893 9.08508 0.465581 8.81888 0.199672C8.55295 -0.0665245 8.12192 -0.0665245 7.85572 0.199672L4.52236 3.53299L1.18874 0.199648C0.92309 -0.0665483 0.491489 -0.0665483 0.225579 0.199648C-0.0403556 0.46558 -0.0403556 0.896892 0.225579 1.1628L3.5592 4.49614L0.218203 7.83713C-0.0479947 8.10332 -0.0479947 8.53437 0.218203 8.80028C0.351158 8.93352 0.525542 9 0.699926 9C0.874022 9 1.04841 8.93352 1.18139 8.80028L4.52236 5.45932L7.85572 8.79267C7.98897 8.92562 8.16306 8.99238 8.33745 8.99238C8.51154 8.99238 8.68593 8.92562 8.81891 8.79267C9.0851 8.52673 9.0851 8.09571 8.81891 7.82951L5.48555 4.49614Z"
              fill={mailState.errorState ? '#F20303' : '#0C9B00'}
            />
          </svg>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default ToastMessage;
