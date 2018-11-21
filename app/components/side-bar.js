import Component from '@ember/component';

export default Component.extend({
  layoutExpanded: false,

  actions: {
    toogleExpandedItem() {
      this.toggleProperty('layoutExpanded');
    }
  }
});
