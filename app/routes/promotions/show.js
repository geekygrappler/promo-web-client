import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('promotion', params.id).then((promotion) => {
      console.log('hi');
    }).catch((error) => {
      console.log(error);
    });
  }
});
