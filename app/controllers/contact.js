import Controller from '@ember/controller';
import { match, not, and, gte } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  message: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte('message.length', 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),

  actions: {
    saveMessage() {
      alert(`Send message: ${this.get('message')}\n from user: ${this.get('emailAddress')}`);
      this.set('successMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
    
  }
});
