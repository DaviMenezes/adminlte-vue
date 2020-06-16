const data = {
  labels: [
    'Instore Sales',
    'Download Sales',
    'Mail-Order Sales'
  ],
  datasets: [
    {
      data: [30, 12, 20],
      backgroundColor: ['#f56954', '#00a65a', '#f39c12']
    }
  ]
}
const options = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  responsive: true
}
export default { data, options }
