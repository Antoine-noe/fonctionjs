/*
var evtAfficher = document.querySelector('#boutAfficherHistogramme');
evtAfficher.addEventListener('click', drawChart);


            function drawChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Age', 'Weight'],
                    [ 8,      12],
                    [ 4,      5.5],
                    [ 11,     14],
                    [ 4,      5],
                    [ 3,      3.5],
                    [ 6.5,    7]
                ]);

                var options = {

                    title: 'Age vs. Weight comparison',
                    hAxis: {title: 'Age', minValue: 0, maxValue: 15},
                    vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
                    legend: 'none'
                };


                var chart = new google.visualization.ScatterChart(document.getElementById('piechart'));

                chart.draw(data, options);



            }*/



            var evtAfficher = document.querySelector('#boutAfficherHistogramme');
            evtAfficher.addEventListener('click', tracerNuage);







            ///////////////////////////////////////////////////////////////////////////////////////

            function tracerNuage ()
            {
                var donnees = new google.visualization.DataTable();
                donnees.addColumn('number');
                donnees.addColumn('number');

                for(let i=0; i<1; i++)
                {
                    donnees.addRow([Math.floor(Math.random()*100),(Math.floor(Math.random()*100))]);
                }




                var options ={
                    title:'nuage de points',
                    legend: 'none',
                    vAxis:{title: "Ordonnées"},
                    hAxis: {title: "Abcisse"},
                    crosshair:{trigger: 'both'}
                };
                var chart = new google.visualization.ScatterChart(document.getElementById('piechart'));

                chart.draw(donnees, options);
            }