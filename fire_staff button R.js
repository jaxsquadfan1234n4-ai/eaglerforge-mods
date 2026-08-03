ModAPI.addEventListener("update", function () {
    if (window.fireStaffLoaded) return;

    window.fireStaffLoaded = true;

    ModAPI.displayToChat({
        msg: "FIRE STAFF MOD LOADED!"
    });

    ModAPI.displayToChat({
        msg: "§6The Fire Staff is ready!"
    });
});
