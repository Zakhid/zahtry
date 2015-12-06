Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      level: $(e.target).find('[name=level]').val(),
      latitude: $(e.target).find('[name=latitude]').val(),
      longtitude: $(e.target).find('[name=longtitude]').val(),
      descr: $(e.target).find('[name=descr]').val(),
      kind: $(e.target).find('[name=kind]').val(),
      title: $(e.target).find('[name=title]').val()
    };
    
    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      // show this result but route anyway
      if (result.postExists)
        throwError('This link has already been posted');
      
      Router.go('postPage', {_id: result._id});  
    });
  }
});