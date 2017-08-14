import DS from 'ember-data';
import { computed } from '@ember/object';
const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),
  /* Percentage Discounts */
  itemsPercentageDiscount: attr('number'),
  deliveryPercentageDiscount: attr('number'),
  totalPercentageDiscount: attr('number'),
  /* Absolute Discounts */
  itemsAbsoluteDiscount: attr('number'),
  deliveryAbsoluteDiscount: attr('number'),
  totalAbsoluteDiscount: attr('number'),

  minimumBasketTotal: attr('number'),

  constraints: attr('', { defaultValue: () => [] }),
  modifiers: attr('', { defaultValue: () => [] }),

  hasSpecificCustomerConstraint: computed('constraints.[]', function() {
    return this.containsConstraint('SpecificCustomerConstraint');
  }),


  addConstraint(constraint) {
    const constraints = this.get('constraints');
    if (constraints.indexOf(constraint) === -1) {
      constraints.pushObject(constraint);
    }
  },

  removeConstraint(constraint) {
    const constraints = this.get('constraints');
    constraints.removeObject(constraint);
  },

  containsConstraint(constraint) {
    const constraints = this.get('constraints');
    return constraints.indexOf(constraint) > -1;
  },

  addModifier(modifier) {
    const modifiers = this.get('modifiers');
    if (modifiers.indexOf(modifier) === -1) {
      modifiers.pushObject(modifier);
    }
  }
});
