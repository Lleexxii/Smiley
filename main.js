userBot                     = KnuddelsServer.getDefaultBotUser(); // Definition: Bot

appPersistence              = KnuddelsServer.getPersistence(); // Definition: Persistence

appAccess                   = KnuddelsServer.getAppAccess(); // Definition: App Access
appProfileEntryAccess       = KnuddelsServer.getAppProfileEntryAccess(); // Definition: App Profil Entry Access

userAccess                  = KnuddelsServer.getUserAccess(); // Definition: User Access

channel                     = KnuddelsServer.getChannel(); // Definition: Channel
channelConfiguration        = channel.getChannelConfiguration(); // Definition: Channel Configuration
channelRights               = channelConfiguration.getChannelRights(); // Definition: Channel Rights
channelInformation          = channelConfiguration.getChannelInformation(); // Definition: Channel Information
channelModerators           = channelRights.getChannelModerators(); // Definition: Channel Moderators

toplistAccess               = KnuddelsServer.getToplistAccess(); // Definition: Toplist Access


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
