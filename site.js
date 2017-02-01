$('.dob-field').on('input', function() {

  $(this).on('keydown', function(e) {
    var v = this.value;
    var key = event.keyCode || event.charCode;

    if(key == 8 || key == 46) {
    }else {
      if (v.match(/^\d{2}$/) !== null) {
          this.value = v + '/';
      } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
          this.value = v + '/';
      }
    }
  });

});