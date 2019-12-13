import React from 'react';
import DatePicker from 'react-datepicker';
import { string, func } from 'prop-types';
import styles from '../../styles.module.scss';

function Datepicker({
  placeholder, startDate, minDate, handleChange
}) {
  return (
    <DatePicker
      placeholderText={placeholder}
      selected={startDate}
      minDate={minDate}
      onChange={handleChange}
      className={styles.datepicker}
      showDisabledMonthNavigation
      dateFormat="dd/MM/yyyy"
    />
  );
}

Datepicker.propTypes = {
  placeholder: string.isRequired,
  startDate: string.isRequired,
  minDate: string.isRequired,
  handleChange: func.isRequired
};

export default Datepicker;
