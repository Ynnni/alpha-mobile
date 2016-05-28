import Ember from 'ember';
import SaveModelMixin from 'alpha-mobile/mixins/accounts/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('account');
  }
});
