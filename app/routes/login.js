import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


export default Route.extend(UnauthenticatedRouteMixin, {
  session: inject(),

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('form', {});
  },

  actions: {
    authenticate(form) {
      const { identification, password } = form;
      this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
