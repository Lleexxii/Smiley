userBot                     = KnuddelsServer.getDefaultBotUser(); // Definition: Bot

appPersistence              = KnuddelsServer.getPersistence(); // Definition: Persistence

appProfileEntryAccess       = KnuddelsServer.getAppProfileEntryAccess(); // Definition: App Profil Entry Access

appAccess                   = KnuddelsServer.getAppAccess(); // Definition: App Access
ownInstance                 = KnuddelsServer.getAppAccess().getOwnInstance(); // Definition: Own Instance
rootInstance                = ownInstance.getRootInstance(); // Definition: Root Instance
appInfo                     = ownInstance.getAppInfo(); // Definition: App Info

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
this.onAppEventReceived = function(appInstance, type, data) {};
this.onEventReceived = function (user, type, data) {};
//this.onUserDiced = function(diceEvent) {};
this.onBeforeKnuddelReceived = function(knuddelTransfer) {};
this.onKnuddelReceived = function(sender, receiver, knuddelAmount, transferReason) {};
this.onAccountReceivedKnuddel = function(sender, receiver, knuddelAmount, transferReason, knuddelAccount) {};
this.onAccountChangedKnuddelAmount = function(user, knuddelAccount, oldKnuddelAmount, newKnuddelAmount) {};

this.chatCommands = {
HelpMe: function(user, cmd) {},
Interface: function(user, params, cmd) {},
// /Börse [Buy/Sell/Trade/Rent] [Smiley/Feature] [Syntax]

// /Buy [Smiley/Feature] [Syntax] [Give]
// /Sell [Smiley/Feature] [Syntax] [Give]
// /Trade [Smiley/Feature] [Syntax] [Want]
// /Rent [Smiley/Feature] [Syntax] [Give]
Börse: function(user, params, object, syntax, action, cmd) {},
Toplist: function(user, value, cmd) {},
Konto: function(user, params, cmd) {},
Welcome: function(user, params, value, cmd) {},
Newsletters: function(user, params, value, cmd) {},
Spam: function(user, params, mode, timer, value, cmd) {},
Bot: function(user, params, value, cmd) {},
Topic: function(user, params, value, cmd) {},
Config: function(user, params, value, cmd) {},
Update: function(user, cmd) {},
AppInfo: function(user, cmd) {},
AppStats: function(user, cmd) {},
AppUpdate: function(user, cmd) {},
};

}());
