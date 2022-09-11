function whosPaying(names) {
  var names = ["Ben", "Jenny", "Michael", "Chloe"];
  var numberOfPerson = names.length;
  var randomPosition = Math.floor(Math.random() * numberOfPerson);
  var randomPerson = names[randomPosition];
  console.log(`${randomPerson} is going to buy somethig today!`);
}

whosPaying();
