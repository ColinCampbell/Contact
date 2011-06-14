/*globals Contact */

Contact.ReadyState = SC.State.extend({

  initialSubstate: 'loading',

  enterState: function() {
    Contact.pane.append();
  },

  exitState: function() {
    Contact.pane.remove();
  },


  // ..........................................................
  // Substates
  // 

  loading: SC.State.design({
    _loaded: 0,
    _total: 0,

    enterState: function() {
      this._loaded = 0;
      this._total = 2;

      this._loadGroups();
      this._loadPeople();
    },

    exitState: function() {},

    dataLoaded: function() {
      this._loaded++;

      if (this._loaded === this._total) {
        this.get('statechart').sendAction('gotoNone');
      }
    },

    _loadGroups: function() {
      var query = SC.Query.local(Contact.Group),
          data = Contact.store.find(query);

      data.addObserver('status', this, function observer() {
        if (data.get('status') === SC.Record.READY_CLEAN) {
          data.removeObserver('status', this, observer);
          Contact.groupsController.set('content', data);
          this.get('statechart').invokeStateMethod('dataLoaded');
        }
        // might want to check error states too
      });

      // in case our data was already loaded (ie synchronous)
      data.notifyPropertyChange('status');
    },

    _loadPeople: function() {
      var query = SC.Query.local(Contact.Person),
          data = Contact.store.find(query);

      data.addObserver('status', this, function observer() {
        if (data.get('status') === SC.Record.READY_CLEAN) {
          data.removeObserver('status', this, observer);
          this.get('statechart').invokeStateMethod('dataLoaded');
        }
      });

      data.notifyPropertyChange('status');
    }
  }),

  none: SC.State.design({
    enterState: function() {
      console.log("Application ready");
    }
  }),


  // ..........................................................
  // Actions
  // 

  gotoNone: function() {
    this.gotoState('ready.none');
    return YES;
  }

});