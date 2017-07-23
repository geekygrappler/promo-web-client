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
      this.route('modifiers');
    });
  });
});

export default Router;
