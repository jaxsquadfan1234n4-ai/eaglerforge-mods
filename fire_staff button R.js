let fireStaffStarted = false;

ModAPI.addEventListener("update", () => {
if (!fireStaffStarted) {
fireStaffStarted = true;

```
    ModAPI.displayToChat(
        "§6🔥 §cFIRE STAFF ACTIVATED! §6🔥"
    );

    ModAPI.displayToChat(
        "§eThe staff is burning with magical fire!"
    );
}
```

});
