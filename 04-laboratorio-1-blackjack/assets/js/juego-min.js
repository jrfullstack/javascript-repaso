const miModulo = (() => {
    "use strict";
    let e = [],
        t = ["C", "D", "H", "S"],
        l = ["A", "J", "Q", "K"],
        r = [],
        a = document.querySelector("#btnPedir"),
        n = document.querySelector("#btnDetner");
    document.querySelector("#btnNuevo");
    let s = document.querySelectorAll(".divCartas"),
        d = document.querySelectorAll("small"),
        i = (t = 2) => {
            (e = o()), (r = []);
            for (let l = 0; l < t; l++) r.push(0);
            d.forEach((e) => (e.innerText = 0)),
                s.forEach((e) => (e.innerText = "")),
                (a.disabled = !1),
                (n.disabled = !1);
        },
        o = () => {
            e = [];
            for (let r = 2; r <= 10; r++) for (let a of t) e.push(r + a);
            for (let n of t) for (let s of l) e.push(s + n);
            return _.shuffle(e);
        },
        c = () => {
            if (0 === e.length) throw "No hay cartas en el deck";
            return e.pop();
        },
        u = (e) => {
            let t = e.substring(0, e.length - 1);
            return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
        },
        $ = (e, t) => ((r[t] = r[t] + u(e)), (d[t].innerText = r[t]), r[t]),
        h = (e, t) => {
            let l = document.createElement("img");
            (l.src = `assets/cartas/${e}.png`),
                l.classList.add("carta"),
                s[t].append(l);
        },
        b = () => {
            let [e, t] = r;
            setTimeout(() => {
                e === t
                    ? alert("Tablas!!")
                    : (e > t && e <= 21) || t > 21
                    ? alert("Ganaste!!!")
                    : ((e < t && t <= 21) || e > 21) && alert("Perdiste!!!");
            }, 100);
        },
        f = (e) => {
            let t = 0;
            do {
                let l = c();
                (t = $(l, r.length - 1)), h(l, r.length - 1);
            } while (t < e && e <= 21);
            b();
        };
    return (
        a.addEventListener("click", () => {
            let e = c(),
                t = $(e, 0);
            h(e, 0),
                t > 21
                    ? (console.warn("Lo siento haz perdido!"),
                      (a.disabled = !0),
                      (n.disabled = !0),
                      f(t))
                    : 21 === t &&
                      (console.warn("21, genial!!"),
                      (a.disabled = !0),
                      (n.disabled = !0),
                      f(t));
        }),
        n.addEventListener("click", () => {
            (a.disabled = !0), (n.disabled = !0), f(r[0]);
        }),
        { nuevoJuego: i }
    );
})();
