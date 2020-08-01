let app = {};

let init = (app) => {
    app.data = {
        sofa_color: "red",
    };

    app.select = (sofa_color) => {
        app.vue.sofa_color = sofa_color;
    };

    app.methods = {
        select: app.select,
    };

    app.vue = new Vue({
        el: "#vue-target",
        data: app.data,
        methods: app.methods
    });

    app.init = () => {
        app.vue.sofa_color = "red";
    };

    app.init();
};

init(app);