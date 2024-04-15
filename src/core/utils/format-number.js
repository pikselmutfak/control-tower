export function fNumber(inputValue, localeProps={ code: 'tr-TR' }) {
    const { code } = localeProps;
  
    if (!inputValue) return '';
  
    const number = Number(inputValue);
  
    const fm = new Intl.NumberFormat(code, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
  
    return fm;
  }
  
  export function fCurrency(inputValue, currencyCode = 'TRY', localeProps={ code: 'tr-TR' }) {
    const { code } = localeProps;
  
    if (!inputValue) return '';
  
    const number = Number(inputValue);
  
    const fm = new Intl.NumberFormat(code, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
  
    return fm;
  }
  
  export function fPercent(inputValue, localeProps={ code: 'tr-TR' }) {
    const { code } = localeProps;
  
    if (!inputValue) return '';
  
    const number = Number(inputValue) / 100;
  
    const fm = new Intl.NumberFormat(code, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(number);
  
    return fm;
  }
  
  export function fShortenNumber(inputValue, localeProps={ code: 'tr-TR' }) {
    const { code } = localeProps;
  
    if (!inputValue) return '';
  
    const number = Number(inputValue);
  
    const fm = new Intl.NumberFormat(code, {
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(number);
  
    return fm.replace(/[A-Z]/g, (match) => match.toLowerCase());
  }
  
  export function fData(inputValue) {
    if (!inputValue) return '';
  
    if (inputValue === 0) return '0 Bytes';
  
    const units = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];
  
    const decimal = 2;
  
    const baseValue = 1024;
  
    const number = Number(inputValue);
  
    const index = Math.floor(Math.log(number) / Math.log(baseValue));
  
    const fm = `${parseFloat((number / baseValue ** index).toFixed(decimal))} ${units[index]}`;
  
    return fm;
  }
  