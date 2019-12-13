import React from 'react';
import { func, string, bool } from 'prop-types';
import AutocompleteGoogle from 'react-google-autocomplete';

import SearchButton from './components/SearchButton';
import styles from './styles.module.scss';
import Datepicker from './components/Datepicker';
import search from '../../../../../assets/search.svg';

function SearchSectionLayout({
  onPlaceSelected,
  lastSearch,
  onClick,
  place,
  startDate,
  endDate,
  today,
  onStartDateChange,
  onEndDateChange,
  start,
  end,
  disabled
}) {
  return (
    <div className={styles.container}>
      <div className={styles.searchcontainer}>
        <AutocompleteGoogle
          className={styles.autocomplete}
          onPlaceSelected={onPlaceSelected}
          placeholder={lastSearch || 'Search'}
          types={['(cities)']}
        />
        <Datepicker placeholder="Llegada --/--/--" startDate={startDate} minDate={today} handleChange={onStartDateChange} />
        <Datepicker placeholder="Salida --/--/--" minDate={startDate} startDate={endDate} handleChange={onEndDateChange} />
        <SearchButton disabled={disabled} value={place} start={startDate} end={endDate} onClick={onClick} />
      </div>
      <div className={styles.recentcontainer}>
        <span className={styles.recenttitle}>Retomá tu búsqueda reciente</span>
        <div className={styles.recentsearch}>
          <div className={styles.searchiconcontainer}>
            <img src={search} alt="hola" className={styles.searchicon} />
          </div>
          <div className={styles.lastsearch}>
            <span className={styles.searchplace}>{lastSearch}</span>
            <span>{`${start && start.toLocaleDateString('es-ES')} ${end && end.toLocaleDateString('es-ES')}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchSectionLayout.propTypes = {
  onPlaceSelected: func.isRequired,
  lastSearch: string.isRequired,
  onClick: func.isRequired,
  place: string.isRequired,
  startDate: string.isRequired,
  endDate: string.isRequired,
  today: string.isRequired,
  onStartDateChange: func.isRequired,
  onEndDateChange: func.isRequired,
  start: string.isRequired,
  end: string.isRequired,
  disabled: bool.isRequired
};

export default SearchSectionLayout;
