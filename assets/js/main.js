var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["Feb 2020", "Mar 2020", "Abr 2020", "May 2020"],
    datasets: [
      {
        label: "Nuevos usuarios",
        backgroundColor: ["#12C9E5", "#12C9E5", "#12C9E5", "#111B54"],
        maxBarThickness: 30,
        borderColor: "rgb(255, 99, 132)",
        data: [50, 100, 150, 200],
      },
    ],
  },

  // Configuration options go here
  options: {},
});
