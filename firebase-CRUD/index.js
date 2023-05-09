const express = require("express");
const User = require("./config");

const app = express();

app.use(express.json());

//creating user

app.post("/create", async (req, res) => {
  try {
    await User.doc().set({ ...req.body });
    res.json({ data: "created" });
  } catch (ex) {
    throw ex;
  }
});

//get all user
app.get("/", async (req, res) => {
  const users = await User.get();

  const all = users.docs.map((user) => ({ id: user.id, ...user.data() }));

  res.json({ status: "success", data: all });
});

//updating user

app.patch("/:id", async (req, res) => {
  const updatedUser = await User.doc(req.params.id).update({ ...req.body });
  res.send({ msg: "updated" });
});

//delete user
app.delete("/:id", async (req, res) => {
  const updatedUser = await User.doc(req.params.id).delete();
  res.send({ msg: "deleted" });
});

app.listen(3000, console.log(`listening on PORT ${3000}`));
