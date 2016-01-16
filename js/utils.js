var Utils = {

  shuffle: function (array) {
    var counter = array.length, temp, index;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  },

  urlRegex: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig,

  makeLink: function (string) {
    return "<a target=\"_blank\" href=\"" + string + "\">" + string + "</a>";
  },

  activateLinks: function (string) {
    return string && string.replace(Utils.urlRegex, Utils.makeLink) || string;
  }

};
