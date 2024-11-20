const db = require("../db/queries")

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
//   res.send("Usernames: " + usernames.map(user => user.username).join(", "));
  res.render("index", { usernames, title: "Usernames Database" });
}

async function createUsernameGet(req, res) {
  res.render("createUsername", { title: "Add Username" });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function search(req, res) {
  const { search } = req.query;
  const usernames = search ? await db.searchUsernames(search) : [];
  res.render("search", { usernames, title: "Search Results" });
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  search
};
