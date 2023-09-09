var Y = math.matrix()

// basic line data
var K =  math.matrix([[1,2,0.1,0.25],
                    [3,4,0.1,0.25],
                    [2,5,0.08,0.2],
                    [4,5,0.08,0.2],
                    [5,6,0.2,0.15]]);

var Gens = math.matrix([[1, 1.01],
                        [3, 1]]); // 3 org

var Fault = 6; // 6 org
resgen = generateYmatrix(K);
Y = resgen[0];
N = resgen[1];

resshift = shiftYmatrix(Y, N, Gens, Fault);

Yshifted = resshift[0];
Uknown = resshift[1];
busorder = resshift[2];


function generateYmatrix(K){
    // find highest bus numbers
    size = math.size(K);
    lines = size.subset(math.index(0));
    
    var N = math.max(
        math.subset(K, math.index(math.range(0, lines), math.range(0,2))));

    // create zero matrix
    var Y = math.zeros(N,N);

    for (let index = 0; index < lines; index++) {
        // iterate over each line
        from_bus = math.subset(K, math.index(index, 0));
        to_bus = math.subset(K, math.index(index, 1));
        Rpu = math.subset(K, math.index(index, 2));
        Xpu = math.subset(K, math.index(index, 3));

        Zpu = math.complex(Rpu, Xpu);
        Ypu = Zpu.inverse()

        // Add to self-admittance
        Y.subset(math.index(from_bus-1, from_bus-1), math.add(Y.subset(math.index(from_bus-1, from_bus-1)), Ypu));
        Y.subset(math.index(to_bus-1, to_bus-1), math.add(Y.subset(math.index(to_bus-1, to_bus-1)), Ypu));

        // admittance between buses
        Y.subset(math.index(from_bus-1, to_bus-1),  Ypu.neg());
        Y.subset(math.index(to_bus-1, from_bus-1),  Ypu.neg());    
    };

    return [Y, N]
};

function shiftYmatrix(Y, N, Gens, Fault){
    let Yshifted = math.clone(Y);
    var size_gen =  math.size(Gens);
    Ngen = size_gen.subset(math.index(0));
    Nknown = Ngen + 1;
    
    var Uknown = math.zeros(Nknown);
    var knownbuses = [];

    for (let index = 0; index < Ngen; index++) {
        Uknown.subset(math.index(index,0), math.subset(Gens, math.index(index,1))); 
        knownbuses.push(math.subset(Gens,  math.index(index,0)))  
    }
    Uknown.subset(math.index(Nknown-1,0), 0);
    knownbuses.push(Fault);

    knownbuses = math.sort(knownbuses)

    var busorder = math.matrix([math.range(1,N+1)]);

    for (let index = 0; index < Nknown; index++) {
        // Switch Rows and Columns
        Yshifted = swapMatrixRows(Yshifted, knownbuses[index]-1, index);
        Yshifted = swapMatrixCols(Yshifted, knownbuses[index]-1, index);

        // Switch busorder
        temp = math.transpose(busorder);
        temp.swapRows(knownbuses[index]-1,index);
        busorder = math.transpose(temp);

    };

    return [Yshifted, Uknown, busorder];
};

function swapMatrixRows(A, row1, row2) {
    // For square matrices

    size = math.size(A);
    rows = size.subset(math.index(0));
    cols = size.subset(math.index(1));

    swapped = math.clone(A);
    
    swapped.subset(math.index(row1, math.range(0, cols)), A.subset(math.index(row2, math.range(0, cols))));
    swapped.subset(math.index(row2, math.range(0, cols)), A.subset(math.index(row1, math.range(0, cols))));
    
    return swapped;
}

function swapMatrixCols(A, col1, col2) {
    // For square matrices

    size = math.size(A);
    rows = size.subset(math.index(0));
    cols = size.subset(math.index(1));

    swapped = math.clone(A);
    
    swapped.subset(math.index(math.range(0,rows), col1), A.subset(math.index(math.range(0,rows), col2)));
    swapped.subset(math.index(math.range(0,rows), col2), A.subset(math.index(math.range(0,rows), col1)));
    
    return swapped;
}