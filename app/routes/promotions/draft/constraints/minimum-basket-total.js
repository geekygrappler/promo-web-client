import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('promotions.draft');
  },
  actions: {
    addConstraint() {
      this.modelFor('promotions.draft').addConstraint('MinimumBasketTotalConstraint');
      this.transitionTo('promotions.draft.constraints');
    },
    removeConstraint() {
      const promotion = this.modelFor('promotions.draft');
      promotion.set('minimumBasketTotal', null);
      promotion.removeConstraint('MinimumBasketTotalConstraint');
      this.transitionTo('promotions.draft.constraints');
    }
  }
});
