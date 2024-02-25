loadingTransitionOnLoad();

function loadingTransitionOnLoad(){
    var reduced_motion = localStorage.getItem("reduced_motion");

    var add_class = "";
    
    if(reduced_motion == "false"){
        var add_class = "slide-out";
    }

    document.write(`
        <div class="loading-screen ${add_class}"><img src="../../images/loading.png"></div>
    `);
}

function navigateWithLoadingScreen(event, path) {
    var reduced_motion = localStorage.getItem("reduced_motion");

    var default_delay = 250;
    var reduced_motion_delay = 0;

    var current_delay = 0;

    if(reduced_motion == "true"){
        current_delay = reduced_motion_delay;
    }else{
        current_delay = default_delay;
    }

    event.preventDefault();

    if(reduced_motion == "false"){
        var loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('slide-in');
    }

    setTimeout(function() {
        window.location.href = path;
    }, current_delay);
}
