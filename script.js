    function myFunction() {
        var date = new Date()
        var h = date.getHours()
        var m = date.getMinutes()
        var s = date.getSeconds()

        var time = h+':'+m+':'+s
        document.getElementById('demo').innerHTML = time

        if (h <12) {
            document.getElementById('wel').innerHTML = "Good Morning"
        }
        else if (h > 12 && h< 19) {
            document.getElementById('wel').innerHTML = "Good Afternoon"
        }
        else {
            document.getElementById('wel').innerHTML = "Good Evening"
        }

        setTimeout(myFunction, 1000);
    }