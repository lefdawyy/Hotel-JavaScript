import Hotel from "./hotel/hotel.js";
import RoomWithView from "./hotel/room/roomWithView.js";
import SleepingRoom from "./hotel/room/sleepingRoom.js";

let rooms = [
    new SleepingRoom(0, 10, 50, false, 3),
    new SleepingRoom(1, 10, 100, false, 3),
    new SleepingRoom(2, 10, 150, false, 3),
    new RoomWithView(0, 20, 100, false, "Eiffel Tower", 2),
    new RoomWithView(1, 20, 200, false, "Eiffel Tower", 1),
    new RoomWithView(2, 20, 300, false, "Eiffel Tower", 2),
    new RoomWithView(2, 30, 300, false, "Eiffel Tower", 1)
]

let jehadHotel = new Hotel("Paris", -4, 6, rooms);

jehadHotel.rooms[0].book()
jehadHotel.rooms[3].book()
jehadHotel.rooms[5].book()
jehadHotel.rooms[6].book()

jehadHotel.rooms[2].printRoom()

jehadHotel.printAdvertisement();
jehadHotel.listBookedRooms();