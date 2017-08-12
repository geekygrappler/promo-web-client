import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Component.extend({
  discountInput: null,
  /**
   * For displaying Type
   * @return String 'percentage' or 'value'
   */
  formattedType: computed(function() {
    const type = this.get('type');
    if (type === 'percentage') {
      return type;
    }
    if (type === 'absolute') {
      return 'value';
    }
  }),

  /**
   * For displaying target
   * @return string 'items', 'delivery' or 'whole basket'
   */
  formattedTarget: computed(function() {
    const target = this.get('target');
    if (target === 'items' || target === 'delivery') {
      return target;
    }
    if (target === 'total') {
      return 'whole basket';
    }
  }),

  /**
   * Allows template to determine if it's percentage discount
   * @return boolean
   */
  percentageDiscount: computed(function() {
    return this.get('type') === 'percentage';
  }),

  /**
   * Allows template to determine if it's an absolute discount
   * @return boolean
   */
  absoluteDiscount: computed(function() {
    return this.get('type') === 'absolute';
  }),

  /**
   * Sets the target + type discount property
   * Adds the appropriate modifier to the modifiers
   * @return void
   */
  targetDiscount: computed('discountInput', function() {
    this.set(`promotion.${this.get('target') + this.get('type').capitalize()}Discount`, this.get('discountInput'));
    this.get('promotion').addModifier(`${this.get('target').capitalize() + this.get('type').capitalize()}Modifier`);
  }),

  /**
   * If we've only got one constraint (Time Period) and one modifier (this one), then need to show
   * the constraints route, otherwise show the overview.
   * @return string path for link-to helper
   */
  nextLink: computed('promotion.modifiers', 'promotion.constraints', function() {
    if(this.get('promotion.modifiers').length == 1) {
      return 'promotions.draft.constraints';
    }
    return 'promotions.draft.overview';
  }),

  actions: {
    submit() {
      this.attrs.transition(this.get('nextLink'));
    }
  }
});
