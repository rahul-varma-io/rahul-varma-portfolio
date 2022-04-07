const modeButton = function () {
    return {
        tag : JHTML.DIV,
        html : [Ragasave.UI.Controls.Button({
            label : "G U I",                    
            // class : "mr-1",
            css : {
                marginRight : 10
            },
            class : ' cli-mode-btn',
            size : 30,
            color : "crimson",                    
            style : "pull",
            bind : [{
                type : "click",
                handler : function(){
                    localStorage.setItem("mode", "gui");
                    window.location.reload();
                }
            }]
        }),Ragasave.UI.Controls.Button({
            label : "C L I",                    
            size : 30,
            color : "blue",
            style : "pull",
            bind : [{
                type : "click",
                handler : function(){                    
                    localStorage.setItem("mode", "cli");
                    window.location.reload();
                }
            }]
        })]
    };
}

if(localStorage.getItem("mode") == "cli"){
    window.open("./cli/", "_self");
}