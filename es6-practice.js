let list = document.querySelectorAll(".list p");
let searchBox = document.querySelector("#search");

const handleOnChange = (e) => {
  let searchTerm = e.target.value.toLowerCase();
  list.forEach((item) => {
    let text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
searchBox.addEventListener("input", handleOnChange);
