/*globals Contact */


/**
  @class
  @extends SC.Record
*/
Contact.Person = SC.Record.extend(
/** @scope Contact.Person.prototype */{

  /**
    @type String
    @default "Señor"
  */
  firstName: SC.Record.attr(String, {defaultValue: "Señor"}),

  /**
    @field
    @type String
    @default null
  */
  fullName: function() {
    var firstName = this.get('firstName'),
        lastName = this.get('lastName');

    return firstName + ' ' + lastName;
  }.property('firstName', 'lastName').cacheable(),

  /**
    @type Contact.Group
    @default null
  */
  group: SC.Record.toOne('Contact.Group', {inverse: 'people'}),

  /**
    @type String
    @default null
  */
  lastName: SC.Record.attr(String)

});