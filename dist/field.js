/**
 * Created by Administrator on 2017/9/23.
 */






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