

const data = [{ x: 'Monday', }, { x: 'Tuesday' }, { x: 'Wednesday' }, { x: 'Thursday' }, { x: 'Saturday' }, { x: 'Sunday' }];
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
    datasets: [{
      label: '# of Workouts',
      data: [2, 4, 3, 5, 2, 3],
      options: {
        layout: {
          padding: 30
        },
        plugins: {
          title: {
            display: true,
            text: 'Custom Chart Title',
            padding: {
              top: 10,
              bottom: 30
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }

      },

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
});



// const resetButton = document.querySelector('#reset-button');
// resetButton.onclick = function () {

//   console.log("button clicked");
// }