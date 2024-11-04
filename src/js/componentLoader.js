const components = ["header", "footer"];

function loadComponents() {
  components.forEach(async (el) => {
    try {
      let response = await fetch(`http://127.0.0.1:5500/src/html/${el}.html`);

      const htmlContent = await response.text();
      const targetElement = document.querySelector(el);
      if (targetElement) {
        targetElement.innerHTML = htmlContent;
      } else {
        console.error(`Element <${el}> not found in document.`);
      }
    } catch (error) {
      console.error(error);
      alert("404 - Component not found");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadComponents);
