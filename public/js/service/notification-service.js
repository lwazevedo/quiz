angular.module('dzQuiz').service('notificationService', function ($timeout) {
  var _this = this;

  this.notifications = [];

  this.notify = function (type, message) {
    this.notifications.push({
      type: type,
      message: message
    });

    $timeout(function () {
      _this.notifications.splice(0, 1);
    }, 4000);
  };

  this.notifyError = function (message) {
    this.notify('error', message);
  };
});
