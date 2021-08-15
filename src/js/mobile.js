
export default class Mobile {

    constructor(){
        // dom caching 
        this.mobile = document.querySelector(".mobile");
        this.chatItems = this.mobile.querySelectorAll(".mobile__chat");
        this.chatLoader = this.mobile.querySelectorAll(".loader");
        this.activatingTime = 5000;
        this.loaderDeactivitinTime = 5000;
        this.loaderActivitinTime = 6000;
        this.palseBetweenChanges = 4000;
        // initializing 

        this.render();

    };


    // render

    render(){
        this.animateMessages();
    }


    animateMessages(){
        // pulse messages being animated until initial animation on the mobile end
        setTimeout(() => {
            // iterate over the loaders 
            this.chatLoader.forEach((element,i) => {

                // increase the loading time as more elements added 
                setTimeout(() => {
                    setTimeout(() => {
                        element.classList.add("loader--active");
                        
                        // display the message efter a few seconds 
                        setTimeout(() => {
                         element.classList.remove("loader--active");
                         this.chatItems[i].classList.add("mobile__chat--active");
                        },this.loaderDeactivitinTime)
         
                     },  this.loaderActivitinTime * i);
                }, this.palseBetweenChanges * ( i / 5));
    
            });
        }, this.activatingTime);
    }



}