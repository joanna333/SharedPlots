function increaseRadius() {
    let currentRadius = d3.select(this).attr('r')
    d3.select(this).transition().duration(1500)
    .ease(d3.easeElastic)
    .attr('r', parseInt(currentRadius) + 5);
}

function reduceRadius() {
    d3.select(this).transition().duration(250)
    .attr('r', 3)
    .transition().duration(250)
    .attr('r', 5);
}

function showCoordinates() {
    d3.select('#x').text(this.Xf)
    d3.select('#y').text(this.Yf)
}

function loadData() {
    d3.csv('https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv')
        .then(function (data) {
            circles = d3.select('svg')
                            .selectAll('circle')
                            .data(data)
            circles.join('circle')
                    .attr('cx', d => d.Xi)
                    .attr('cy', d => d.Yi)
                    .attr('r', 5)
                    .attr('fill', d => d.color)
                    .transition().duration(2500)
                    .ease(d3.easeElastic)
                    .attr('cx', d => d.Xf)
                    .attr('cy', d => d.Yf)
            d3.selectAll('circle').on('mouseover', increaseRadius)
            d3.selectAll('circle').on('mouseout', reduceRadius)
            d3.selectAll('circle').on('click', showCoordinates)
    })
}




document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
      loadData() // Diese Funktion wird beim Klick ausgeführt
    });
  });