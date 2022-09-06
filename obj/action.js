class myObj {
  constructor() {
}
  
  show() {
    dropShad(0, 10, 10, 0, 150)
    noiser(0, height * 2, turb.val, 0.5)
    capturer.capture(cnv.canvas);
    // noLoop();
  }
}