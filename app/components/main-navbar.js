import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  session: inject(),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
