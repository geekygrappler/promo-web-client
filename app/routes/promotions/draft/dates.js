import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition() {
      this.modelFor('promotions.draft').addConstraint('TimePeriodConstraint');
    }
  }
});
