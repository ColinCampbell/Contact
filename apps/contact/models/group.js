/*globals Contact */

Contact.Group = SC.Record.extend({

  name: SC.Record.attr(String),

  people: SC.Record.toMany('Contact.Person', {inverse: 'group'})

});