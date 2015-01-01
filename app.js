window.onload = function () {
    var el = document.getElementById('content');
    el.innerHTML = "Hi Eli";
    var b = 0;
    var g = 0;
    for (var f = 1; f <= 330000000; f++) {
        //console.log("f=" + f);
        var familyHadBoy = false;
        while (familyHadBoy == false) {
            var r = Math.random();
            if (r <= 0.5) {
                b = b + 1;
                familyHadBoy = true;
            }
            else {
                g = g + 1;
            }
        }
    }
    el.innerHTML = "the ratio of girls to boys is " + (g / b);
};
//# sourceMappingURL=app.js.map