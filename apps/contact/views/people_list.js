/*globals Contact */

Contact.PeopleList = SC.TemplateCollectionView.extend({

  classNames: ['people-list'],

  itemViewClass: SC.Button.extend({
    action: 'showPerson',
    classNames: ['person'],
    template: SC.Handlebars.compile('<div class="button">{{content.fullName}}</div>')
  })

});