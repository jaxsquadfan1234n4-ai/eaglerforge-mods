let fireStaffLoaded = false;

ModAPI.addEventListener("update", () => {
if (fireStaffLoaded) return;

```
fireStaffLoaded = true;

ModAPI.displayToChat({
    msg: ModAPI.uwuify({
        string: "FIRE STAFF MOD LOADED!"
    })
});

ModAPI.displayToChat({
    msg: "§6The Fire Staff is ready!"
});
```

});
