const $li = document.querySelectorAll("ul li");
$li.forEach((node) => {
  node.addEventListener("mousedown", function (event) {
    const value = node.innerText.trim();
    const $result = document.querySelector(".result");
    const resultText = $result.innerText.trim();
    if (
      resultText == "0" ||
      resultText == "undefined" ||
      resultText == "Infinity"
    ) {
      $result.innerText = "";
    }

    if (value == "=") {
      let solution = eval(resultText);
      $result.innerText = solution;
      return true;
    }

    if (value == "C") {
      $result.innerText = "";
      return true;
    }
    $result.append(value);
  });
});
