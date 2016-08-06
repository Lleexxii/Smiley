userBot                     = KnuddelsServer.getDefaultBotUser(); App Bot wird hier definiert.

appPersistence              = KnuddelsServer.getPersistence();

appAccess                   = KnuddelsServer.getAppAccess();
appProfileEntryAccess       = KnuddelsServer.getAppProfileEntryAccess();

userAccess                  = KnuddelsServer.getUserAccess();

channel                     = KnuddelsServer.getChannel();
channelConfiguration        = channel.getChannelConfiguration();
channelRights               = channelConfiguration.getChannelRights();
channelInformation          = channelConfiguration.getChannelInformation();
channelModerators           = channelRights.getChannelModerators();

toplistAccess               = KnuddelsServer.getToplistAccess();


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
