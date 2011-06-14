// ==========================================================================
// Project:   Contact
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Contact */

Contact = SC.Application.create();

SC.ready(function() {
  Contact.mainPane = SC.TemplatePane.append({
    layerId: 'contact',
    templateName: 'contact'
  });
});
