import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  session: inject(),

  model() {
    return this.store.createRecord('user');
  },

  actions: {
    signUp(newUser) {
      newUser.save().catch((error) => {
        console.log('error');
      }).then(() => {
        this.get('session')
        .authenticate('authenticator:devise', newUser.get('email'), newUser.get('password'));
      });
    }
  }
});
