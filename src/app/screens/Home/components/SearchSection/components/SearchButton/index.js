import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';

import styles from '../../styles.module.scss';

class SearchButton extends Component {
    handleClick = () => {
      const {
        onClick, value, start, end
      } = this.props;
      onClick(value, start, end);
    }

    render() {
      const { disabled } = this.props;
      return (
        <button disabled={disabled} className={styles.searchbutton} type="button" onClick={this.handleClick}>Buscar</button>
      );
    }
}

SearchButton.propTypes = {
  onClick: func.isRequired,
  value: string.isRequired,
  disabled: bool.isRequired,
  start: string.isRequired,
  end: string.isRequired
};

export default SearchButton;
