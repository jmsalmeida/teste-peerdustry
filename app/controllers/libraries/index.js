import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteLibrary(library) {
      let confirmation = confirm('Are you sure');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }
});
