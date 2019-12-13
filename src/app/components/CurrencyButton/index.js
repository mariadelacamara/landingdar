import React from 'react';
import Select from 'react-select';
import { groupedOptions, principalOptions } from './constants';
import { colourStyles } from './utils';


function CurrencyButton() {
  return (
    <Select
      components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
      options={groupedOptions}
      defaultValue={principalOptions[0]}
      getOptionLabel={(option) => `${option.label} - ${option.lugar}`}
      isSearchable
      singleValue={principalOptions[0].label}
      styles={colourStyles}
    />
  );
}

export default CurrencyButton;
