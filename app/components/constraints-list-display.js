import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
  constraintsWithoutPromotionPeriodConstraint: computed('constraints', function() {
    return this.get('constraints').filter((constraint) => constraint !== 'TimePeriodConstraint');
  })
});
