import React, { useEffect, useRef, useState } from 'react';
import { Button, ButtonLabel, Error } from '../..';

import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../../store/form-slice';

import images from '../../../constants/images';
import { formText } from '../../../constants/data';

import { motion } from 'framer-motion';

const File = ({ showNextElement }) => {
  const dispatch = useDispatch();
  const scrollDirection = useSelector((state) => state.form.scrollDirection);
  const pointer = useSelector((state) => state.form.pointer);
  let errorMessage = useSelector((state) => state.form.errorMessage);
  const formData = useSelector((state) => state.form.formData);
  const progress = useSelector((state) => state.form.progress);

  const inputRef = useRef();

  const file = formData.file;
  let fileIsValid = !!file;

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(formActions.setElementValidity({ pointer, isValid: fileIsValid }));

    if (fileIsValid) {
      dispatch(formActions.setErrorMessage(null));
    }

    if (fileIsValid && progress < pointer * 100)
      dispatch(formActions.incrementProgress());
    else if (!fileIsValid && progress !== (pointer - 1) * 100)
      dispatch(formActions.decrementProgress());
  }, [dispatch, fileIsValid, pointer, progress]);

  const fileChangeHandler = (event) => {
    const selectedFile = event.target.files[0];
    dispatch(formActions.setFormData({ file: selectedFile }));
  };

  const navigationHandler = () => {
    showNextElement();
  };

  let footer = (
    <div className="button">
      <Button onClick={navigationHandler} />
      <ButtonLabel labelKey="Enter ↵" />
    </div>
  );

  if (fileIsValid) {
    footer = (
      <div className="button">
        <Button onClick={navigationHandler} />
        <ButtonLabel labelKey="Enter ↵" />
      </div>
    );
  }

  if (errorMessage && !fileIsValid) {
    footer = <Error message={errorMessage} />;
  }

  const [paymentLink, setPaymentLink] = useState('');

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setPaymentLink("upi://pay?pa=raj.aryaman0816@okhdfcbank&pn=OWASP%20RGIPT&cu=INR&am=1000");
    } else {
      setPaymentLink("https://upilinks.in/payment-link/upi1693389504");
    }
  }, []);
  return (
    <motion.div
      initial={{ y: scrollDirection > 0 ? 300 : -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, opacity: { duration: 0.4 } }}
      className="containerF"
    >
      <div className="number">
        <span>{pointer}</span>
        <img src={images.rightArrow} alt="Right Arrow" />
      </div>

      <div className="formControl">
        <label>
          <span className="labelText">  Please <a href={paymentLink} target="_blank" rel="noopener noreferrer">Pay Here</a> and upload the payment screenshot.</span>
        </label>
        
        <input
          type="file"
          id="file"
          name="file"
          accept=".jpg,.png"
          ref={inputRef}
          onChange={fileChangeHandler}
        />

        {footer}
      </div>
    </motion.div>
  );
};

File.displayName = 'File';

export default File;
