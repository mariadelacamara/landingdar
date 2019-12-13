import cc from 'currency-codes';

const countries = cc.countries();
const codes = cc.codes();


export const currencyOptions = codes.map(
  (code, country) => ({ label: code, lugar: countries[country] })
);

export const principalOptions = [{ label: 'ARS', lugar: 'Argentina' }, { label: 'USD', lugar: 'Estados Unidos' }];

export const groupedOptions = [
  {
    label: 'Principales Monedas',
    options: principalOptions,
  },
  {
    label: 'Todas las monedas',
    options: currencyOptions,
  },
];
