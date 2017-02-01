jQuery(document).ready(function() {
  $('.dob-field').on('input', function() {
    $(this).on('keydown', function(e) {
      var v = this.value;
      var key = event.keyCode || event.charCode;
      if(key == 8 || key == 46) {
      } else {
        if (v.match(/^\d{2}$/) !== null) {
            this.value = v + '/';
        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
            this.value = v + '/';
        }
      }
    });
  });



  var element = $('input');
  //keyboard maping array   
  var keyboardMap = ["", "", "", "CANCEL", "", "", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "RETURN", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION_MARK", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "WIN", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "", "", "COMMA", "", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];

  //Allowed keys as per your requirement          
  var allowedKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "DELETE", "BACK_SPACE"];

  var keyDel = ["DELETE", "BACK_SPACE"];

  //bind keydown to your element
  element.on("keydown", function (e) {
    var key = e.charCode || e.keyCode || 0;
    var keyValue = keyboardMap[key];

    if ($.inArray(keyValue, keyDel) !== -1) {
      console.log('deleteing');
      $('#log').html('deleteing');
      return true;
    } else if ($.inArray(keyValue, allowedKey) !== -1){
      console.log('allowed');
      $('#log').html('allowed');
      return true;
    }
    else{
      console.log('not allowed');
      $('#log').html('not allowed');
      return  false;
    }
  })
});

  // var detectDelete = function(event) {
  //   var key = event.keyCode || event.charCode;
  //   if(key == 8 || key == 46) {
  //     alert('delete pressed');
  //   }
  // };
  // detectDelete();

  // $(".inputTxt").bind("keypress keyup keydown", function (event) {
  //   var evtType = event.type;
  //   var eWhich = event.which;
  //   var echarCode = event.charCode;
  //   var ekeyCode = event.keyCode;

  //   switch (evtType) {
  //       // case 'keypress':
  //       //     $("#log").html("<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<br>");
  //       //     break;
  //       case 'keyup':
  //           $("#log").html("<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<p>");
  //           break;
  //       // case 'keydown':
  //       //     $("#log").html("<b>" + evtType + "</b>" + " keycode: " + ekeyCode + " charcode: " + echarCode + " which: " + eWhich + "<br>");
  //       //     break;
  //       default:
  //           break;
  //   }
  // });

