let fireStaffReady = false;
let cooldown = 0;

ModAPI.addEventListener("load", () => {
fireStaffReady = true;
ModAPI.displayToChat("§6🔥 §cFire Staff loaded! §ePress R to cast.");
});

ModAPI.addEventListener("update", () => {
if (cooldown > 0) {
cooldown--;
}
});

ModAPI.addEventListener("key", (event) => {
if (event.key === 19 && fireStaffReady) {
if (cooldown > 0) {
ModAPI.displayToChat("§7The Fire Staff is recharging...");
return;
}

```
    cooldown = 60;
    ModAPI.displayToChat("§6🔥 §cFIRE SPELL ACTIVATED! §6🔥");
}
```

});
