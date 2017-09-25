function saveDesign(reqData) {
    var content = "htmlBody="+encodeURIComponent(reqData);
    $.ajax({
        type: "POST",
        url: webroot+'dzbl/saveDesign',
        data: content,
        success: function(msg){
            alert( "Data Saved: " + msg );
        },
        error:function(error){
            alert(error);
        }
    });
}
/**
 * 获取控件，后续用于保存
 * @param sde
 */
function getFields(sde) {
    var controls = sde.getControl();
    for(var i = 0;i<controls.length;i++){
        console.log(JSON.stringify(controls[i]));
    }


    // alert(JSON.stringify(sde.getControl()))
}

function saveHtml(sde) {
    $.getJSON("../data/field.json",function(data){
        //alert(data);
        var conrtrol = JSON.stringify(data[0]);
        sde.html(conrtrol);
    })

}

function getJson() {
    $.getJSON("../data/field.json",function(data){
        //alert(data);
        return data;
    })
}
