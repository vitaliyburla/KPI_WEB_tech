class User {
    constructor(id, username, password, name, group, variant, phone) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.group = group;
        this.variant = variant;
        this.phone = phone;
    }
}

module.exports = User;
