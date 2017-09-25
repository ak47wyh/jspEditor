var sde;
var  templates = [{
    "ID": "xbState",
    "NAME": "小便状态",
    "TYPE": "select",
    "TAG": "",
    "DESCNAME": "小便状态",
    "HTML": "<span id=\"xbState\" title=\"小便状态\"  sde-model=\"{&quot;ID&quot;:&quot;xbState&quot;,&quot;TYPE&quot;:&quot;select&quot;,&quot;NAME&quot;:&quot;小便状态&quot;,&quot;TAG&quot;:&quot;&quot;,&quot;DESCNAME&quot;:&quot;小便状态&quot;,&quot;REQUIRED&quot;:0,&quot;FREEINPUT&quot;:0,&quot;COLOR&quot;:&quot;000000&quot;,&quot;VALUE&quot;:&quot;&quot;,&quot;TEXT&quot;:&quot;&quot;,&quot;REMOTEURL&quot;:&quot;&quot;,&quot;BINDINGDATA&quot;:[{&quot;VALUE&quot;:&quot;小便正常&quot;,&quot;TEXT&quot;:&quot;小便正常&quot;,&quot;SELECTED&quot;:0},{&quot;VALUE&quot;:&quot;尿少&quot;,&quot;TEXT&quot;:&quot;尿少&quot;,&quot;SELECTED&quot;:0},{&quot;VALUE&quot;:&quot;无尿&quot;,&quot;TEXT&quot;:&quot;无尿&quot;,&quot;SELECTED&quot;:0},{&quot;VALUE&quot;:&quot;夜尿繁多&quot;,&quot;TEXT&quot;:&quot;夜尿繁多&quot;,&quot;SELECTED&quot;:0}]}\" contenteditable=\"false\" class=\"sde-bg\"><span class=\"sde-left\" style=\"color:#0000FF\" contenteditable=\"false\">[</span><span title=\"小便状态\" style=\"color:#000000;\" class=\"sde-value\" onclick=\"EMR.select.tlspanclick(this);\" ondblclick=\"EMR.select.tlspandblclick(this);\" contenteditable=\"false\">小便状态</span><span style=\"color:#0000FF\" contenteditable=\"false\" class=\"sde-right\">]</span></span>"
},  {
    "ID": "tzState",
    "NAME": "体重状况",
    "TYPE": "select",
    "TAG": "",
    "DESCNAME": "体重状况",
    "HTML": "<span id=\"tzState\" title=\"体重状况\"  sde-model=\"{&quot;ID&quot;:&quot;tzState&quot;,&quot;TYPE&quot;:&quot;select&quot;,&quot;NAME&quot;:&quot;体重状况&quot;,&quot;TAG&quot;:&quot;&quot;,&quot;DESCNAME&quot;:&quot;体重状况&quot;,&quot;REQUIRED&quot;:0,&quot;FREEINPUT&quot;:0,&quot;COLOR&quot;:&quot;000000&quot;,&quot;VALUE&quot;:&quot;&quot;,&quot;TEXT&quot;:&quot;&quot;,&quot;REMOTEURL&quot;:&quot;&quot;,&quot;BINDINGDATA&quot;:[{&quot;VALUE&quot;:&quot;体重无变化11111&quot;,&quot;TEXT&quot;:&quot;体重无变化&quot;,&quot;SELECTED&quot;:0},{&quot;VALUE&quot;:&quot;体重减轻&quot;,&quot;TEXT&quot;:&quot;体重减轻&quot;,&quot;SELECTED&quot;:0},{&quot;VALUE&quot;:&quot;体重增加&quot;,&quot;TEXT&quot;:&quot;体重增加&quot;,&quot;SELECTED&quot;:0}]}\" contenteditable=\"false\" class=\"sde-bg\"><span class=\"sde-left\" style=\"color:#0000FF\" contenteditable=\"false\">[</span><span title=\"体重状况\" style=\"color:#000000;\" class=\"sde-value\" onclick=\"EMR.select.tlspanclick(this);\" ondblclick=\"EMR.select.tlspandblclick(this);\" contenteditable=\"false\">体重状况</span><span style=\"color:#0000FF\" contenteditable=\"false\" class=\"sde-right\">]</span></span>"
}];
 function getSde() {
    sde = new SDE({
        id: "myEditor",
        title: '', //自定义title
        control_templates: templates,
        toolbars: {
            'sde-toolbar-editor': ['history', 'clipboard', 'fonts', 'paragraphs', 'styles'],
            'sde-toolbar-insert': ['horizontal', 'spechars', 'link', 'img', 'map', 'code', 'table', 'formula', 'comment'],
            'sde-toolbar-tables': ['table', 'blockmergecells'],
            'sde-toolbar-views': ['directory', 'showcomment', 'preview'],
            'sde-toolbar-tools': ['drafts', 'print', 'searchreplace', 'wordcount'],
            'sde-toolbar-records': ['sdetemplate', 'sdecontrols'],
            'sde-toolbar-store': ['sdetemplate', 'sdecontrols']
        }
    });
    return sde;

};

/**
 设置编辑模式 mode可选：DESIGN（设计）、EDITOR（编辑）、READONLY（只读）
 **/
