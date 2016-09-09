(function () {
    /************************************/
    /*     INITIALIZE REVEAL             */
    /* ************************************/
    Reveal.initialize({
        width: "60%",
        controls: true,
        progress: true,
        history: true,
        dependencies: [
            // Syntax highlight for <code> elements
            { src: '../bower_components/reveal-js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
        ]
    });
    Reveal.addEventListener("fragmentshown", function (event) {
        if ($(event.fragment).hasClass("not-spending-time")) {
            $("p.spending-time").addClass("line-through");
        }
    });
    Reveal.addEventListener("fragmenthidden", function (event) {
        if ($(event.fragment).hasClass("not-spending-time")) {
            $("p.spending-time").removeClass("line-through");
        }
    });
    /************************************/
    /*    EXAMPLE DEMO                   */
    /* ************************************/
    /**
     * Returns a name introduced into input
     *
     * @returns {string}
     */
    function getName() {
        return $(".example-form [name=name]").val();
    }
    /**
     * Returns a number introduced into input
     *
     * @returns {number}
     */
    function getNumber() {
        return parseInt($(".example-form [name=number]").val(), 10);
    }
    /**
     * Returns a checked operation
     *
     * @returns {string}
     */
    function getOperation() {
        return $(".example-form [name=operation]:checked").val();
    }
    /**
     * Calculates a factorial of a given number
     *
     * @param {number} number
     * @returns {number}
     */
    function factorial(number) {
        if (number === 0 || number === 1) {
            return 1;
        }
        return number * factorial(number - 1);
    }
    /**
     * Calculates a square of a given number
     *
     * @param {number} number
     * @returns {number}
     */
    function square(number) {
        return number * number;
    }

    /**
     * Returns a current time in a form hh:mm:ss
     *
     * @returns {string}
     */
    function getTimeString() {
        var d;

        d = new Date();
        return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

    /**
     * Creates a text based on the name, time and the result of operation
     *
     * @param {string} name
     * @param {string} time
     * @param {number} result
     * @returns {string}
     */
    function pleaseCreateFullText(name, time, result) {
        return "Hello " + name + "! " + "Now is " + time + ". The result of your operation is " + result;
    }
    /**
     * handler for the submit form
     */
    $(".example-form1 .submit").click(function (ev) {
        var number, name, time, result, text;

        ev.preventDefault();
        ev.stopPropagation();

        name = getName();
        number = getNumber();
        time = getTimeString();

        result = getOperation() === "factorial" ? factorial(number) : square(number);
        text = pleaseCreateFullText(name, time, result);

        $("#example-result .result").html(text);
    });
    /**
     * Bad example
     */
    $(".example-form .submit").click(function (ev) {
        var number, name, date, time, result, text, operation;

        ev.preventDefault();
        ev.stopPropagation();

        name = $("[name=name]").val();
        number = parseInt($("[name=number").val(), 10);
        date = new Date();
        time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();;

        operation = $("[name=operation]:checked").val();
        if (operation === "factorial") {
            result = 1;
            for (var i = 2; i <= number; i++) {
                result *= i;
            }
        } else {
            result = number * number;
        }
        text = "Hello " + name + "! " + "Now is " + time + ". The result of your operation is " + result;

        $("#example-result .result").html(text);
    });
})();
