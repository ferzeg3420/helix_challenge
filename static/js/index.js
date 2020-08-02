let app = {};

let init = (app) => {
    app.data = {
        sofa_color: "red",
        is_mobile: false,
    };

    app.select = (sofa_color) => {
        app.vue.sofa_color = sofa_color;
    };

    app.update_is_mobile = () => {
        const width = window.innerWidth;
        app.vue.is_mobile = width < 600;
    };

    app.methods = {
        select: app.select,
        update_is_mobile: app.update_is_mobile,
    };

    app.vue = new Vue({
        el: "#vue-target",
        data: app.data,
        methods: app.methods
    });

    app.init = () => {
        const width = window.innerWidth;
        app.vue.sofa_color = "red";
        app.vue.is_mobile = width < 600;
    };

    app.init();
};

init(app);

window.onresize = app.update_is_mobile;
