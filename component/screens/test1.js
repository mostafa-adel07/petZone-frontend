const vaccine1 = [
  {
    _id: "626541fe1935b590ded0fc1a",
    vaccineName: "newVaccine123",
    vaccineDescription: "healthy",
    required: true,
    recurring: true,
    recurringEvery: 3,
    forPets: "Dogs",
  },
  {
    _id: "62654f16a264754b3c508c6f",
    vaccineName: "newVaccine567",
    vaccineDescription: "healthy4",
    required: true,
    recurring: false,
    forPets: "Cats",
  },
  {
    _id: "6265797df9d0ccd3a23648bf",
    vaccineName: "newVacc",
    vaccineDescription: "healthy4",
    required: false,
    recurring: false,
    forPets: "Cats",
  },
  {
    _id: "626579a6f9d0ccd3a23648ca",
    vaccineName: "newVac11c",
    vaccineDescription: "healthy4",
    required: false,
    recurring: false,
    forPets: "Cats",
  },
];
vaccine.forEach((v) => {
  v["check"] = false;
});
console.log(vaccine);
