import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transition(route) {
      this.transitionTo(route);
    }
  }
});
