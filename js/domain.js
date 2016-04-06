function Group(data) {
  this.name = ko.observable(data.name);
  this.logo = ko.observable(data.logo);
  this.url = ko.observable(data.url);
  this.topics = ko.observable(data.topics);
}

function Event(data) {
  data.description = Utils.activateLinks(data.description);
  this.summary = ko.observable(data.summary);
  this.date = ko.observable(data.start.dateTime);
  this.description = ko.observable(data.description);
  this.htmlLink = ko.observable(data.htmlLink)
}

