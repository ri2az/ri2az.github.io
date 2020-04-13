console.clear();

const textContainers = [...document.querySelectorAll(".text-container")];
const colorArray = ["#E50000", "#568DCF", "#F4B804"];

textContainers.forEach(container => {
	let i = 0, j = 0;
	const textData = container.getAttribute("data-text");
	const textLength = textData.length;
	let textEl = document.createElement("span");
	textEl.classList.add("text");
	for (let index = 0; index < textLength; index++) {
		let charContainerEl = document.createElement("span");
		charContainerEl.classList.add("char-container");
		let charEl = document.createElement("span");
		charEl.classList.add("char");
		charEl.innerHTML = textData[index];
		charContainerEl.setAttribute(
			"style",
			`--animation-delay: ${j == textLength ? (j = 0) : j * 100}ms`
		);
		if (!textEl.classList.contains("shadow")) {
			charContainerEl.style.color = colorArray[i == colorArray.length ? (i = 0) : i];
		}
		if (index % 2 == 0) {
			let iconContainierEl = document.createElement("span");
			iconContainierEl.classList.add("icon-container");
			let SVGEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			SVGEl.classList.add("icon", "star");
			let SVGUseEl = document.createElementNS("http://www.w3.org/2000/svg", "use");
			SVGUseEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#star");
			SVGEl.setAttribute("style", `--icon-animation-delay: ${Math.random() * index * 200}ms`);

			SVGEl.appendChild(SVGUseEl);
			iconContainierEl.appendChild(SVGEl);
			charContainerEl.appendChild(iconContainierEl);
		}

		charContainerEl.appendChild(charEl);
		textEl.appendChild(charContainerEl);
		i++, j++;
	}
	container.appendChild(textEl);
});
