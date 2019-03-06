const firstName = "Muhammad";
const lastName = "Ali";
const arr = [
  "developer",
  24,
  true,
  () => {
    return "hi"
  }
];
// hi I'm a comment
for (let i = 0; i < arr.length; i++) {
  console.log(typeof arr[i] === "function" ? arr[i]() : arr[i]);
}
