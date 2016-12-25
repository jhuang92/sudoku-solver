var possibleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var gridList = {
  1:[
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
  ],
  2:[
    [0, 3], [0, 4], [0, 5],
    [1, 3], [1, 4], [1, 5],
    [2, 3], [2, 4], [2, 5]
  ],
  3:[
    [0, 6], [0, 7], [0, 8],
    [1, 6], [1, 7], [1, 8],
    [2, 6], [2, 7], [2, 8]
  ],
  4:[
    [3, 0], [3, 1], [3, 2],
    [4, 0], [4, 1], [4, 2],
    [5, 0], [5, 1], [5, 2]
  ],
  5:[
    [3, 3], [3, 4], [3, 5],
    [4, 3], [4, 4], [4, 5],
    [5, 3], [5, 4], [5, 5]
  ],
  6:[
    [3, 6], [3, 7], [3, 8],
    [4, 6], [4, 7], [4, 8],
    [5, 6], [5, 7], [5, 8]
  ],
  7:[
    [6, 0], [6, 1], [6, 2],
    [7, 0], [7, 1], [7, 2],
    [8, 0], [8, 1], [8, 2]
  ],
  8:[
    [6, 3], [6, 4], [6, 5],
    [7, 3], [7, 4], [7, 5],
    [8, 3], [8, 4], [8, 5]
  ],
  9:[
    [6, 6], [6, 7], [6, 8],
    [7, 6], [7, 7], [7, 8],
    [8, 6], [8, 7], [8, 8]
  ]
}

function GetGridMissingNums(originalGrid, currentPosition) {
  var missingNumsList;
  var isFound = false;
  for (var i in gridList) {
    for (var j in gridList[i]) {
      if (currentPosition.toString() === gridList[i][j].toString()) {
        missingNumsList = gridList[i];
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }

  var currentNums = [];
  for (var i in missingNumsList) {
    var row = missingNumsList[i][0];
    var col = missingNumsList[i][1];
    if (originalGrid[row][col] !== 0) {
      currentNums.push(originalGrid[row][col]);
    }
  }

  var missingNums = [];
  for (var i = 0; i < originalGrid.length; i++) {
    if (currentNums.indexOf(i + 1) === -1) {
      missingNums.push(i + 1);
    }
  }
  return missingNums;
}

function GetMissingColNum(originalGrid, colNum) {
  var missingNums = [];
  var existingNums = [];

  for (var i = 0; i < originalGrid.length; i++) {
    if (originalGrid[i][colNum] !== 0) {
      existingNums.push(originalGrid[i][colNum]);
    }
  }

  for (var i = 0; i < originalGrid.length; i++) {
    if (existingNums.indexOf(i + 1) === -1) {
      missingNums.push(i + 1);
    }
  }

  return missingNums;
}

function GetMissingRowNum(originalGrid, rowNum) {
  var missingNums = [];
  var existingNums = [];

  for (var i = 0; i < originalGrid.length; i++) {
    if (originalGrid[rowNum][i] !== 0) {
      existingNums.push(originalGrid[rowNum][i]);
    }
  }

  for (var i = 0; i < originalGrid.length; i++) {
    if (existingNums.indexOf(i + 1) === -1) {
      missingNums.push(i + 1);
    }
  }

  return missingNums;
}

function BeautifyGrid(newGrid) {

}

function main() {
  // Creating 9x9 Grid
  var originalGrid = [
    [3, 0, 0, 0, 0, 4, 0, 2, 6],
    [0, 0, 0, 9, 0, 0, 5, 0, 0],
    [8, 0, 5, 0, 0, 6, 9, 4, 1],
    [0, 1, 0, 3, 0, 0, 2, 6, 0],
    [5, 0, 8, 1, 2, 7, 4, 0, 3],
    [0, 3, 9, 0, 0, 8, 0, 1, 0],
    [9, 5, 6, 7, 0, 0, 1, 0, 2],
    [0, 0, 4, 0, 0, 2, 0, 0, 0],
    [1, 2, 0, 8, 0, 0, 0, 0, 4]
  ];

  var newGrid = originalGrid;

  for (var i = 0; i < originalGrid.length; i++) {
    for (var j = 0; j < originalGrid.length; j++) {
      var missingGridNums = GetGridMissingNums(originalGrid, [i, j]);
      var missingRowNums = GetMissingRowNum(originalGrid, i);
      var missingColNums = GetMissingColNum(originalGrid, j);
      for (var k in missingGridNums) {

      }

      console.log(`Grid X${i}${j}: ` + missingGridNums);
      console.log(`Row X${i}${j}: ` + missingRowNums);
      console.log(`Col X${i}${j}: ` + missingColNums);
    }
  }

  // var currentPosition = [5, 6];
  //
  // var missingRowNums = GetMissingRowNum(originalGrid, currentPosition[0]);
  // var missingColNums = GetMissingColNum(originalGrid, currentPosition[1]);
  // var missingGridNums = GetGridMissingNums(originalGrid, currentPosition);

  // console.log("Grid: " + missingGridNums);
  // console.log("Row: " + missingRowNums);
  // console.log("Col: " + missingColNums);
}

main();
