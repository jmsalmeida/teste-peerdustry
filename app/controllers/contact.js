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
      const email = this.get('emailAddress');
      const message = this.get('message')
      const newReqContact = this.store.createRecord('contact', { email: email, message: message });

      newReqContact.save().then(response => {
        this.set('responseMessage', `We got your message and we’ll get in touch soon`);
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }
    
  }
});
