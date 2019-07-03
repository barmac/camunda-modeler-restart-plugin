'use strict';

module.exports = function(electronApp) {
  return [
    {
      label: 'Restart app',
      accelerator: 'CmdOrCtrl+Shift+R',
      action: function() {
        electronApp.emit('restart', []);
      }
    }
  ];
};
