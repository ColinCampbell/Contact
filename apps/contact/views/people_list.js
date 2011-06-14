/*globals Contact */

sc_require('views/person_list_item');

Contact.PeopleList = SC.TemplateCollectionView.extend({

  classNames: ['people-list'],

  itemViewClass: SC.Button.extend({
    action: 'personSelected',
    template: SC.Handlebars.compile('<div class="button">{{content.name}}')
  })

});