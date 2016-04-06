function PageViewModel(groupsProvider, eventsProvider) {

  this.showContactForm = ko.observable(true);
  this.showThankYou = ko.observable(false);
  this.groups = ko.observableArray();
  this.events = ko.observableArray();
 
  groupsProvider.fetchAndPushOn(this.groups);
  eventsProvider.fetchAndPushOn(this.events);

}

