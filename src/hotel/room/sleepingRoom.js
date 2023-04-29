import Room from "./room.js";

class SleepingRoom extends Room {
    personCapacity;

    constructor(floorNum, roomNum, price, isBooked, personCapacity) {
        super(floorNum, roomNum, price, isBooked);
        this.personCapacity = personCapacity;
    }

    printRoom() {
        console.log("Sleeping room : ");
        super.printRoom();
        console.log(`person capacity : ${this.personCapacity}`);
    }
}

export default SleepingRoom;