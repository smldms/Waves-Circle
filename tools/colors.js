//////////////PALETTE
let palette = {
    n: fxrand(),
    clr: [],
    bgClr: [],
    extraClr: "",
    name: ""
}
if (palette.n < 0.2) {
    palette.clr = ["#403B32", "#59554D"]
    palette.bgClr = ["#F2EBDF", "#D9D0C1"]
    palette.extraClr = "#8C8880";
    palette.name = "PARCHMENT"
}
else if (palette.n < 0.4) {
    palette.bgClr = ["#FFFFFF", "#F2F2F2"]
    palette.clr = ["#242424", "#212121"]
    palette.extraClr = "#242424";
    palette.name = "PAPER 1"
}
else if (palette.n < 0.6) {
    palette.bgClr = ["#F2F2F2", "#BFBFBF"]
    palette.clr = ["#202020", "#262626"]
    palette.extraClr = "#404040";
    palette.name = "PAPER 2"
}
else if (palette.n < 0.8) {
    palette.bgClr = ["#D9C5A0", "#A69981"]
    palette.clr = ["#403F38", "#736B5C"]
    palette.extraClr = "#D9C896";
    palette.name = "KRAFT"
}
else {
    palette.bgClr = ["#F2F2F2", "#D9D2D0"]
    palette.clr = ["#262626", "#0D0D0D"]
    palette.extraClr = "#8C8988";
    palette.name = "NEWSPAPER"
}