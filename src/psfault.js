// basic line data
//let K =  math.matrix([[1,2,0.1,0.25],
//                    [3,4,0.1,0.25],
//                    [2,5,0.08,0.2],
//                    [4,5,0.08,0.2],
//                    [5,6,0.2,0.15]]);

//let Gens = math.matrix([[1, 1, 25],
//                        [3, 1, -5]]); // 3 org

//let Fault = 6; // 6 org

var NoBuses = 6;

function addtoBusSelect(){
    selects = document.querySelectorAll(".busselect")

    for (let index = 0; index < selects.length; index++) {
        let select = selects[index];
        let option = document.createElement("option");
        option.text = NoBuses.toString();
        option.value = NoBuses;
        select.add(option);        
    };
}

function removefromBusSelect(){
    selects = document.querySelectorAll(".busselect")

    for (let i = 0; i < selects.length; i++) {
        // iterate all selects
        selectobject = selects[i];
        for (let j = 0; j < selectobject.options.length; j++) {
            if (selectobject.options[j].value == NoBuses+1){
                selectobject.remove(j);
                };
        };
    };
}

function addLine(){
    let table = document.getElementById("linetable");
    let row = table.insertRow(-1);
    let from_bus = row.insertCell(0);
    let to_bus = row.insertCell(1);
    let Rpu = row.insertCell(2);
    let Xpu = row.insertCell(3);
    from_bus_string = '<select name="From Bus" class="busselect">';
    for (let i = 1; i < NoBuses+1; i++) {
        if (i == 1) {
            from_bus_string += '<option value="' + i.toString() + '" selected>' + i.toString() + '</option>'
        } else {
            from_bus_string += '<option value="' + i.toString() + '">' + i.toString() + '</option>'
        }
        
    }
    from_bus_string += '</select>';

    to_bus_string = '<select name="To Bus" class="busselect">';
    for (let i = 1; i < NoBuses+1; i++) {
        if (i == 2) {
            to_bus_string += '<option value="' + i.toString() + '" selected>' + i.toString() + '</option>'
        } else {
            to_bus_string += '<option value="' + i.toString() + '">' + i.toString() + '</option>'
        }
        
    }
    to_bus_string += '</select>';

    from_bus.innerHTML = from_bus_string;
    to_bus.innerHTML = to_bus_string;
    Rpu.innerHTML = '<input type="number" value="0.1" min="0" step="0.05"/>';
    Xpu.innerHTML = '<input type="number" value="0.25" min="0" step="0.05"/>';
}
  
function removeLine() {
    document.getElementById("linetable").deleteRow(-1);
}
  
