import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  hasPromotions: computed('promotions', function() {
    const promotions = this.get('promotions');
    return promotions.get('length') > 0;
  }),

  noPromotions: computed('hasPromotions', function() {
    return !this.get('hasPromotions');
  })
});
