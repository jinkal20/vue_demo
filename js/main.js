const vm = new Vue({
    el : "#app",
    data : {
        welcomeMessage : "our first vue app",
        anothermessage : "This is HazVue",
        
        targetURL : "http://vuejs.org",
        anchorOff : true,
        hazVue : true,

        deliciousFruit : [
            {name: "apple", flavour: "tasty"},
            {name: "orange", flavour: "sweet"},
            {name: "pineapple", flavour: "tangy"},
        ]
    },

    changeText(){
        this.anothermessage = "changed this from a function call";
    }

    methods:{
        logFruit(e){
            console.log(e.currentTarget);
        }
    }
});

const vm2 = new Vue({
    el: "#footer",
    data:{
        footermessage : "This is footer",
    }
})