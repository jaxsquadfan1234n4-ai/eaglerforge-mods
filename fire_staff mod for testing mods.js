// Fire Staff - EaglerForge test mod

let started = false;

ModAPI.addEventListener("update", () => {
    if (!started) {
        started = true;

        ModAPI.displayToChat({
            msg: "§6🔥 §cFIRE STAFF MOD LOADED! §6🔥"
        });

        ModAPI.displayToChat({
            msg: "§eThe staff is charging with fire..."
        });
    }
});