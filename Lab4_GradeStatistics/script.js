var mathInput = document.getElementById('mathInput');
var englishInput = document.getElementById('englishInput');
var submitBtn = document.getElementById('submitBtn');
var tableBody = document.getElementById('gradeTableBody');
var mathAvgCell = document.getElementById('mathAvg');
var engAvgCell = document.getElementById('engAvg');
var overallAvgCell = document.getElementById('overallAvg');

var gradesList = [];

// when clicked submit
submitBtn.addEventListener('click', function () {
    var math = parseFloat(mathInput.value);
    var english = parseFloat(englishInput.value);

    // make sure input is valid
    if (isNaN(math) || isNaN(english)) {
        alert("Please enter valid numbers.");
        return;
    }

    // calculate average
    var rowAvg = (math + english) / 2;

    // put data to array
    gradesList.push({ math, english, avg: rowAvg });

    // new row
    var rowCount = gradesList.length;
    var newRow = document.createElement('tr');

    newRow.innerHTML =
        "<td>" + rowCount + "</td>" +
        "<td>" + math + "</td>" +
        "<td>" + english + "</td>" +
        "<td>" + rowAvg.toFixed(2) + "</td>";

    tableBody.appendChild(newRow);
    updateColumnAverages();

    // clear input box
    mathInput.value = '';
    englishInput.value = '';
});

function updateColumnAverages() {
    let totalMath = 0;
    let totalEng = 0;
    let totalOverall = 0;

    for (let i = 0; i < gradesList.length; i++) {
        totalMath += gradesList[i].math;
        totalEng += gradesList[i].english;
        totalOverall += gradesList[i].avg;
    }

    var count = gradesList.length;

    // new avg in footer
    if (count > 0) {
        mathAvgCell.innerText = (totalMath / count).toFixed(2);
        engAvgCell.innerText = (totalEng / count).toFixed(2);
        overallAvgCell.innerText = (totalOverall / count).toFixed(2);
    }
}
