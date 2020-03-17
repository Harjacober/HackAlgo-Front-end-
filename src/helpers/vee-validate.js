
import { extend, localize } from 'vee-validate';
import { required, email, min, confirmed } from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';

// Install required rule.
extend('required', required);

// Install email rule.
extend('email', email);

// Install min rule.
extend('min', min);

extend('confirmed', confirmed);

localize({
  en: {
    messages: en.messages,
    names: {
      email: 'E-mail Address',
      password: 'Password',
      confirm_password: 'confirm password',
      new_password: 'new password',
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?',
      },
    },
  },
});
