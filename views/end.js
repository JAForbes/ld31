Views.End = Backbone.View.extend({
  className: 'end X',

  initialize: function(){
    this.$el.css({ width: '100', height: '400', textAlign: 'center'})
    this.render()

  },

  render: function(){
    var message = 'You Win!'
    var statistics = "Your win ratio is 0%"
    var retry = 'Try Again?'
    var menu = 'Main Menu'

    this.el.innerHTML = [
    '<p>',message,'</p>',
    '<p>',statistics,'</p>',
    '<p class="retry">',retry,'</p>',
    '<p class="menu">',menu,'</p>',
    ].join('')
  }

})