function resetLine(){
document.getElementById("linetable").innerHTML = '<tr><td><b>From Bus</b></td><td><b>To Bus</b></td><td><b>R [pu]</b></td><td><b>X [pu]</b></td></tr>\
    <tr><td><select name="From Bus" class="busselect">\
        <option value="1" selected>1</option>\
        <option value="2">2</option>\
        <option value="3">3</option>\
        <option value="4">4</option>\
        <option value="5">5</option>\
        <option value="6">6</option>\
        </select></td>\
        <td><select name="To Bus" class="busselect">\
            <option value="1">1</option>\
            <option value="2" selected>2</option>\
            <option value="3">3</option>\
            <option value="4">4</option>\
            <option value="5">5</option>\
            <option value="6">6</option>\
            </select></td>\
        <td><input type="number" value="0.1" min="0" step="0.05"/></td>\
        <td><input type="number" value="0.25" min="0" step="0.05"/></td>\
    </tr>\
    <tr><td><select name="From Bus" class="busselect">\
        <option value="1">1</option>\
        <option value="2">2</option>\
        <option value="3" selected>3</option>\
        <option value="4">4</option>\
        <option value="5">5</option>\
        <option value="6">6</option>\
        </select></td>\
        <td><select name="To Bus" class="busselect">\
            <option value="1">1</option>\
            <option value="2">2</option>\
            <option value="3">3</option>\
            <option value="4" selected>4</option>\
            <option value="5">5</option>\
            <option value="6">6</option>\
            </select></td>\
        <td><input type="number" value="0.1" min="0" step="0.05"/></td>\
        <td><input type="number" value="0.25" min="0" step="0.05"/></td>\
    </tr>\
    <tr><td><select name="From Bus" class="busselect">\
        <option value="1">1</option>\
        <option value="2" selected>2</option>\
        <option value="3">3</option>\
        <option value="4">4</option>\
        <option value="5">5</option>\
        <option value="6">6</option>\
        </select></td>\
        <td><select name="To Bus" class="busselect">\
            <option value="1">1</option>\
            <option value="2">2</option>\
            <option value="3">3</option>\
            <option value="4">4</option>\
            <option value="5" selected>5</option>\
            <option value="6">6</option>\
            </select></td>\
        <td><input type="number" value="0.08" min="0" step="0.05"/></td>\
        <td><input type="number" value="0.2" min="0" step="0.05"/></td>\
    </tr>\
    <tr><td><select name="From Bus" class="busselect">\
        <option value="1">1</option>\
        <option value="2">2</option>\
        <option value="3">3</option>\
        <option value="4" selected>4</option>\
        <option value="5">5</option>\
        <option value="6">6</option>\
        </select></td>\
        <td><select name="To Bus" class="busselect">\
            <option value="1">1</option>\
            <option value="2">2</option>\
            <option value="3">3</option>\
            <option value="4">4</option>\
            <option value="5" selected>5</option>\
            <option value="6">6</option>\
            </select></td>\
        <td><input type="number" value="0.08" min="0" step="0.05"/></td>\
        <td><input type="number" value="0.2" min="0" step="0.05"/></td>\
    </tr>\
    <tr><td><select name="From Bus" class="busselect">\
        <option value="1">1</option>\
        <option value="2">2</option>\
        <option value="3">3</option>\
        <option value="4">4</option>\
        <option value="5" selected>5</option>\
        <option value="6">6</option>\
        </select></td>\
        <td><select name="To Bus" class="busselect">\
            <option value="1">1</option>\
            <option value="2">2</option>\
            <option value="3">3</option>\
            <option value="4">4</option>\
            <option value="5">5</option>\
            <option value="6" selected>6</option>\
            </select></td>\
        <td><input type="number" value="0.2" min="0" step="0.05"/></td>\
        <td><input type="number" value="0.15" min="0" step="0.05"/></td>\
    </tr>';
}

function addBus(){
    let table = document.getElementById("bustable");
    NoBuses++;
    let row = table.insertRow(-1);
    let busno = row.insertCell(0);
    let gen = row.insertCell(1);
    let Umag = row.insertCell(2);
    let Uang = row.insertCell(3);
    busno.innerHTML = NoBuses.toString();
    gen.innerHTML = '<input type="checkbox">';
    Umag.innerHTML = '<input type="number" value="1" min="0">';
    Uang.innerHTML = '<input type="number" value="0">';
    addtoBusSelect();
}
  
function removeBus() {
    document.getElementById("bustable").deleteRow(-1);
    NoBuses--;
    removefromBusSelect();
}

function resetBus(){
    document.getElementById("bustable").innerHTML = '<thead>\
    <tr><td><b>Bus</b></td><td><b>Gen?</b></td><td><b>Umag [pu]</b></td><td><b>Uang [&deg]</b></td></tr>\
    </thead>\
    <tbody>\
        <tr><td>1</td>\
            <td><input type="checkbox" checked></td>\
            <td><input type="number" value="1" min="0"></td>\
            <td><input type="number" value="0"></td></tr>\
        <tr><td>2</td>\
            <td><input type="checkbox" ></td>\
            <td><input type="number" value="1" min="0"></td>\
            <td><input type="number" value="0"></td></tr>\
        <tr><td>3</td>\
            <td><input type="checkbox" checked></td>\
            <td><input type="number" value="1" min="0"></td>\
            <td><input type="number" value="0"></td></tr>\
        <tr><td>4</td>\
            <td><input type="checkbox" ></td>\
            <td><input type="number" value="1" min="0"></td>\
            <td><input type="number" value="0"></td></tr>\
        <tr><td>5</td>\
            <td><input type="checkbox"></td>\
            <td><input type="number" value="1" min="0"></td>\
            <td><input type="number" value="0"></td></tr>\
        <tr><td>6</td>\
            <td><input type="checkbox" ></td>\
            <td><input type="number" value="1" min="0"></td>\
            <td><input type="number" value="0"></td></tr>\
    </tbody>';
    NoBuses = 6;
}

