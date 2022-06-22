// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


var button = d3.select("#filter-btn");

function filteredTable(input) {
    tbody.html('');
    input.forEach((date) => {
        var row = tbody.append("tr");
        Object.entries(date).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};

button.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = data.filter(data => data.datetime === inputValue);
    filteredTable(filteredData);
});


    