import Room from "./room/room.js";

class Hotel {
    address;
    numberOfRooms;
    #minFloor;
    #maxFloor;
    rooms;

    constructor(address = "", minFloor = 0, maxFloor = 0, rooms = []) {
        this.address = address;
        this.numberOfRooms = rooms.length;
        this.#minFloor = minFloor;
        this.#maxFloor = maxFloor;
        this.rooms = rooms;
    }

    printAdvertisement() {
        let floors = 0;
        for (let i = this.#minFloor; i <= this.#maxFloor; i++) {
            floors++;
        }
        console.log(`Welcome to our gergeous hotel in ${this.address}, ` +
                    `We have ${floors} floors, ` +
                    `and ${this.numberOfRooms} rooms available for booking, ` +
                    `visit us now, what you waiting for?`);
    }

    listBookedRooms() {
        console.log("The booked rooms : ")
        this.rooms.forEach(room => {
            if(room.isBooked())
                room.printRoom();
        });
    }
}

export default Hotel;