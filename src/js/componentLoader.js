function loadComponents() {
  const headerElement = document.querySelector("header");
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
  } else {
    console.error("Element <header> not found in document.");
  }


  const footerElement = document.querySelector("footer");
  if (footerElement) {
    footerElement.innerHTML = footerHTML;
  } else {
    console.error("Element <footer> not found in document.");
  }
}

document.addEventListener("DOMContentLoaded", loadComponents);
