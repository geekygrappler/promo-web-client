import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Component.extend({
  constraintsDisplayMap: computed('minimumBasketTotal', function() {
    const minimumBasketTotal = this.get('minimumBasketTotal');
    return (
      {
        'MinimumBasketTotalConstraint': `The customer's basket must be at least £${minimumBasketTotal}.`,
        'OnePerCustomerConstraint': 'A customer can only have one promocode for this promotion.',
        'SpecificCustomerConstraint': 'A promocode belongs to the customer.'
      }
    );
  }),

  constraintDisplayValue: computed('constraint', function() {
    const constraint = this.get('constraint');
    const constraintDisplayMap = this.get('constraintsDisplayMap');
    return constraintDisplayMap[constraint];
  })
});
