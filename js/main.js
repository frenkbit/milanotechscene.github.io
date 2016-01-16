var groupsProvider = new GroupsProvider(Config.groupsSource);
var eventsProvider = new EventsProvider(Config.eventsSource);
var pageViewModel = new PageViewModel(groupsProvider, eventsProvider);

pager.extendWithPage(pageViewModel);
ko.applyBindings(pageViewModel);
pager.start();
