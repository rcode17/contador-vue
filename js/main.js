'use strict';

const app = Vue.createApp({

    data(){
        return{

            title : "Contador App - Ricky",
            count : 0,
        };
    },

    methods :{
        modCount(instruction = "add", limit = 1){

            if(instruction === "dis"){

                this.count = this.count -limit;

            }else{

                this.count = this.count +limit;

            }
            
            
        },

        
    },
    
});


// #41b883 verde , #35495e gris
