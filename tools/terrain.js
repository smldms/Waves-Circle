async function terrain(maxH, minH, relief, clr1, clr2, dens, factor, sclX, sclY) {
    let posX = width * circlePosX.val
    let posY = height * circlePosY.val
    let radius = width * rad.val
    for (let y = maxH; y < minH; y += sclY) {
        let percent = round((y * 100) / minH);
        let row = [];
        let xoff = 0.01;
        // row.push(createVector(-width, y));
        for (let x = 0; x < width + sclX; x += sclX) {
            let distance = dist(x, y, posX, posY)
            strokeWeight(1)
            let n = noise(x * relief, y * relief);
            // let ampli = map(y, 0, height, factor, 0) * dens;
            let ampli = 0;
            if (distance < posX) {
                ampli = amp.val
            }
            if (distance < radius && distance > radius * inRad.val) {
                ampli = amp.val2
            }
            else {
                ampli = amp.val3
            }
            let off = y + map(n, 0, 1, -ampli, ampli)
            row.push(createVector(x, off));
        }
        row.push(createVector(width, height));
        row.push(createVector(0, height));
        let lvl = map(y, maxH, height, 0, 1);
        let c = lerpColor(color(clr1), color(clr2), lvl);
        stroke(c)
        noFill()
        beginShape();
        for (let v of row) {
            if (brush.n < 0.8) {
                vertex(v.x, v.y);
            }
            else if (brush.n < 0.9) {
                rect(v.x, v.y, 5);
            }
            else {
                ellipse(v.x, v.y, 50);
            }
        }
        endShape(CLOSE);
        await progress(present + '<p>RENDERING: ' + percent + '%</p>');
    }

    await progress(present + '<p>POST PROCESSING...</p>');
    progressClear();
    myFrame(width / 2, height / 2, 15, width, height, random(palette.clr))

    // grainy(5)
    // myPreview()
    // saver()
    // timer()
}

function noiser(zoneMax, zoneMin, rel, fac) {
    let l1 = {
        maxH: zoneMax,
        minH: zoneMin,
        relief: rel,
        clr1: palette.clr[0],
        clr2: palette.clr[1],
        dens: height,
        factor: fac,
        sclX: 5,
        sclY: 5
    }

    push()
    terrain(...Object.values(l1));
    pop()
}