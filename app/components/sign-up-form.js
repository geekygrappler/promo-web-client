import Ember from 'ember';
import fetch from 'fetch';
import { inject } from '@ember/service';

export default Ember.Component.extend({
  session: inject(),

  form: {},
  actions: {
    submit() {
      const form = this.get('form');
      fetch('http://localhost:3000/users.json', {
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
