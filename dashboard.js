/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '4/10',
        '4/11',
        '4/12',
        '4/13',
        '4/14',
        '4/15',
        '4/16',
        '4/17',
        '4/18',
        '4/19'
      ],
      datasets: [{
        data: [
          0,
          2,
          5,
          7,
          7,
          9,
          12
        ],
        lineTension: 0.2,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointStyle: 'rectRot',
        pointBackgroundColor: '#007bff'
      },
      {
        data: [
          0,
          0,
          2,
          5,
          8,
          12,
          15
        ],
        lineTension: 0.2,
        backgroundColor: 'transparent',
        borderColor: '#009933',
        borderWidth: 4,
        pointStyle: 'rectRot',
        pointBackgroundColor: '#007bff'
      },
      {
        data: [
          0,
          1,
          6,
          7,
          9,
          15,
          19
        ],
        lineTension: 0.2,
        backgroundColor: 'transparent',
        borderColor: '#ff0000',
        borderWidth: 4,
        pointStyle: 'rectRot',
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
