(function() {
    var f = function foo() {
        return typeof foo;
    }

    console.log(typeof foo);
    console.log(f());

    // function foo() {
    //     return bar();
    // }

    // function bar() {
    //     return baz();
    // }

    // function baz() {
    //     // debugger;
    // }
    // foo();

    // function foo() {
    //     return bar();
    // }
    // var bar = (function() {
    //     if (window.addEventListener) {
    //         return function() {
    //             return baz();
    //         };
    //     } else if (window.attachEvent) {
    //         return function() {
    //             return baz();
    //         };
    //     }
    // })();

    // function baz() {
    //     debugger;
    // }
    // foo();

    // function foo() {
    //     return bar();
    // }
    // var bar = (function() {
    //     if (window.addEventListener) {
    //         return function bar() {
    //             return baz();
    //         };
    //     } else if (window.attachEvent) {
    //         return function bar() {
    //             return baz();
    //         };
    //     }
    // })();

    // function baz() {
    //     debugger;
    // }
    // foo();

})();