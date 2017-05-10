var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={"started"}/>); // test actual DOM output that user sees
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)'); // jQuery filter of :contains

      expect($pauseButton.length).toBe(1); // .length on jQuery selector equals the number of components it found

    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={"paused"}/>); // test actual DOM output that user sees
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)'); // jQuery filter of :contains

      expect($startButton.length).toBe(1); // .length on jQuery selector equals the number of components it found

    });
  });
});
