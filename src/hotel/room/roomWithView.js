import Room from "./room.js";

class RoomWithView extends Room {
    view;
    numberOfBeds;

    constructor(floorNum, roomNum, price, isBooked, view = "", numberOfBeds = 0) {
        super(floorNum, roomNum, price, isBooked);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    }

    printRoom() {
        console.log("Room with view : ");
        super.printRoom();
        console.log(`view : ${this.view}, ` +
                    `numberOfBeds : ${this.numberOfBeds}`);
    }
}

export default RoomWithView;