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
  modifiers: attr('array', { defaultValue: () => [] })
});
