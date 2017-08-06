import Ember from 'ember';
import fetch from 'fetch';
import { inject } from '@ember/service';
import ENV from '../config/environment';


export default Ember.Component.extend({
  session: inject(),
  apiHost: ENV.API_HOST,
  form: {},
  actions: {
    submit() {
      const form = this.get('form');
      fetch(`${this.get('apiHost')}/users`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: form })
      })
      .then((response) => {
        if (response.ok) {
          this.get('session').authenticate('authenticator:devise', form.email, form.password);
        }
      })
      .catch(() => {
        // Handle the error
      });
    }
  }
});
