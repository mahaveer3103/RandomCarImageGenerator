const accessKey = "AlIrMyx-fCh3mgjqH8znenuUlYX1soJRRgvvR6pgj30";

const searchResults = document.querySelector(".output");
const searchBtn = document.getElementById("search");


async function searchImages() {
    searchResults.innerHTML = "";
    const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=car`;

    const response = await fetch(url);
    const data = await response.json();

    const result = data;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("output");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    imageWrapper.appendChild(image);
    searchResults.appendChild(imageWrapper);
    searchResults.style.display = "block";
}

searchBtn.addEventListener("click", () => {
    searchImages();
});
