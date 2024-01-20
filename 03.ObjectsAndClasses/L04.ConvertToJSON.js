function objectCreator(name, lastName, hairColor) {
  const person = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  console.log(JSON.stringify(person));
}

objectCreator("George", "Jones", "Brown");
