const vm = new Vue({
    el : "#app",
    data : {
        welcomeMessage : "our first vue app",

        deliciousFruit : [
            {name: "apple", flavour: "tasty"},
            {name: "orange", flavour: "sweet"},
            {name: "pineapple", flavour: "tangy"},
        ]
    },

    methods:{
        logFruit(e){
            console.log(e.currentTarget);
        }
    }
});