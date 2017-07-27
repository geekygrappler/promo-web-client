import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('promotions', function() {
    this.route('draft', function() {
      this.route('name');
      this.route('dates');
      this.route('modifiers', function() {
        this.route('items', function() {
          this.route('types');
          this.route('percentage');
          this.route('absolute');
        });
        this.route('delivery', function() {
          this.route('types');
          this.route('absolute');
          this.route('percentage');
        });
        this.route('total', function() {
          this.route('percentage');
          this.route('absolute');
          this.route('types');
        });
        this.route('targets');
      });
      this.route('constraints', function() {
        this.route('minimum-basket-total');
      });
      this.route('overview');
    });
  });
});

export default Router;
