module.exports = Subscriber;

function Subscriber(createsend, listId, emailAddress) {
    this.createsend = createsend;
    this.listId = listId;
    this.emailAddress = emailAddress;
}

Subscriber.prototype = {
    delete: function (callback) {
        return this.createsend.delete('subscribers/' + this.listId + '.json', { 'email': this.emailAddress }, null);
    },

    getDetails: function (callback) {
        return this.createsend.get('subscribers/' + this.listId + '.json', { 'email': this.emailAddress }, null);
    },

    getHistory: function (callback) {
        return this.createsend.get('subscribers/' + this.listId + '/history.json', { 'email': this.emailAddress }, null);
    },

    unsubscribe: function (callback) {
        return this.createsend.post('subscribers/' + this.listId + '/unsubscribe.json', null, { 'EmailAddress': this.emailAddress });
    },

    update: function (details, callback) {
        return this.createsend.put('subscribers/' + this.listId + '.json', { 'email': this.emailAddress }, details);
    }
};
