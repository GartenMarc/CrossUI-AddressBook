xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div56")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("32.733333333333334em")
                .setHeight("53.4em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[{
                "desc":"load page 1",
                "type":"page",
                "target":"App.Address",
                "method":"show",
                "args":["{page.xui_ui_div17}"]
            }]
        }
    }
});