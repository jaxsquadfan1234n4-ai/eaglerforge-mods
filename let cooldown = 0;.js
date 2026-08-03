let cooldown = 0;

ModAPI.addEventListener("load", () => {
ModAPI.displayToChat({
msg: "§6🔥 §cFire Staff loaded! §ePress R to cast."
});
});

ModAPI.addEventListener("update", () => {
if (cooldown > 0) {
cooldown--;
}
});

ModAPI.addEventListener("key", (event) => {
if (event.key === 19) {
if (cooldown > 0) {
ModAPI.displayToChat({
msg: "§7The Fire Staff is recharging..."
});
return;
}

```
    cooldown = 60;

    ModAPI.displayToChat({
        msg: "§6🔥 §cFIRE SPELL CAST! §6🔥"
    });
}
```

});
