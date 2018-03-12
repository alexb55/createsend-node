var Subscriber = require('./subscriber.js');

module.exports = Subscribers;

function Subscribers(createsend) {
    this.createsend = createsend;
}

Subscribers.prototype = {
    addSubscriber: function (listId, details, callback) {
        return this.createsend.post('subscribers/' + listId + '.json', null, details);
    },

    deleteSubscriber: function (listId, emailAddress, callback) {
        return new Subscriber(this.createsend, listId, emailAddress).delete();
    },

    getSubscriberDetails: function (listId, emailAddress, callback) {
        return new Subscriber(this.createsend, listId, emailAddress).getDetails();
    },

    getSubscriberHistory: function (listId, emailAddress, callback) {
        return new Subscriber(this.createsend, listId, emailAddress).getHistory();
    },

    import: function (listId, subscribers, callback) {
        return this.createsend.post('subscribers/' + listId + '/import.json', null, subscribers);
    },

    unsubscribeSubscriber: function(listId, emailAddress, callback) {
        return new Subscriber(this.createsend, listId, emailAddress).unsubscribe();
    },

    updateSubscriber: function (listId, emailAddress, details, callback) {
        return new Subscriber(this.createsend, listId, emailAddress).update(details);
    }
};
