let Deg = 23;
let Len = 50;
let BranchW = 40;
let pX = [];
let pY = [];

function leaves(l, w) {
    if (l < Len / 3) {
        push()
        let clr = color(random(palette.leaves));
        clr.setAlpha(random(50, 100));
        // noStroke();
        fill(random(palette.clr));
        ellipse(0, 0, l * height/1000);
        // arc(0, 0, height / 200, height / 20, fxrand() * 360, QUARTER_PI / 4);
        pop()
    }

    if (l < Len / 8) {
        return;
    }

    strokeWeight(w);
    stroke(palette.bgClr[1])
    line(0, 0, 0, -l);
    push()
    translate(0, -l);
    push()
    rotate(-Deg);
    leaves(l * 0.8, w * 0.6);
    pop()
    push()
    rotate(Deg);
    leaves(l * 0.8, w * 0.6);
    pop()
    pop()
}
function myTree(l, w, d, transX, transY) { // len , weidht , density
    push()
    translate(transX, transY)
    scale(0.75)
    stroke(palette.bgClr[1])
    strokeWeight(w);
    line(-200 + fxrand() * 200, 0, 0, -l);

    let cnt = int(random(2, d));
    let span = 2 * Deg / cnt;
    push()
    translate(0, -l);

    for (let deg = -Deg; deg <= Deg; deg += span) {
        push();
        rotate(-30 + deg + fxrand() * 90);
        leaves(l * 0.8 * random(1, 1.5), w * 0.8 * random(1, 1.2), d + 1);
        pop();
    }

    pop()
    pop()
}