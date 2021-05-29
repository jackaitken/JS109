let name = "nina";

function outer() {
  let name = "jill";
  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }
  console.log(name);
  return inner();
}

outer();
name;

