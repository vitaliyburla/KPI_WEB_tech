const fs = require('fs');

const dbPath = __dirname + '/users.json';

class Database {
    getUsers = () => {
        return JSON.parse(fs.readFileSync(dbPath, 'utf8') || '[]');
    };
    addUser = (user) => {
        const users = this.getUsers();
        fs.writeFileSync(dbPath, JSON.stringify([...users, user]), 'utf-8');
    };
    getUser = (username) => {
        const users = this.getUsers();
        return users.find((u) => u.username === username);
    };
    removeUser = (id) => {
        const users = this.getUsers();
        fs.writeFileSync(
            dbPath,
            JSON.stringify(users.filter((u) => u.id !== id)),
            'utf-8'
        );
    };
}

module.exports = Database;
