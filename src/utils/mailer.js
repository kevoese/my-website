import { axiosCall } from './index';

/* eslint-disable no-console */

const mailer = async (data, setMailState) => {
  // make api call
  try {
    setMailState({ loading: true });
    const result = await axiosCall({
      url: 'https://hire-my-services.herokuapp.com/sendMail',
      data,
      method: 'POST',
    });
    setMailState({
      showNotif: true,
      errorState: false,
      message: result.message,
      loading: false,
    });
  } catch ({ response }) {
    setMailState({
      showNotif: true,
      errorState: true,
      message: 'Message not sent. Something went wrong',
      loading: false,
    });
  }
};

export default mailer;
