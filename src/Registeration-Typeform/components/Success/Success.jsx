import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { formText } from '../../constants/data';
import styles from './Success.module.css';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { formActions } from '../../store/form-slice';

const Success = () => {
  const dispatch = useDispatch();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    dispatch(formActions.resetProgress());
    setShowConfetti(true);

    const confettiDuration = 10000; // Set the duration for confetti in milliseconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, confettiDuration);

    return () => {
      clearTimeout(confettiTimer); // Clear the timer on component unmount
    };
  }, [dispatch]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={({ duration: 0.3 }, { opacity: { duration: 0.4 } })}
      className={styles.container}
    >
      {showConfetti && <Confetti />}
      <span className="labelText" style={{ textAlign: 'center' }}>
        {formText.success.labelText}
      </span>
    </motion.div>
  );
};

export default Success;
