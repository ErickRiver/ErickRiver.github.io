let area = 0;
function TrapezoidSquareMeter(a, b, h) {
    area = ((a + b) / 2) * h;
    console.log(area);
}

const trapezoids = {
    A: { a: 5, b: 6, h: 4 },
    B: { a: 8, b: 12, h: 6 },
    C: { a: 9, b: 15, h: 6 },
    D: { a: 10, b: 12, h: 8 },
    E: { a: 11, b: 16, h: 5 },
}; 

Object.keys(trapezoids).forEach((trapezoid) => {
    let {a,b,h} = trapezoids[trapezoid]
    TrapezoidSquareMeter(a, b, h);
    console.log("The area of trapezoid " + trapezoid + " is " + area + " square meters.");
});