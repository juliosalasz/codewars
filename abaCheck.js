function count(string) {
  // The function code should be here
  if (string === "") {
    return {};
  }
  const splitString = string.split("");

  const result = () => {
    let countObject = { a: 0, b: 0 };

    splitString.map((letter) => {
      if (letter === "a") {
        ++countObject.a;
      } else if (letter === "b") {
        ++countObject.b + 1;
      }
    });
    return countObject;
  };

  return result();
}
