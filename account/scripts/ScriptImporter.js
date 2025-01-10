const scripts = [
    "../scripts/SetupPage.js",
    "../scripts/HashPassword.js",
    "../scripts/GetUserIP.js",
    "../scripts/Login.js",
    "../scripts/Logout.js",
    "../scripts/Register.js",
    "../scripts/CapitalizeFirstLetter.js"
];

scripts.forEach((scriptSrc) => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = false;
    document.body.appendChild(script);
});