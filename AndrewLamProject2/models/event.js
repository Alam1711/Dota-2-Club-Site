const { DateTime } = require("luxon");
const { v4: uuidv4 } = require("uuid");
const events = [
  {
    id: "1",
    title: "Dota 2 Spring 2023 Tournament",
    picture: "../../images/tourny.png",
    food: "There will Moose Cheese be provided",
    location: "Denny 105",
    requiredRank: "Ancient",
    category: "Tournament",
    content:
      "Dota 2 is a premier esports title, featuring some of the biggest esports prize pools to date. Every tournament attracts thousands of fans and spectators, while Dota 2 betting is one of the biggest esports betting markets out there. Dota News Dota Betting Dota Tournaments Dota Guides Best Dota 2 Players.",
    author: "Andrew",
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
  },
  {
    id: "2",
    title: "Dota 2 Rookie GameLeap Training Session",
    picture: "../../images/Gameleap.jpg",
    food: "There will white truffles be provided",
    location: "Fretwell 123",
    requiredRank: "Herald",
    category: "Training",
    content:
      "Join our community of over 550K gamers. Start Winning. Watch over 800 value-packed guides by Pro Players.",
    author: "Johan",
    createdAt: DateTime.local(2023, 2, 12, 18, 0).toLocaleString(
      DateTime.DATETIME_SHORT
    ),
  },
  {
    id: "3",
    title: "The International",
    picture: "../../images/dpcTourny.png",
    food: "There will be Ayam Cemani Black Chicken provided",
    location: "Rowe 108",
    requiredRank: "Immortal",
    category: "Tournament",
    content:
      "The International (TI) is an annual world championship tournament for the five-on-five esports video game Dota 2.",
    author: "Valve",
    createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(
      DateTime.DATETIME_SHORT
    ),
  },
  {
    id: "4",
    title: "Dota Dash Off",
    picture: "../../images/dpcTourny.png",
    food: "There will be Jamón Ibérico provided",
    location: "Belk Lobby",
    requiredRank: "Immortal",
    category: "Tournament",
    content:
      "All intermediente players come out and test your skill against other your skill level! Duke it out in a best of 3 single elimination style tournament!",
    author: "Noelle Nyguen",
    createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(
      DateTime.DATETIME_SHORT
    ),
  },
  {
    id: "5",
    title: "Moving to Guardian",
    picture: "../../images/dpcTourny.png",
    food: "There will be Saffron provided",
    location: "Aspen Heights",
    requiredRank: "Herald",
    category: "Training",
    content:
      "Ready to take that next level leap to Guardian I? Join me, Andrew Lam on the thrilling Journey to ranking up!",
    author: "Andrew Lam",
    createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(
      DateTime.DATETIME_SHORT
    ),
  },
  {
    id: "6",
    title: "Tutorial Rehash",
    picture: "../../images/dpcTourny.png",
    food: "There will be Kopi Luwak provided",
    location: "Crossway Community Church",
    requiredRank: "None",
    category: "Training",
    content:
      "Is this your first time playing a MOBA style game? Awesome, gotta start somewhere. Come join us on an adventure to discovering new Horizons in Dota 2!",
    author: "Benjamin Zhu",
    createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(
      DateTime.DATETIME_SHORT
    ),
  },
];

//Function to get a list of events
exports.find = () => {
  return events;
};

exports.findById = (id) => events.find((event) => event.id === id);

exports.save = function (event) {
  event.id = uuidv4();
  event.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
  events.push(event);
};

exports.updateById = function (id, newEvent) {
  let event = events.find((event) => event.id === id);
  if (event) {
    event.title = newEvent.title;
    event.content = newEvent.content;
    return true;
  } else {
    return false;
  }
};

exports.deleteById = function (id) {
  let index = events.findIndex((event) => event.id === id);
  if (index !== -1) {
    events.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

//File upload

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const mimeTypes = ["image/jpeg", "image/png", "image/gif"];

  if (mimeTypes.includes(file.mimetype)) {
    return cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only jpeg, jpg, png and gif image files are allowed."
      )
    );
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: fileFilter,
}).single("image");
