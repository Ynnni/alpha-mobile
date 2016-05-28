import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    save() {
      this.currentModel.save().then(
        () => this.transitionTo('user.accounts'),
        () => console.log('Failed to save the model')
      );
    },

    willTransition() {
      this._super(...arguments);
      const record = this.controller.get('model');
      record.rollbackAttributes();
    },
  },

});
