import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  percentageInput: null,
  formattedType: computed(function() {
    const type = this.get('type');
    if (type === 'percentage') {
      return type;
    }
    if (type === 'absolute') {
      return 'value';
    }
  }),
  formattedTarget: computed(function() {
    const target = this.get('target');
    if (target === 'items' || target === 'delivery') {
      return target;
    }
    if (target === 'total') {
      return 'whole basket';
    }
  }),
  percentageDiscount: computed(function() {
    return this.get('type') === 'percentage';
  }),
  absoluteDiscount: computed(function() {
    return this.get('type') === 'absolute';
  }),
  targetDiscount: computed('percentageInput', function() {
    this.set(`promotion.${this.get('target')}PercentageDiscount`, this.get('percentageInput'));
  }),
  nextLink: computed('promotion.modifiers', 'promotion.constraints', function() {
    if(this.get('promotion.modifiers').length == 0 && this.get('promotion.constraints').length == 1) {
      return 'promotions.draft.constraints';
    }
    return 'promotions.draft.overview';
  })
});
