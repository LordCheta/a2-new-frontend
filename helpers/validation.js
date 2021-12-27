import { extend } from 'vee-validate';

extend('alpa', {
  validate: value => {
    const validationRegex = /[^A-Za-z0-9]+/;
    if (validationRegex.test(value)) return true

    return "Name must contain only letter a-z(case insensitive) and number 0-9"
  }
});
