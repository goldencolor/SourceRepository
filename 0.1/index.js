Std.source.response("StdJS",function(){
    function CSSFile_UI(name){
        return "ui/theme/default/" + name + ".css";
    }
    function JSFile_UI(name){
        return "ui/" + name + ".js";
    }
    return {
        "ui.Image":JSFile_UI("ui.Image"),
        "ui.Label":JSFile_UI("ui.Label"),
        "ui.Item":JSFile_UI("ui.Item"),
        "ui.ToolTip":JSFile_UI("ui.ToolTip"),
        "ui.CheckBox":[
            CSSFile_UI("ui.CheckBox"),
            JSFile_UI("ui.CheckBox")
        ],
        "ui.RadioBox":[
            CSSFile_UI("ui.RadioBox"),
            JSFile_UI("ui.RadioBox")
        ],
        "ui.SwitchBox":[
            CSSFile_UI("ui.SwitchBox"),
            JSFile_UI("ui.SwitchBox")
        ],
        "ui.LineEdit":[
            CSSFile_UI("ui.Edit"),
            JSFile_UI("ui.Edit")
        ],
        "ui.Button":[
            CSSFile_UI("ui.Button"),
            JSFile_UI("ui.Button")
        ],
        "ui.Canvas":[
            JSFile_UI("ui.Canvas")
        ],
        "ui.ColorPicker":[
            CSSFile_UI("ui.ColorPicker"),
            JSFile_UI("ui.ColorPicker")
        ],
        "ui.DatePicker":[
            CSSFile_UI("ui.DatePicker"),
            JSFile_UI("ui.DatePicker")
        ],
        "ui.List":{
            files:[
                CSSFile_UI("ui.List"),
                JSFile_UI("ui.List")
            ]
        },
        "ui.Menu":{
            basics:[
                "ui.Item"
            ],
            files:[
                CSSFile_UI("ui.Menu"),
                JSFile_UI("ui.Menu")
            ]
        },
        "ui.MenuBar":[
            CSSFile_UI("ui.MenuBar"),
            JSFile_UI("ui.MenuBar")
        ],
        "ui.ComboBox":[
            CSSFile_UI("ui.ComboBox"),
            JSFile_UI("ui.ComboBox")
        ],
        "ui.ToolBar":[
            CSSFile_UI("ui.ToolBar"),
            JSFile_UI("ui.ToolBar")
        ],
        "ui.Panel":[
            CSSFile_UI("ui.Panel"),
            JSFile_UI("ui.Panel")
        ],
        "ui.Window":[
            CSSFile_UI("ui.Window"),
            JSFile_UI("ui.Window")
        ],
        "ui.MessageBox":[
            CSSFile_UI("ui.MessageBox"),
            JSFile_UI("ui.MessageBox")
        ],
        "ui.Pagination":[
            CSSFile_UI("ui.Pagination"),
            JSFile_UI("ui.Pagination")
        ],
        "ui.Progress":[
            CSSFile_UI("ui.Progress"),
            JSFile_UI("ui.Progress")
        ],
        "ui.Accordion":[
            CSSFile_UI("ui.Accordion"),
            JSFile_UI("ui.Accordion")
        ],
        "ui.Tabs":[
            CSSFile_UI("ui.Tabs"),
            JSFile_UI("ui.Tabs")
        ],
        "ui.Slider":[
            CSSFile_UI("ui.Slider"),
            JSFile_UI("ui.Slider")
        ],
        "ui.Tree":[
            CSSFile_UI("ui.Tree"),
            JSFile_UI("ui.Tree")
        ],
        "ui.GridView":[
            CSSFile_UI("ui.GridView"),
            JSFile_UI("ui.GridView")
        ],
        "ui.PropertyGird":[
            CSSFile_UI("ui.PropertyGrid"),
            JSFile_UI("ui.PropertyGrid")
        ],
        "ui.Video":[
            CSSFile_UI("ui.Video"),
            JSFile_UI("ui.Video")
        ]
    };
});