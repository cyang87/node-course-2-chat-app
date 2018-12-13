var socket = io();

socket.on("connect", function () {
  console.log("Connected to server");

  // socket.emit("createMessage", {
  //   from: "jeff@example.com",
  //   text: "Hi this is Jeff's message"
  // });
});

socket.on("newMessage", function (message) {
  console.log("New message", message);
});

socket.on("disconnect", function () {
  console.log("Disconnected from server");
});
