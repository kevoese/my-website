/* eslint-disable no-console */
import axios from 'axios';

const axiosCall = async ({ url, data, method }) => {
  const result = await axios({
    url,
    method: method || 'GET',
    data,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  });
  return result.data;
};


const mailer = async (data, setMailState) => {
  // make api call
  try {
    setMailState({ loading: true });
    const result = await axiosCall({
      url: '/sendMail',
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
