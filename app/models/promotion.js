import DS from 'ember-data';
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

  constraints: attr('array', { defaultValue: () => [] }),
  modifiers: attr('array', { defaultValue: () => [] }),


  addConstraint(constraint) {
    const constraints = this.get('constraints');
    if (constraints.indexOf(constraint) === -1) {
      constraints.push(constraint);
    }
  },

  addModifier(modifier) {
    const modifiers = this.get('modifiers');
    if (modifiers.indexOf(modifier) === -1) {
      modifiers.push(modifier);
    }
  }
});
