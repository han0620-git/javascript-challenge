// YOUR CODE HERE!
// from data.js
const tableData = data;

// <tbody> in index.html
const tbody = d3.select("tbody");

function btnClick() {
  const myDate = d3.select("#datetime").property("value");

  if (myDate) {
    filteredRows = tableData.filter(row => row.datetime === myDate);
  }

  // Wipe out any row data
  tbody.html("");

  filteredRows.forEach((row_data) => {
    // Create tr for each row of the table
    const row = tbody.append("tr");

    // Create multiple td cells for each row
    Object.values(row_data).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    }
    );
  });
}

// The button id="filter-btn" is clicked.
d3.selectAll("#filter-btn").on("click", btnClick);