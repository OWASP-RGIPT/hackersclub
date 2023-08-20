import React, { useEffect, useRef } from 'react';
import { Button, ButtonLabel, Error } from '../..';

import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../../store/form-slice';

import images from '../../../constants/images';
import { formText } from '../../../constants/data';

import { motion } from 'framer-motion';

const BranchName = ({ showNextElement }) => {
  const dispatch = useDispatch();
  const scrollDirection = useSelector((state) => state.form.scrollDirection);
  const pointer = useSelector((state) => state.form.pointer);
  let errorMessage = useSelector((state) => state.form.errorMessage);
  const formData = useSelector((state) => state.form.formData);
  const progress = useSelector((state) => state.form.progress);

  const inputRef = useRef();

  const BranchName = formData.BranchName;
  let nameIsValid = BranchName.trim() !== '';

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(formActions.setElementValidity({ pointer, isValid: nameIsValid }));

    if (nameIsValid) {
      dispatch(formActions.setErrorMessage(null));
    }

    if (nameIsValid && progress < pointer * 100)
      dispatch(formActions.incrementProgress());
    else if (!nameIsValid && progress !== (pointer - 1) * 100)
      dispatch(formActions.decrementProgress());
  }, [dispatch, nameIsValid, pointer, progress]);

  const nameChangeHandler = (event) => {
    dispatch(formActions.setFormData({ BranchName: event.target.value }));
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

  if (nameIsValid) {
    footer = (
      <div className="button">
        <Button onClick={navigationHandler} />
        <ButtonLabel labelKey="Enter ↵" />
      </div>
    );
  }

  if (errorMessage && !nameIsValid) {
    footer = <Error message={errorMessage} />;
  }

  return (
    <motion.div
      initial={{ y: scrollDirection > 0 ? 300 : -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={({ duration: 0.3 }, { opacity: { duration: 0.4 } })}
      className="containerF"
    >
      <div className="number">
        <span>{pointer}</span>
        <img src={images.rightArrow} alt="Right Arrow" />
      </div>

      <div className="formControl">
        <label>
          <span className="labelText">
            {formText.BranchName.labelTextOne}
            {formData.Name}
            {formText.BranchName.labelTextTwo}
          </span>
        </label>

        <input
          type="text"
          id="BranchName"
          name="BranchName"
          placeholder="Type your answer here..."
          ref={inputRef}
          value={BranchName}
          onChange={nameChangeHandler}
        />

        {footer}
      </div>
    </motion.div>
  );
};

BranchName.displayName = 'BranchName';

export default BranchName;
