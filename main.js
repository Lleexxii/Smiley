var App = (new function () {

this.onAppStart = function() {};
this.onShutdown = function() {};
this.onPrepareShutdown = function(secondsTillShutdown) {};
this.mayJoinChannel = function(user) {};
this.onUserJoined = function(user) {};
this.onUserLeft = function(user) {};
this.mayShowPublicMessage = function(publicMessage) {};
this.onPublicMessage = function(publicMessage) {};
this.mayShowPublicActionMessage = function(publicActionMessage) {};
this.onPublicActionMessage = function(publicActionMessage) {};
this.onPublicEventMessage = function(publicEventMessage) {};
this.onPrivateMessage = function(privateMessage) {};
this.onEventReceived = function (user, type, data) {};
this.onKnuddelReceived = function(sender, receiver, knuddelAmount, transferReason) {};
this.chatCommands = {};

}());
