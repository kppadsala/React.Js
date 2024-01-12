let id = setTimeout(() => {
  alert("CAN YOU PLEASE LOGIN ");
}, 5000);

let lid = setTimeout(() => {
  alert(" ********?LOGIN?****** ");
}, 8000);

if (id < lid) {
  console.log("The 'CAN YOU PLEASE LOGIN' timeout will execute first.");
} else if (id > lid) {
  console.log("The '********?LOGIN?******' timeout will execute first.");
} else {
  console.log("Both timeouts have the same duration.");
}
