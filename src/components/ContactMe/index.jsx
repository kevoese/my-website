import React, { useState, useEffect, useContext } from 'react';
import './ContactMe.scss';
import TypeWriterEffect from 'react-typewriter-effect';
import { StoreContext } from '../../Context/WithStore';

const ContactMe = () => {
  const [showForm, setShowForm] = useState(false);
  const { handleSendMail, mailState } = useContext(StoreContext);
  const initialState = {
    fullName: '',
    email: '',
    message: '',
  };
  const [values, setValues] = useState({
    ...initialState,
  });

  const handleClick = () => {
    setShowForm(prevState => !prevState);
  };

  const handleChange = (e) => {
    e.persist();
    setValues(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMail(values);
  };

  useEffect(() => {
    if (!mailState.loading && !mailState.errorState) { setValues(initialState); }
  }, [mailState.loading]);

  return (
    <div className="contact-me-form-wrap">
      {showForm ? (
        <div className="contact-me-form">
          <div className="contact-me-form__sect1">
            <h2>Connect with me</h2>
            <div className="hello-wrap">
              <TypeWriterEffect
                textStyle={{
                  font: '700 1.1em Red Hat Display',
                  color: 'white',
                }}
                cursorColor="white"
                text="Hello"
                hideCursorAfterText
                typeSpeed={100}
              />
              <img
                src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572186247/wave_mlsmoo.svg"
                alt=""
              />
            </div>
            <div className="instructions-wrap">
              <TypeWriterEffect
                textStyle={{
                  font: '400 0.9em Red Hat Display',
                  color: 'white',
                }}
                cursorColor="white"
                text="Need my Services?"
                hideCursorAfterText
                typeSpeed={80}
                startDelay={1500}
              />
              <br />
              <TypeWriterEffect
                textStyle={{
                  font: '400 0.9em Red Hat Display',
                  color: 'white',
                }}
                cursorColor="white"
                text="Reach out to me through this form."
                typeSpeed={80}
                hideCursorAfterText
                startDelay={4000}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="contact-me-form__sect2">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Drop Your Email..."
                required
              />
              <input
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                placeholder="Name"
                pattern="^[a-zA-Z '.-]{3,30}$"
                required
              />
            </div>
            <div className="contact-me-form__sect3">
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              />
              <button
                disabled={mailState.loading}
                type="submit"
              >
                <span>{mailState.loading ? 'Sending...' : 'Send'}</span>
                <img
                  src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572194892/arrows_rkdjju.svg"
                  alt=""
                />
              </button>
            </div>
          </form>
        </div>
      ) : (
        ''
      )}
      <button
        onClick={handleClick}
        className="contact-me-button flex-center"
        type="button"
      >
        {showForm ? (
          <svg
            width="20"
            height="10"
            viewBox="0 0 44 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="12" rx="2" fill="white" />
          </svg>
        ) : (
          <img
            src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572191566/message_wx7jup.svg"
            alt=""
          />
        )}
      </button>
    </div>
  );
};

export default ContactMe;
