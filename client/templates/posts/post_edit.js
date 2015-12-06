Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var currentPostId = this._id;
    
    var postProperties = {
      title: $(e.target).find('[name=title]').val(),
      kind: $(e.target).find('[name=kind]').val(),
      descr: $(e.target).find('[name=descr]').val(),
      longtitude: $(e.target).find('[name=longtitude]').val(),
      latitude: $(e.target).find('[name=latitude]').val(),
      level: $(e.target).find('[name=level]').val()
    }
    
    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },
  
  'click .delete': function(e) {
    e.preventDefault();
    
    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});
