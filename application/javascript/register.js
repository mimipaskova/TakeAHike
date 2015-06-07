var handleSuccessfullRegistration = function () {
	BootstrapDialog.success("Регистрацията беше успешна! Може да влезете с вашият профил.");

	activeHeaderTab("homeTab");
	loadInContainer("root-container", "login-view.html");
}