function resetAll(){
    resetBus();
    resetLine();
}
function readBusTable(){
    let table = document.getElementById("bustable");
    firstgen = false;
    for (let i = 1, row; row = table.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
        if (row.cells[1].firstChild.checked) {
            // only parse generator buses
            temp = math.zeros(1,3);
            for (let j = 0, col; col = row.cells[j]; j++) {
                //iterate through columns
                //columns would be accessed using the "col" variable assigned in the for loop
                switch (j) {
                    case 0:
                        // bus number
                        temp.subset(math.index(0,0), Number(col.innerText));
                        break;
                    //case 1:
                        // Gen or not
                        //console.log(col.firstChild.checked);
                        //break;
                    case 2:
                        // Umag number
                        temp.subset(math.index(0,1), Number(col.firstChild.value));
                        break;
                    case 3:
                        // Uang number
                        temp.subset(math.index(0,2), Number(col.firstChild.value));
                        break;
                    default:
                        //console.log(col.firstChild.value);
                        break;
                };
            };
            if (!firstgen) {
                firstgen = true;
                Gens = math.clone(temp);
            } else {
                Gens = math.concat(Gens, temp, 0);
            };  
        };
    };
    return Gens
}

function readLineTable(){
    let table = document.getElementById("linetable");
    firstline = false;
    for (let i = 1, row; row = table.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
        temp = math.zeros(1,4);
        for (let j = 0, col; col = row.cells[j]; j++) {
            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
            switch (j) {
                case 0:
                    // from bus number
                    temp.subset(math.index(0,0), Number(col.firstChild.value));
                    break;
                case 1:
                    // to bus number
                    temp.subset(math.index(0,1), Number(col.firstChild.value));
                    break;
                case 2:
                    // Rpu 
                    temp.subset(math.index(0,2), Number(col.firstChild.value));
                    break;
                case 3:
                    // Xpu
                    temp.subset(math.index(0,3), Number(col.firstChild.value));
                    break;
                default:
                    //console.log(col.firstChild.value);
                    break;
            };
        };
        if (!firstline) {
            firstline = true;
            K = math.clone(temp);
        } else {
            K = math.concat(K, temp, 0);
        };  
    };
    return K
}

function readFaultBus(){
    return Number(document.getElementById("faultbus").value)
}

function calculateSolidFault(){

    Gens = readBusTable();
    K = readLineTable();
    Fault = readFaultBus();

    try {
        resgen = generateYmatrix(K);
    } catch (error) {
        console.log(error)
        document.getElementById("resultsdiv").innerHTML = "Underdefined, no solution found";
        return; 
    }
    
    Y = resgen[0];
    N = resgen[1];

    try {
        resshift = shiftYmatrix(Y, N, Gens, Fault);
    } catch (error) {
        console.log(error)
        document.getElementById("resultsdiv").innerHTML = "Underdefined, no solution found";
        return; 
    }   

    Yshifted = resshift[0];
    Uknown = resshift[1];
    busorder = resshift[2];

    // create Iknown
    NUknown = math.subset(math.size(Uknown), math.index(0));    // Number of known voltages (generators + fault bus)
    NIknown = N - NUknown;                                       // Number of known currents (non gen or fault buses)
    NIuknown = NUknown;                                         // Number of unknown voltages
    Iknown = math.zeros(NIknown,1);

    // split admittance matrix
    A = Yshifted.subset(math.index(math.range(0, NIuknown), math.range(0, NUknown)));
    B = Yshifted.subset(math.index(math.range(0, NIuknown), math.range(NUknown, N)));
    C = Yshifted.subset(math.index(math.range(NIuknown, N), math.range(0, NUknown)));
    D = Yshifted.subset(math.index(math.range(NIuknown, N), math.range(NUknown, N)));

    // solve for uknown voltages
    try {
        Uuknown = math.multiply(math.inv(D), math.subtract(Iknown, math.multiply(C, Uknown)));
    } catch (error) {
        console.log(error)
        document.getElementById("resultsdiv").innerHTML = "Underdefined, no solution found";
        return;
    }
    

    // solve for uknown currents
    try {
        Iuknown = math.add(math.multiply(A, Uknown), math.multiply(B, Uuknown));
    } catch (error) {
        console.log(error)
        document.getElementById("resultsdiv").innerHTML = "Underdefined, no solution found";
        return;
    }

    Ures_unordered = math.concat(Uknown, Uuknown, 0);
    Ires_unordered = math.concat(Iuknown, Iknown, 0);

    // reorder results
    Ures = reorderResults(Ures_unordered, busorder);
    Ires = reorderResults(Ires_unordered, busorder);

    // print results
    printResults(Ures, Ires);
    return;
};

