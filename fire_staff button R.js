let started = false;

ModAPI.addEventListener("update", () => {
if (!started) {
started = true;

```
    ModAPI.displayToChat({
        msg: "§6🔥 §cFIRE STAFF ACTIVATED! §6🔥"
    });

    ModAPI.displayToChat({
        msg: "§eThe staff is burning with magical fire!"
    });
}
```

});
