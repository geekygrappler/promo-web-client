import Ember from 'ember';
import { inject } from '@ember/service';

const { computed } = Ember;

export default Ember.Component.extend({
  router: inject(),
  onePerCustomerConstraint: computed('promotion.constraints.[]', function() {
    return this.get('promotion').containsConstraint('OnePerCustomerConstraint');
  }),
  specificCustomerConstraint: computed('promotion.constraints.[]', function() {
    return this.get('promotion').containsConstraint('SpecificCustomerConstraint');
  }),
  minimumBasketTotalConstraint: computed('promotion.constraints.[]', function() {
    return this.get('promotion').containsConstraint('MinimumBasketTotalConstraint');
  }),

  actions: {
    toggleConstraint(constraint) {
      const promotion = this.get('promotion');
      if (this.get(constraint)) {
        promotion.removeConstraint(constraint.capitalize());
      } else {
        promotion.addConstraint(constraint.capitalize());
      }
    },
    toggleMinimumBasketTotalConstraint() {
      const promotion = this.get('promotion');
      if (this.get('minimumBasketTotalConstraint')) {
        promotion.removeConstraint('MinimumBasketTotalConstraint');
        promotion.set('minimumBasketTotal', null);
      } else {
        this.get('router').transitionTo('promotions.draft.constraints.minimum-basket-total');
      }
    }
  }
});
