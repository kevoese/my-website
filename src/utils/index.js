import axios from 'axios';

export const axiosCall = async ({ url, data, method }) => {
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

export const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const contentInView = (element) => {
  const scroll = window.scrollY || window.pageYOffset;
  const elementPositionProps = element.getBoundingClientRect();
  const elementTopPosition = elementPositionProps.top + scroll;

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  };

  const elementPosition = {
    top: elementTopPosition,
    bottom: elementTopPosition + elementPositionProps.height,
  };
  return (
    (elementPosition.bottom >= viewport.top
      && elementPosition.bottom <= viewport.bottom)
    || (elementPosition.top <= viewport.bottom
      && elementPosition.top >= viewport.top)
  );
};
