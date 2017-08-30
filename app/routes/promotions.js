import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    savePromotion(promotion) {
      promotion.save()
      .then((persistedPromotion) => {
        this.transitionTo('promotions.show', persistedPromotion);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    deletePromotion(promotion) {
      promotion.destroyRecord()
      .then(() => this.transitionTo('promotions.index'));
    }
  }
});
