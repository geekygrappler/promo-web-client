import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('promotions.draft');
  },

  actions: {
    transition() {
      this.transitionTo('promotions.draft.dates');
    }
  }
});
