let parsedData = [];
let chartInstance = null;

document.getElementById('csvFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        parsedData = csvToArray(text); // Convert CSV text to a 2D array
        updateChartView(); // Initial chart drawing
    };

    reader.readAsText(file);
});

function csvToArray(str, delimiter = ",") {
    return str.split("\n").map(row => row.split(delimiter).map(item => item.trim()));
}

function updateChartView() {
    const slider = document.getElementById('dataRangeSlider');
    const displayRange = parseInt(slider.value);
    const dataSubset = parsedData.slice(0, Math.floor(parsedData.length * displayRange / 100));

    if (dataSubset.length > 0) {
        const labels = dataSubset.map(item => item[0]);
        const data = dataSubset.map(item => parseFloat(item[1]));

        createChart(labels, data);
    }
}

function createChart(labels, data) {
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    if (chartInstance) {
        chartInstance.destroy(); // Destroy the old chart instance if exists
    }
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Data Set',
                data: data,
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
                pointRadius: 2, // Smaller points
                borderWidth: 1, // Thinner line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true
                },
                y: {
                    display: true,
                    beginAtZero: true
                }
            }
        }
    });
}