/*globals Contact */

Contact.ReadyState = SC.State.extend({

  enterState: function() {
    Contact.pane.append();
  },

  exitState: function() {
    Contact.pane.remove();
  }

});