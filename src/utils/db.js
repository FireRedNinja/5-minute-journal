const level = require("level");



export const getAllItems = () => {
  const db = level("./database");
  let items = [];
  db.createReadStream()
    .on("data", function(data) {
      items.push(data);
    })
    .on("error", function(err) {
      console.log("Oh my!", err);
    })
  db.close()
  return items;
};

export const saveDay = entry => {
  const db = level("./database");
  db.put(entry.date, entry.response);
  db.close()
};

export const loadDay = date => {
  const db = level("./database");
  db.get(date).then(data => data);
  db.close()
};

const saveNight = entry => {};

const loadNight = () => {};

