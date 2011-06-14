// ==========================================================================
// Project:   Contact
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Contact */

Contact = SC.Application.create({
  store: SC.Store.create().from('Contact.FixturesDataSource')
});

Contact.statechart = SC.Statechart.create({

  autoInitStatechart: NO,

  rootState: SC.State.design({
    initialSubstate: 'ready',

    signIn: SC.State.plugin('Contact.SignInState'),
    ready: SC.State.plugin('Contact.ReadyState')
  })

});

Contact.pane = SC.Pane.create({
  layout: {centerX: 0, centerY: 0, height: 400, width: 800},
  childViews: ['sidebar', 'contentView'],
  defaultResponder: 'Contact.statechart',

  // This is wrapped in a SC.View so we have our layout defined
  // in one place. If you wanted, you could just have the SC.TemplateView
  // here and define its width in CSS
  sidebar: SC.View.design({
    layout: {width: 200},
    childViews: ['sidebar'],

    sidebar: SC.TemplateView.design({
      classNames: ['sidebar'],
      templateName: 'sidebar'
    })
  }),

  contentView: SC.ContainerView.design({
    layout: {left: 200},
    autoResizeStyle: SC.RESIZE_AUTOMATIC,
    nowShowingBinding: 'Contact.displayController.nowShowing'
  })
});

Contact.groupView = SC.TemplateView.create({
  contentBinding: 'Contact.groupController',
  templateName: 'group'
});

Contact.personView = SC.TemplateView.create({
  contentBinding: 'Contact.personController',
  templateName: 'person'
});

SC.ready(function() {
  Contact.statechart.initStatechart();
});
