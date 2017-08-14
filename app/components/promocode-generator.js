import Ember from 'ember';
import fetch from 'fetch';
import ENV from '../config/environment';
import { inject } from '@ember/service';


export default Ember.Component.extend({
  apiHost: ENV.API_HOST,
  session: inject(),
  
  isAddingCode: false,
  newPromocode: {},
  savedPromocode: null,

  actions: {
    enterNewPromocode() {
      this.set('isAddingCode', true);
    },

    savePromocode() {
      const promocode = this.get('newPromocode');
      this.get('session').authorize('authorizer:devise', (authorizationHeader, token) => {
        fetch(`${this.get('apiHost')}/api/v1/promocodes/generate`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify({
            data: {
              type: 'promocodes',
              attributes: promocode,
              relationships: {
                promotion: {
                  type: 'promotions',
                  id: this.get('promotionId')
                }
              }
            }
          })
        })
        .then((response) => {
          if(response.ok) {
            response.json().then((json) => {
              this.set('isAddingCode', false);
              this.set('savedPromocode', json.data.attributes);
            });
          } else {
            //handle server error
          }
        })
        .catch((error) => {
          //handle client error
          console.log(error);
        });
      });
    }
  }
});
