'use strict';

var React = require('react-native');
var {
	NativeModules,
	Platform
} = React;

let IntercomWrapper = NativeModules.IntercomWrapper;

/**
 * @class IntercomClient
 */

class IntercomClient {
	registerIdentifiedUser(options) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.registerIdentifiedUser(options, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	updateUser(options) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.updateUser(options, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	registerUnidentifiedUser() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.registerUnidentifiedUser(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	reset() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.reset(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	logEvent(eventName, metaData) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.logEvent(eventName, metaData, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	displayMessageComposer() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.displayMessageComposer(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	displayConversationsList() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.displayConversationsList(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	setVisibility(visibilityString) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setVisibility(visibilityString, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	setPreviewPosition(positionString) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setPreviewPosition(positionString, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	setupAPN(deviceToken) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setupAPN(deviceToken, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}


	setupGCM(deviceToken) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setupGCM(deviceToken, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	setupPushToken(deviceToken) {
		if (Platform.OS === 'ios') {
			return this.setupAPN(deviceToken);
		} else {
			return this.setupGCM(deviceToken);
		}
	}

	registerForPush() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.registerForPush(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	setHMAC(hmac, data) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setHMAC(hmac, data, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}
}

module.exports = new IntercomClient();
