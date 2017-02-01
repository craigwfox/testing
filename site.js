  $('.dob-field').on('input', function() {
    $(this).on('keyup', function(e) {
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

  if(key == 8 || key == 46) {
    alert('delete pressed');
  }

  $(".inputTxt").bind("keypress keyup keydown", function (event) {
    var evtType = event.type;
    var eWhich = event.which;
    var echarCode = event.charCode;
    var ekeyCode = event.keyCode;

    switch (evtType) {
        // case 'keypress':
        //     $("#log").html("<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<br>");
        //     break;
        case 'keyup':
            $("#log").html("<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<p>");
            break;
        // case 'keydown':
        //     $("#log").html("<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<br>");
        //     break;
        default:
            break;
    }
  });
