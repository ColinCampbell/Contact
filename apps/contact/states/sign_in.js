/*globals Contact */

Contact.SignInState = SC.State.extend({

  initialSubstate: 'form',

  enterState: function() {
    Contact.signInPane.append();
  },

  exitState: function() {
    Contact.signInPane.remove();
  },

  form: SC.State.design({
    signIn: function() {
      var email = Contact.signInController.get('email'),
          password = Contact.signInController.get('password');

      if (SC.empty(email)) {
        alert("COMMON.BRO, enter an email");
      } else if (SC.empty(password)) {
        alert("COMMON.BRO, enter an password");
      } else {
        this.gotoState('signInRequest', {email: email, password: password});
      }
    }
  }),

  signInRequest: SC.State.design({
    enterState: function(context) {
      var email = context ? context.email : null,
          password = context ? context.password : null,
          statechart = this.get('statechart');

      // here is where you'd authenticate the user
      // we're just going to fire off an action
      // after we wait some time to simulate a request
      console.log("Checking log in for %@ with password: %@".fmt(context.email, context.password));

      this.invokeLater(function() {
        statechart.sendAction('signInSuccessful');
      }, 250);
    },

    signInSuccessful: function() {
      this.gotoState('ready');
    }
  })

});