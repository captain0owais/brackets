            var td_context = document.getElementById("canvas1").getContext("2d");
            td_context.beginPath();
            td_context.strokeStyle = "black";   
            td_context.lineWidth = "50px";
            td_context.arc(500, 125, 50, 0, 2 * Math.PI);
            td_context.stroke();


            td_context.beginPath();
            td_context.strokeStyle = "blue";   
            td_context.lineWidth = "50px";
            td_context.arc(390, 125, 50, 0, 2 * Math.PI);
            td_context.stroke();


            td_context.beginPath();
            td_context.strokeStyle = "yellow";   
            td_context.lineWidth = "50px";
            td_context.arc(445, 190, 50, 0, 2 * Math.PI);
            td_context.stroke();


            td_context.beginPath();
            td_context.strokeStyle = "green";   
            td_context.lineWidth = "50px";
            td_context.arc(555, 190, 50, 0, 2 * Math.PI);
            td_context.stroke();

            td_context.beginPath();
            td_context.strokeStyle = "red";   
            td_context.lineWidth = "50px";
            td_context.arc(610, 125, 50, 0, 2 * Math.PI);
            td_context.stroke();