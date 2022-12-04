function convert() {
    var x = parseInt(x);
    var y = parseInt(y);
    var v = parseInt(v);
    var t = parseInt(t);
    var r = parseInt(r);
}
function getValue() {

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var v = document.getElementById("v").value;
    var t = document.getElementById("t").value;
    var r = document.getElementById("r").value;


    if (x == "?") {
        convert();
        var x = y + v * (t - r)
        document.getElementById("solution").textContent = (`x = ${x}m`);
    }

    else
        if (y == "?") {
            convert();
            var y = x - v * (t - r)
            document.getElementById("solution").textContent = (`x0 = ${y}m`);
        }

        else
            if (v == "?") {
                convert();
                var v = (x - y) / (t - r)
                document.getElementById("solution").textContent = (`v = ${v} m/s. Ou ${v * 3.6} km/h.`);
            }

            else
                if (t == "?") {
                    convert();
                    var t = (x - y + v * r) / v
                    if (t >= 60) {
                        t_minute = t / 60
                        document.getElementById("solution").textContent = (`t = ${t} s. Ou ${t_minute} min.`);
                    }
                    if (t_minute >= 60) {
                        t_heure = t_minute / 60
                        document.getElementById("solution").textContent = (`t = ${t} s. 
                        Ou ${t_minute} min. 
                        Ou ${t_heure} h`);
                    }
                    else {
                        document.getElementById("solution").textContent = (`t = ${t} s `);
                    }
                }
                else
                    if (r == "?") {
                        convert();
                        var r = (x - y + v * t) / v
                        if (r >= 60) {
                            r_minute = r / 60
                            print("t = ", r_minute, "min.")
                        }
                        if (r_minute >= 60) {
                            r_heure = r_minute / 60
                        }
                        document.getElementById("solution").textContent = (`t0 = ${r} s`);
                    }
                    else {
                        alert("Erreur");
                        document.getElementById("solution").textContent = (`Pas de solution`);
                    }
}
