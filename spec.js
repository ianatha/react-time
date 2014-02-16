var assert = require('assert');
var Timestamp = require('./index');
var React = require('react');

describe('react-time', function() {
  var date = new Date('1987-05-08T05:00:00+05:00');

  it('renders date', function() {
    var c = Timestamp({value: date});
    React.renderComponentToString(c, function(markup) {
      assert(/1987\-05\-08/.test(markup));
    });
  });

  it('renders date in specified format', function() {
    var c = Timestamp({value: date, format: "%Y%Y"});
    React.renderComponentToString(c, function(markup) {
      assert(/datetime="1987\-05\-08T05:00:00\+05:00"/.test(markup));
      assert(/19871987/.test(markup));
    });
  });

  it('renders date using relative format', function() {
    var c = Timestamp({value: date, relative: true});
    React.renderComponentToString(c, function(markup) {
      assert(/datetime="1987\-05\-08T05:00:00\+05:00"/.test(markup));
      assert(/May  8th, 1987/.test(markup));
    });
  });

  it('transfers props down to DOM element', function() {
    var c = Timestamp({value: date, relative: true, className: 'className'});
    React.renderComponentToString(c, function(markup) {
      assert(/May  8th, 1987/.test(markup));
      assert(/class="className"/.test(markup));
    });
  });
});
