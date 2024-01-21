const users = [
  {
    name: "nathanlsdev",
    location: "c-137",
    bio: "front-end developer",
  },
  {
    name: "rod",
    location: "PE",
    bio: "something",
  },
  {
    name: "Derp",
    location: "SP",
    bio: "Teacher",
  },
];

localStorage.setItem("users", JSON.stringify(users));

const storageData = localStorage.getItem("users");
console.log(storageData);

const convertData = JSON.parse(storageData);
console.log(convertData);