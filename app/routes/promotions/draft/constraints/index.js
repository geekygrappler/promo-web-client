import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transition() {
      this.transitionTo('promotions.draft.overview');
    }
  }
});
