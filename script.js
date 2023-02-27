let detallesVisibles = true

function toggleExperiencia() {
	let arrayItems = document.getElementsByClassName("item-experiencia");

	for (var i = arrayItems.length - 1; i >= 0; i--) {
		arrayItems[i].classList.toggle("hide");
	}

	if (detallesVisibles) {
		document.getElementById("toggle-experiencia").className = "fa fa-caret-up fa-lg";
	} else {
		document.getElementById("toggle-experiencia").className = "fa fa-caret-down fa-lg";
	}

	detallesVisibles = !detallesVisibles;
}
