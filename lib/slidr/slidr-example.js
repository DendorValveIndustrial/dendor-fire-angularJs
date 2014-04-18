$(function() {
  var s = slidr.create('slider', {
    after: function(e) { console.log('in: ' + e.in.slidr); },
    before: function(e) { console.log('out: ' + e.out.slidr); },
    breadcrumbs: true,
    controls: 'none',
    transition: 'cube',
    overflow: true,
    pause: true
  })
  .add("h", ["one", "two", "three", "one"]);
  s.auto(10000, 'right');
});

