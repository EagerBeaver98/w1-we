const nameInverter = function(name) {
  if (name === '') {
    return '';
  }
  if (name === undefined) {
    return "Error";
  }
  let temp = name;
  if (temp[0] === " ") {
    let newName = temp.split("");
    newName.shift();
    temp = newName.join("");
  }
  if (temp[temp.length - 1] === " ") {
    let newName = temp.split("");
    newName.pop();
    temp = newName.join("");
  }
  if (temp.split(" ").length === 1 && temp.split("")[2] === ".") {
    return "";
  }
  if (temp.split(" ").length === 2 && temp.split(" ")[0][2] !== ".") {
    let newName = temp.split(" ").reverse();
    temp = newName.join(", ");
  }
  if (temp.split(" ").length === 3) {
    let firstName = temp.split(" ")[1];
    let lastName = temp.split(" ")[2];
    let honorfic = temp.split(" ")[0];
    temp = `${honorfic} ${lastName}, ${firstName}`;
  }
  return temp;
};

console.log(nameInverter(" first last "));
module.exports = nameInverter;