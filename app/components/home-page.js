import Ember from 'ember';
import { inject } from '@ember/service';

export default Ember.Component.extend({
  session: inject()
});