function setMode(mode){
    sde.setMode(mode);
    alert("已设置为"+mode+"模式！");
}


SDE.Plugins = [];
SDE.Plugins.push({
    name: 'sde-toolbar-editor-model',
    title: '编辑模式',
    editor: null,
    init: function() {
        //debugger;
        var div = document.createElement('div');
        div.className = 'tab-content-item';
        div.setAttribute('id', this.name);

        var btn1 = document.createElement('div');
        btn1.className = 'tab-content-item-panel';
        btn1.innerHTML = ' <div class="tab-content-item-panel-label">只读模式</div>' +
            '<div class="tab-content-item-panel-content">' +
            '<div style="float:left;">' +
            '<div class="tab-content-item-panel-content-control" onclick="setMode(\'READONLY\')" title="只读模式">' +
            '<div class="sde-icon sde-icon-emrdesign" style="width: 64px;height: 32px;"></div>' +
            '<div style="text-align: center;">只读模式</div>' +
            ' </div>' +
            '</div>' +
            '</div>';
        div.appendChild(btn1);

        var btn2 = document.createElement('div');
        btn2.className = 'tab-content-item-panel';
        btn2.innerHTML = ' <div class="tab-content-item-panel-label">编辑模式</div>' +
            '<div class="tab-content-item-panel-content">' +
            '<div style="float:left;">' +
            '<div class="tab-content-item-panel-content-control" onclick="setMode(\'EDITOR\')" title="编辑模式">' +
            '<div class="sde-icon sde-icon-emrdesign" style="width: 64px;height: 32px;"></div>' +
            '<div style="text-align: center;">编辑模式</div>' +
            ' </div>' +
            '</div>' +
            '</div>';
        div.appendChild(btn2);

        var btn3 = document.createElement('div');
        btn3.className = 'tab-content-item-panel';
        btn3.innerHTML = ' <div class="tab-content-item-panel-label">设计模式</div>' +
            '<div class="tab-content-item-panel-content">' +
            '<div style="float:left;">' +
            '<div class="tab-content-item-panel-content-control" onclick="setMode(\'DESIGN\')" title="设计模式">' +
            '<div class="sde-icon sde-icon-emrdesign" style="width: 64px;height: 32px;"></div>' +
            '<div style="text-align: center;">设计模式</div>' +
            ' </div>' +
            '</div>' +
            '</div>';
        div.appendChild(btn3);
        return div;
    }
},{
    name: 'sde-toolbar-store',
    title: '操作',
    editor: null,
    init: function() {
        //debugger;
        var div = document.createElement('div');
        div.className = 'tab-content-item';
        div.setAttribute('id', this.name);

        var btn1 = document.createElement('div');
        btn1.className = 'tab-content-item-panel';
        btn1.innerHTML = ' <div class="tab-content-item-panel-label">保存</div>' +
            '<div class="tab-content-item-panel-content">' +
            '<div style="float:left;">' +
            '<div class="tab-content-item-panel-content-control" onclick="saveDesign(sde.html())" title="保存">' +
            '<div class="sde-icon sde-icon-emrdesign" style="width: 64px;height: 32px;"></div>' +
            '<div style="text-align: center;">保存</div>' +
            ' </div>' +
            '</div>' +
            '</div>';
        div.appendChild(btn1);

        var btn2 = document.createElement('div');
        btn2.className = 'tab-content-item-panel';
        btn2.innerHTML = ' <div class="tab-content-item-panel-label">新增</div>' +
            '<div class="tab-content-item-panel-content">' +
            '<div style="float:left;">' +
            '<div class="tab-content-item-panel-content-control" onclick="alert(sde.html(\'\'))" title="新增">' +
            '<div class="sde-icon sde-icon-emrdesign" style="width: 64px;height: 32px;"></div>' +
            '<div style="text-align: center;">新增</div>' +
            ' </div>' +
            '</div>' +
            '</div>';
        div.appendChild(btn2);

        var btn3 = document.createElement('div');
        btn3.className = 'tab-content-item-panel';
        btn3.innerHTML = ' <div class="tab-content-item-panel-label">另存页面</div>' +
            '<div class="tab-content-item-panel-content">' +
            '<div style="float:left;">' +
            '<div class="tab-content-item-panel-content-control" onclick="alert(sde.html(\'\'))" title="另存页面">' +
            '<div class="sde-icon sde-icon-emrdesign" style="width: 64px;height: 32px;"></div>' +
            '<div style="text-align: center;">另存页面</div>' +
            ' </div>' +
            '</div>' +
            '</div>';
        div.appendChild(btn3);

        var btn4 = document.createElement('div');
        btn4.className = 'tab-content-item-panel';
        btn4.innerHTML = ' <div class="tab-content-item-panel-label">get所有控件</div>' +
            '<div class="tab-content-item-panel-content">' +
            '<div style="float:left;">' +
            '<div class="tab-content-item-panel-content-control" onclick="getFields(sde)" title="get所有控件">' +
            '<div class="sde-icon sde-icon-emrdesign" style="width: 64px;height: 32px;"></div>' +
            '<div style="text-align: center;">get所有控件</div>' +
            ' </div>' +
            '</div>' +
            '</div>';
        div.appendChild(btn4);
        return div;
    }
});