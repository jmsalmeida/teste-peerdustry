import Component from '@ember/component';
import { equal } from '@ember/object/computed';

export default Component.extend({
  layoutExpanded: false,

  actions: {
    toogleExpandedItem() {
      this.toggleProperty('layoutExpanded');
    }
  }
});
