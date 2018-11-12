import { lte, not, or } from '@ember/object/computed';
import Component from '@ember/component';

const MAX_VALUE = 100;

export default Component.extend({

  counter: null,

  isCounterValid: lte('counter', MAX_VALUE),
  isCounterNotValid: not('isCounterValid'),
  placeholder: `Max ${MAX_VALUE}`,

  generateReady: false,
  deleteReady: false,

  generateInProgress: false,
  deleteInProgress: false,

  generateIsDisabled: or('isCounterNotValid', 'generateInProgress', 'deleteInProgress'),
  deleteIsDisabled: or('generateInProgress', 'deleteInProgress'),

  actions: {

    generateAction(generateAction) {
      if (this.get('isCounterValid')) {

        // Action up to Seeder Controller with the requested amount
        // this.sendAction('generateAction', this.get('counter'));
        this.get('sendAction')(generateAction);
        this.get('counter');
      }
    },

    deleteAction(deleteAction) {
      this.get('sendAction')(deleteAction)
    }

  }
  
});
