function funcaoPrincipal() {
	var usuario = document.getElementById("username");
	var senha = document.getElementById("password");


	usuario.onfocus = function () {
		if (usuario.value === "Username") {
			usuario.value = "";
		}
	};
	usuario.onblur = function () {
		if (usuario.value === "") {
			usuario.value = "Username";
		}
	};

	senha.onfocus = function () {
		if (senha.value === "Password") {
			senha.value = "";
		}
	};
	senha.onblur = function () {
		if (senha.value === "") {
			senha.value = "Password";
		}
	};

}

window.onload = function () {
	funcaoPrincipal();
}
