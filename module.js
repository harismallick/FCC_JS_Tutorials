export default function playGuitar() {
    return "Playing guitar!";
}

export function shredding() {
    return "Shredding some licks!";
}

export const plucking = () => {
    return "Plucking the strings..."
}

// Another way of exporting functions without writing 'export' when defining the function --> write it at the end.

// export default playGuitar;
// export { shredding, plucking };

// can export classes as well //

export class nameEmail {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    greeting() {
        return `Hi, my name is ${this.name}`;
    }
}
