import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoMdMail } from "react-icons/io";
import { faUser, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: name.trim() === '',
      email: email.trim() === '',
      message: message.trim() === '',
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    const templateParams = { name, email, message };

    emailjs
      .send(
        'service_32aisom',
        'template_u2p6mby',
        templateParams,
        'VQSmV6kAps7vfJuSK'
      )
      .then(() => {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSuccess(false);
      });
  };

  return (
    <div id="contact" className="contact-section">
      <div className="items-container">
        <div className="contact_container">
          <div className="contact_info">
            <h1>Contact</h1>
            <p>Got an idea, question, or project in mind? Reach out and let’s chat!</p>

            <ul className="contact_list">
              <li>
                <span className="icon-circle">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <h4>Heshantha Don</h4>
              </li>
              <li>
                <span className="icon-circle">
                  <IoMdMail />
                </span>
                <h4>heshantha.don@icloud.com</h4>
              </li>
              <li>
                <span className="icon-circle">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <h4>+44 (79) 282-787-91</h4>
              </li>
              <li>
                <span className="icon-circle">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <h4>Portsmouth, UK</h4>
              </li>
            </ul>
          </div>

          <div className="contact_wrapper">
            {success && <p className="success-message">Message sent successfully!</p>}
            <Box
              ref={form}
              component="form"
              onSubmit={sendEmail}
              noValidate
              autoComplete="off"
              className="contact-form"
            >
              <div className="form-flex">
                <TextField
                  required
                  label="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={errors.name}
                  helperText={errors.name ? 'Please enter your name' : ''}
                  fullWidth
                />
                <TextField
                  required
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                  helperText={errors.email ? 'Please enter your email' : ''}
                  fullWidth
                />
              </div>
              <TextField
                required
                multiline
                rows={10}
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={errors.message}
                helperText={errors.message ? 'Please enter a message' : ''}
                fullWidth
                className="body-form"
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                className="send-button"
              >
                Send
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;