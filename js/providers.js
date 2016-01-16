function GroupsProvider(source) {
  this.source = source;
}

// Fetches the groups, shuffles them and pushes them on the observable
GroupsProvider.prototype.fetchAndPushOn = function (observableArray) {

  $.getJSON(this.source, function (fetched) {
    var groups = $.map(fetched, function (item) { return new Group(item) });
    Utils.shuffle(groups).forEach(function (group) { observableArray.push(group) });
  });

};

function EventsProvider(source) {
  this.source = source;
}

EventsProvider.prototype.fetchAndPushOn = function (observableArray) {

  $.getJSON(this.source, function(data) {
    var events = $.map(data.items, function(item) { return new Event(item) });
    events.forEach(function (event) { observableArray.push(event); });
  });
};