function generateYmatrix(K){
    // find highest bus numbers
    size = math.size(K);
    lines = size.subset(math.index(0));
    
    let N = math.max(
        math.subset(K, math.index(math.range(0, lines), math.range(0,2))));

    // create zero matrix
    let Y = math.zeros(N,N);

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
        Y.subset(math.index(from_bus-1, to_bus-1),  math.add(Y.subset(math.index(from_bus-1, to_bus-1)), Ypu.neg()));
        Y.subset(math.index(to_bus-1, from_bus-1),  math.add(Y.subset(math.index(to_bus-1, from_bus-1)), Ypu.neg()));    
    };

    return [Y, N]
};

function shiftYmatrix(Y, N, Gens, Fault){
    let Yshifted = math.clone(Y);
    let size_gen =  math.size(Gens);
    Ngen = size_gen.subset(math.index(0));
    Nknown = Ngen + 1;
    
    let Uknown = math.zeros(Nknown);
    let knownbuses = [];

    for (let index = 0; index < Ngen; index++) {
        tempUmag = math.subset(Gens, math.index(index,1));
        tempUang = degrees_to_radians(math.subset(Gens, math.index(index,2)));
        tempU = math.complex({r: tempUmag, phi: tempUang});
        Uknown.subset(math.index(index,0), tempU); 
        knownbuses.push(math.subset(Gens,  math.index(index,0)))  
    }
    Uknown.subset(math.index(Nknown-1,0), 0);
    knownbuses.push(Fault);

    knownbuses = math.sort(knownbuses)

    let busorder = math.matrix([math.range(1,N+1)]);

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

function degrees_to_radians(degrees)
{
  let pi = math.pi;
  return degrees * (pi/180);
}

function radians_to_degrees(radians)
{
  let pi = math.pi;
  return radians * (180/pi);
}

function reorderResults(unordered, busorder){
    N = math.subset(math.size(busorder),math.index(1));

    res = math.zeros(N,1);

    for (let index = 0; index < N; index++) {
        // get order index

        index_while = 0;
        while (index_while < N) {
            if (index == (busorder.subset(math.index(0,index_while)) -1)) {
                // correct index
                order_index = index_while;
                break;
            } 
            index_while++;
        }
        val = unordered.subset(math.index(order_index,0));
        
        res.subset(math.index(index,0), val);
        
    }
    return res;
}

function printResults(Ures, Ires){
    N = math.subset(math.size(Ures),math.index(0));
    resultdiv = document.getElementById("resultsdiv");
    decimals = 3;

    html_string = 'Results<br><table id="resulttable">\
    <thead>\
    <tr><td><b>Bus</b></td><td><b>Umag [pu]</b></td><td><b>Uang [&deg]</b></td><td><b>Imag [pu]</b></td><td><b>Iang [&deg]</b></td></tr>\
    </thead>\
    <tbody>';

    for (let index = 0; index < N; index++) {
        let Umag = math.abs(Ures.subset(math.index(index,0)));
        let Uang = radians_to_degrees(math.arg(Ures.subset(math.index(index,0))));
        let Imag = math.abs(Ires.subset(math.index(index,0)));
        let Iang = radians_to_degrees(math.arg(Ires.subset(math.index(index,0))));

        html_string += '<tr>\
        <td>' + (index+1).toString() + '</td>\
        <td>' + Number(Umag).toFixed(decimals).toString() + '</td>\
        <td>' + Number(Uang).toFixed(decimals).toString() + '</td>\
        <td>' + Number(Imag).toFixed(decimals).toString() + '</td>\
        <td>' + Number(Iang).toFixed(decimals).toString() + '</td>\
        </tr>';        
    }

    html_string += '</tbody></table>';
    
    resultdiv.innerHTML = html_string;
}