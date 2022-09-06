//////////***BRUSH
let brush = {
    n: fxrand(),
    name: ''
}
if (brush.n < 0.8) {
    brush.name = 'VERTEX'
}
else if (brush.n < 0.9) {
    brush.name = 'RECTANGLE'
}
else {
    brush.name = 'ELLIPSE'
}
///////////POSX
let circlePosX = {
    n: fxrand(),
    name: '',
    val: 0.5
}
if (circlePosX.n < 0.6) {
    circlePosX.val = 0.5
    circlePosX.name = "CENTER"

}
else if (circlePosX.n < 0.7) {
    circlePosX.val = 0
    circlePosX.name = "LEFT"
}
else if (circlePosX.n < 0.8) {
    circlePosX.val = 0.25
    circlePosX.name = "CENTER LEFT"

}
else if (circlePosX.n < 0.9) {
    circlePosX.val = 0.75
    circlePosX.name = "CENTER RIGHT"
}
else {
    circlePosX.val = 1
    circlePosX.name = "RIGHT"
}
///////////POSY
let circlePosY = {
    n: fxrand(),
    name: '',
    val: 0.5
}
if (circlePosY.n < 0.6) {
    circlePosY.val = 0.5
    circlePosY.name = "CENTER"

}
else if (circlePosY.n < 0.7) {
    circlePosY.val = 0.25
    circlePosY.name = "TOP"
}
else if (circlePosY.n < 0.8) {
    circlePosY.val = 0.33
    circlePosY.name = "CENTER TOP"

}
else if (circlePosY.n < 0.9) {
    circlePosY.val = 0.66
    circlePosY.name = "CENTER BOTTOM"
}
else {
    circlePosY.val = 0.75
    circlePosY.name = "BOTTOM"
}


///////////RADIUS
let rad = {
    n: fxrand(),
    name: '',
    val: 0.5
}
if (rad.n < 0.33) {
    rad.val = 0.5
    rad.name = 'LARGE'
}
else if (rad.n < 0.66) {
    rad.val = 0.33
    rad.name = 'MEDIUM'
}
else {
    rad.name = 'SMALL'
    rad.val = 0.275
}


///////////IN RADIUS
let inRad = {
    n: fxrand(),
    name: '',
    val: 0.5
}
if (inRad.n < 0.33) {
    inRad.val = 0.66
    inRad.name = 'LARGE'
}
else if (inRad.n < 0.66) {
    inRad.val = 0.5
    inRad.name = 'MEDIUM'
}
else {
    inRad.name = 'SMALL'
    inRad.val = 0.33
}

/////////////////////////MODE
let amp = {
    n: fxrand(),
    val: 100,
    val2: 0,
    val3: 250,
    name: ""
}

if (amp.n < 0.25) {
    amp.val = 100
    amp.val2 = 0
    amp.val3 = 250
    amp.name = "A"
}
else if (amp.n < 0.5) {
    amp.val = 10
    amp.val2 = 100
    amp.val3 = 10
    amp.name = "B"
}
else if (amp.n < 0.75) {
    amp.val = 100
    amp.val2 = 100
    amp.val3 = 0
    amp.name = "C"
}
else {
    amp.val = 25
    amp.val2 = 0
    amp.val3 = 100
    amp.name = "D"
}

/////////////////////////GRADIENT
let grd = {
    n: fxrand(),
    name: ""
}

if (grd.n < 0.5) {
    grd.name = "RADIAL"
}
else { grd.name = "LINEAR" }

/////////////////////////FORCE
let turb = {
    n: fxrand(),
    val: 0.1,
    name: ""
}

if (turb.n < 0.25) {
    turb.val = 0.001
    turb.name = "A"
}
else if (turb.n < 0.5) {
    turb.val = 0.01
    turb.name = "B"
}
else if (turb.n < 0.75) {
    turb.val = 0.033
    turb.name = "C"
}
else {
    turb.val = 0.05
    turb.name = "D"
}

