jQuery.(document).ready(function() {
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

  $(".inputTxt").bind("keypress keyup keydown", function (event) {
    var evtType = event.type;
    var eWhich = event.which;
    var echarCode = event.charCode;
    var ekeyCode = event.keyCode;

    switch (evtType) {
        case 'keypress':
            $("#log").html($("#log").html() + "<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<br>");
            break;
        case 'keyup':
            $("#log").html($("#log").html() + "<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<p>");
            break;
        case 'keydown':
            $("#log").html($("#log").html() + "<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<br>");
            break;
        default:
            break;
    }
  });
});