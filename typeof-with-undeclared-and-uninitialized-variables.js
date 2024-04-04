console.log(typeof undeclaredVariable);

try {
  console.log(typeof letVariable);
  let letVariable = 42;
} catch (err) {
  console.log(err.message);
}

try {
  console.log(typeof constVariable);
  const constVariable = 42;
} catch (err) {
  console.log(err.message);
}

try {
  console.log(typeof someClass);
  class someClass {}
} catch (err) {
  console.log(err.message);
}