const table = [
    [
        { id: 0, row: 0, column: 0, position: 1 },
        { id: 1, row: 1, column: 0, position: 2 },
        { id: 2, row: 2, column: 0, position: 3 }
    ],
    [
        { id: 3, row: 0, column: 1, position: 4 },
        { id: 4, row: 1, column: 1, position: 5 },
        { id: 5, row: 2, column: 1, position: 6 }
    ],
    [
        { id: 6, row: 0, column: 2, position: 7 },
        { id: 7, row: 1, column: 2, position: 8 },
        { id: 8, row: 2, column: 2, position: 9 }
    ]
]

function transpose(a)
{
  return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
  // or in more modern dialect
  // return a[0].map((_, c) => a.map(r => r[c]));
}

function runTransform() {
    const builder = reportBuilder(createColumns);
    builder(table);
}

const reportBuilder = (createColumns) => items => {

       var b = items.reduce(function(prev, curr) {
        return prev.concat(curr);
      });
      var d=changePosition(b,2,2,0,0);
      var c=1;
}


const changePosition=(array,newColumn,newRow,ItemPos1,ItemPos2)=>{
     const indexItem =
    _.find(item => item.column==newColumn&&item.row==newRow,array);
     var toIndex=indexItem.position-1;

     const indexItemToChangePos =
     _.find(item => item.column==ItemPos1&&item.row==ItemPos2,array); 
     var fromIndex=indexItemToChangePos.position-1;
    
   var c= array_move(array,fromIndex,toIndex);
   var y=0;
}

function reorderArray(arr){

}

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

//////////////// PrintTable ////////////////////////////
const textNodeCreator = document.createTextNode.bind(document);

const createColumns =()=>  {
    const InputTable = document.getElementById("inputTable");

    const columnHeader = InputTable.createTHead().insertRow(0);
    const columnRow = InputTable.insertRow(2);
    return { columnHeader, columnRow };
}

const printTable= ({ columnHeader, columnRow })=>{
    _.each((data, index) => {
        columnHeader.insertCell(index).innerHTML = data[0];
        columnRow.insertCell(index).innerHTML = data[1]
    })
}

const createTextNodes = textNodeCreator => _.map(item =>
    textNodeCreator(item.id)
);

const displayHeaders = () => {
    var tableHeader1 = document.getElementById('header1');
    var tableHeader2 = document.getElementById('header2');
    tableHeader1.className = 'visible';
    tableHeader2.className = 'visible';
}


