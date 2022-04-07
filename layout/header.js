function header() {
    return {
        tag : JHTML.DIV,
        class : "header",
        css : {
            width : "100%",
            height : 70,
            backgroundColor : "#f8f8f8",
            boxShadow : 'rgba(0, 0, 0, 0.3) 0px 1px 2px'
        },
        html : [Ragasave.UI.Containers.Column({
            content : [{
                column : {
                    class : "v-m pl-3",
                    css : {
                        width : "60%"
                    }            
                },
                html : [{
                    tag : JHTML.LABEL,
                    class : "ts-3 bold-txt",
                    css : {
                        color : RagasaveColors.primary.bg
                    },
                    text : "Rahul Varma"
                    // text : "Hello"
                }]    
            },
            {
                column : {
                    tag : JHTML.DIV,
                    class : "v-m t-c",
                },
                html : [{
                    tag : JHTML.DIV,
                    class : "fr pr-2 w-100 t-r",
                    html : [modeButton()]
                }]
            }]
        })]
    };
}