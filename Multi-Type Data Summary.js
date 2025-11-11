let userName = "Krati";
let userAge = 22;
let isActive = true;
let skills = ["HTML", "CSS", "JS"];
let address = { city: "Delhi", pincode: 110001 };
let lastLogin = null;
let phoneNumber;

let dataSummary = [
  { label: "User Name", value: userName, type: typeof userName },
  { label: "User Age", value: userAge, type: typeof userAge },
  { label: "Is Active", value: isActive, type: typeof isActive },
  { label: "Skills", value: skills, type: Array.isArray(skills) ? "array" : typeof skills },
  { label: "Address", value: address, type: typeof address },
  { label: "Last Login", value: lastLogin, type: typeof lastLogin },
  { label: "Phone Number", value: phoneNumber, type: typeof phoneNumber }
];

console.table(dataSummary);
