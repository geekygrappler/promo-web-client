import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        setDate(field, date) {
            this.get('promotion').set(field, date);
        }
    }
});
