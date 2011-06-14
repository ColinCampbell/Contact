// ==========================================================================
// Project:   Contact
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Contact */

Contact = SC.Application.create({
  store: SC.Store.create().from(SC.Record.fixtures)
});

SC.ready(function() {
  Contact.mainPane = SC.TemplatePane.append({
    layerId: 'contact',
    templateName: 'contact'
  });
});
