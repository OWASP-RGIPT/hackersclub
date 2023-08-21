import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { errorMessages } from '../../constants/data';
import { formActions } from '../../store/form-slice';

import formElements from '../../constants/form-elements';

import { apiURL } from '../../constants/data';
import img from '../../../assets/email.png';

import styles from './FormWrapper.module.css';

function extractRollNumber(email) {
  const pattern = /^(\d{2}[a-zA-Z]{2}\d{4})@.*$/;
  const match = email.match(pattern);
  return match[1];
}

const FormWrapper = () => {
  const dispatch = useDispatch();
  const pointer = useSelector((state) => state.form.pointer);
  const formValidity = useSelector((state) => state.form.formValidity);
  const formVal = useSelector((state) => state.form.formData);
  const [loading, setLoading] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);
  
  const sectionRef = useRef();

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.focus();
    }
  }, []);

  let CurrentElement = formElements.componentArray[pointer];

  async function onFormSubmit() {
    const formData = new FormData();
    formData.append('image', formVal.file);
    formData.append('name', formVal.Name);
    formData.append('email', formVal.emailAddress);
    formData.append('phone', formVal.phoneNumber); 
    formData.append('branch', formVal.BranchName);

    const rollNumber = extractRollNumber(formVal.emailAddress);
    formData.append('rollNo', rollNumber);
  
    try {
      setLoading(true);
      setSubmissionFailed(false);
   
      const headers = new Headers();
      headers.append('Authorization', 'Bearer owasp_neon$1337');
  
      const response = await fetch(`${apiURL}/api/set-user`, {
        method: 'POST',
        headers: headers,
        body: formData
      });
  
      console.log(response);
      console.log(formData);
  
      if (response.ok) {
        console.log('Successfully submitted!');
        setLoading(false);
        dispatch(formActions.incrementPointer());
      } else {
        setLoading(false);
        console.log('Submission failed.');
        setSubmissionFailed(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const showNextElement = () => {
    if (formValidity[pointer]) {
      if (pointer === formElements.numberOfElements - 2) {
        // Submit the form if on the second-to-last element
        onFormSubmit();
      } else {
        // Move to the next form element
        dispatch(formActions.incrementPointer());
      }
    } else {
      // Show error message for the current form element
      dispatch(
        formActions.setErrorMessage(errorMessages[CurrentElement.displayName])
      );
    }
  };

  // Throttling for scroll handler
  let scrolling = false;

  const scrollHandler = (event) => {
    scrolling = true;

    setInterval(() => {
      if (scrolling) {
        if (event.deltaY > 0 && pointer + 1 < formElements.numberOfElements) {
          showNextElement();
        } else if (
          event.deltaY < 0 &&
          pointer !== formElements.numberOfElements - 1 &&
          pointer - 1 >= 0
        ) {
          dispatch(formActions.decrementPointer());
        }
      }

      scrolling = false;
    }, 500);
  };

  const keyDownHandler = (event) => {
    // Handle final form element (Ctrl + Enter case)
    if (pointer === formElements.numberOfElements - 2) {
      let ctrl = event.ctrlKey
        ? event.ctrlKey
        : event.keyCode === 17
        ? true
        : false;

      if (event.keyCode === 13 && ctrl) {
        showNextElement();
      } else if (event.code === 'Enter') {
        formValidity[pointer]
          ? (() => {})()
          : dispatch(
              formActions.setErrorMessage(
                errorMessages[CurrentElement.displayName]
              )
            );
      }
    }

    // Handle form elements except the final one
    if (event.keyCode === 13 && pointer < formElements.numberOfElements - 2) {
      showNextElement();
    }
  };

  return (
    <section
      onWheel={scrollHandler}
      onKeyDown={keyDownHandler}
      tabIndex={0}
      ref={sectionRef}
    >
      {loading ? (
       <span class={styles.loader}></span>
      ) : submissionFailed ? (
        <div className={styles.failureMessage} style={{textAlign:'center'}}>Hold on! It seems like you're already a proud member of the Hackers Club.<br/> Great to have you with us!</div>
      ) : (
        <CurrentElement showNextElement={showNextElement} />
      )}
    </section>
  );
};

export default FormWrapper;
