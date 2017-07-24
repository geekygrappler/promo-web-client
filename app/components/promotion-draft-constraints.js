import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  onePerCustomerConstraint: computed('promotion.constraints.[]', function() {
    return this.get('promotion').containsConstraint('OnePerCustomerConstraint');
  }),
  specificCustomerConstraint: computed('promotion.constraints.[]', function() {
    return this.get('promotion').containsConstraint('SpecificCustomerConstraint');
  }),

  actions: {
    toggleConstraint(constraint) {
      const promotion = this.get('promotion');
      if (this.get(constraint)) {
        promotion.removeConstraint(constraint.capitalize());
      } else {
        promotion.addConstraint(constraint.capitalize());
      }
    }
  }
});
