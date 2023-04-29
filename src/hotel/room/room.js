class Room {
    floorNum;
    roomNum;
    price;
    #isBooked;

    constructor(floorNum = 0, roomNum = 0, price = 0, isBooked = false) {
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked = isBooked;
    }

    printRoom() {
        console.log(`The room in the floor number ${this.floorNum}, ` +
        `room number is ${this.roomNum}, ` +
        `price is ${this.price}, ` +
        `and book status is ${this.isBooked() ? "Booked" : "Available"}`);
    }

    book() {
        if(!this.isBooked()){
            this.#isBooked = true;
        }
    }

    isBooked() {
        return this.#isBooked;
    }
}

export default Room;