gdjs.Name_32SceneCode = {};
gdjs.Name_32SceneCode.localVariables = [];
gdjs.Name_32SceneCode.GDStart_9595GameObjects1= [];
gdjs.Name_32SceneCode.GDStart_9595GameObjects2= [];
gdjs.Name_32SceneCode.GDStart_9595GameObjects3= [];
gdjs.Name_32SceneCode.GDplay_9595btnObjects1= [];
gdjs.Name_32SceneCode.GDplay_9595btnObjects2= [];
gdjs.Name_32SceneCode.GDplay_9595btnObjects3= [];
gdjs.Name_32SceneCode.GDbackgroundObjects1= [];
gdjs.Name_32SceneCode.GDbackgroundObjects2= [];
gdjs.Name_32SceneCode.GDbackgroundObjects3= [];
gdjs.Name_32SceneCode.GDnameBgObjects1= [];
gdjs.Name_32SceneCode.GDnameBgObjects2= [];
gdjs.Name_32SceneCode.GDnameBgObjects3= [];
gdjs.Name_32SceneCode.GDrequired_9595nameObjects1= [];
gdjs.Name_32SceneCode.GDrequired_9595nameObjects2= [];
gdjs.Name_32SceneCode.GDrequired_9595nameObjects3= [];
gdjs.Name_32SceneCode.GDDisclaimerObjects1= [];
gdjs.Name_32SceneCode.GDDisclaimerObjects2= [];
gdjs.Name_32SceneCode.GDDisclaimerObjects3= [];
gdjs.Name_32SceneCode.GDTnCObjects1= [];
gdjs.Name_32SceneCode.GDTnCObjects2= [];
gdjs.Name_32SceneCode.GDTnCObjects3= [];
gdjs.Name_32SceneCode.GDplayer_9595inputObjects1= [];
gdjs.Name_32SceneCode.GDplayer_9595inputObjects2= [];
gdjs.Name_32SceneCode.GDplayer_9595inputObjects3= [];
gdjs.Name_32SceneCode.GDnamenameObjects1= [];
gdjs.Name_32SceneCode.GDnamenameObjects2= [];
gdjs.Name_32SceneCode.GDnamenameObjects3= [];
gdjs.Name_32SceneCode.GDMutedObjects1= [];
gdjs.Name_32SceneCode.GDMutedObjects2= [];
gdjs.Name_32SceneCode.GDMutedObjects3= [];


gdjs.Name_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("namename"), gdjs.Name_32SceneCode.GDnamenameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDnamenameObjects2.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDnamenameObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDnamenameObjects2[k] = gdjs.Name_32SceneCode.GDnamenameObjects2[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDnamenameObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("required_name"), gdjs.Name_32SceneCode.GDrequired_9595nameObjects2);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDrequired_9595nameObjects2.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDrequired_9595nameObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("namename"), gdjs.Name_32SceneCode.GDnamenameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDnamenameObjects1.length;i<l;++i) {
    if ( !(gdjs.Name_32SceneCode.GDnamenameObjects1[i].getBehavior("Text").getText() == "") ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDnamenameObjects1[k] = gdjs.Name_32SceneCode.GDnamenameObjects1[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDnamenameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Name_32SceneCode.GDplayer_9595inputObjects1);
gdjs.copyArray(runtimeScene.getObjects("required_name"), gdjs.Name_32SceneCode.GDrequired_9595nameObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDrequired_9595nameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDrequired_9595nameObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("User").getChild("name").setString((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.Name_32SceneCode.mapOfGDgdjs_9546Name_959532SceneCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Name_32SceneCode.GDMutedObjects1});
gdjs.Name_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Name_32SceneCode.GDMutedObjects1, gdjs.Name_32SceneCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Name_32SceneCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDMutedObjects2[k] = gdjs.Name_32SceneCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Name_32SceneCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Name_32SceneCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("muted");
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDMutedObjects2[i].toggleVariableBoolean(gdjs.Name_32SceneCode.GDMutedObjects2[i].getVariables().getFromIndex(0));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

/* Reuse gdjs.Name_32SceneCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Name_32SceneCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDMutedObjects1[k] = gdjs.Name_32SceneCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Name_32SceneCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Name_32SceneCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.Name_32SceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Name_32SceneCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Name_32SceneCode.mapOfGDgdjs_9546Name_959532SceneCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Name_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Name_32SceneCode.mapOfGDgdjs_9546Name_959532SceneCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Name_32SceneCode.GDMutedObjects1});
gdjs.Name_32SceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Name_32SceneCode.GDMutedObjects1, gdjs.Name_32SceneCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Name_32SceneCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDMutedObjects2[k] = gdjs.Name_32SceneCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Name_32SceneCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Name_32SceneCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

/* Reuse gdjs.Name_32SceneCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Name_32SceneCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDMutedObjects1[k] = gdjs.Name_32SceneCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Name_32SceneCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Name_32SceneCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.Name_32SceneCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Name_32SceneCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Name_32SceneCode.mapOfGDgdjs_9546Name_959532SceneCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Name_32SceneCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Name_32SceneCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDMutedObjects1[i].toggleVariableBoolean(gdjs.Name_32SceneCode.GDMutedObjects1[i].getVariables().getFromIndex(0));
}
}
{ //Subevents
gdjs.Name_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Name_32SceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.Name_32SceneCode.GDplay_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDplay_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDplay_9595btnObjects1[k] = gdjs.Name_32SceneCode.GDplay_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}
{ //Subevents
gdjs.Name_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TnC"), gdjs.Name_32SceneCode.GDTnCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDTnCObjects1.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDTnCObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDTnCObjects1[k] = gdjs.Name_32SceneCode.GDTnCObjects1[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDTnCObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://drive.google.com/file/d/1VTVvYE7CRUIZEOltO6UYP-t5WwyIGQNd/view?usp=sharing", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Disclaimer"), gdjs.Name_32SceneCode.GDDisclaimerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_Game"), gdjs.Name_32SceneCode.GDStart_9595GameObjects1);
gdjs.copyArray(runtimeScene.getObjects("TnC"), gdjs.Name_32SceneCode.GDTnCObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Name_32SceneCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("nameBg"), gdjs.Name_32SceneCode.GDnameBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.Name_32SceneCode.GDplay_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Name_32SceneCode.GDplayer_9595inputObjects1);
gdjs.copyArray(runtimeScene.getObjects("required_name"), gdjs.Name_32SceneCode.GDrequired_9595nameObjects1);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDStart_9595GameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDStart_9595GameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDrequired_9595nameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDrequired_9595nameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDplay_9595btnObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDDisclaimerObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDDisclaimerObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDbackgroundObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDnameBgObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDnameBgObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDTnCObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDTnCObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("required_name"), gdjs.Name_32SceneCode.GDrequired_9595nameObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "72e9c7d27d07ead77a928dacdf3947412c9aa607e22b3a94d26fa7f9412224ee_01 - super mushroom eater revised and fixed.aac", true, 70, 1);
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDrequired_9595nameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDrequired_9595nameObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("namename"), gdjs.Name_32SceneCode.GDnamenameObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Name_32SceneCode.GDplayer_9595inputObjects1);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDnamenameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDnamenameObjects1[i].getBehavior("Text").setText((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDnamenameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDnamenameObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Name_32SceneCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}
{ //Subevents
gdjs.Name_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Name_32SceneCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}
{ //Subevents
gdjs.Name_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Name_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Name_32SceneCode.GDStart_9595GameObjects1.length = 0;
gdjs.Name_32SceneCode.GDStart_9595GameObjects2.length = 0;
gdjs.Name_32SceneCode.GDStart_9595GameObjects3.length = 0;
gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length = 0;
gdjs.Name_32SceneCode.GDplay_9595btnObjects2.length = 0;
gdjs.Name_32SceneCode.GDplay_9595btnObjects3.length = 0;
gdjs.Name_32SceneCode.GDbackgroundObjects1.length = 0;
gdjs.Name_32SceneCode.GDbackgroundObjects2.length = 0;
gdjs.Name_32SceneCode.GDbackgroundObjects3.length = 0;
gdjs.Name_32SceneCode.GDnameBgObjects1.length = 0;
gdjs.Name_32SceneCode.GDnameBgObjects2.length = 0;
gdjs.Name_32SceneCode.GDnameBgObjects3.length = 0;
gdjs.Name_32SceneCode.GDrequired_9595nameObjects1.length = 0;
gdjs.Name_32SceneCode.GDrequired_9595nameObjects2.length = 0;
gdjs.Name_32SceneCode.GDrequired_9595nameObjects3.length = 0;
gdjs.Name_32SceneCode.GDDisclaimerObjects1.length = 0;
gdjs.Name_32SceneCode.GDDisclaimerObjects2.length = 0;
gdjs.Name_32SceneCode.GDDisclaimerObjects3.length = 0;
gdjs.Name_32SceneCode.GDTnCObjects1.length = 0;
gdjs.Name_32SceneCode.GDTnCObjects2.length = 0;
gdjs.Name_32SceneCode.GDTnCObjects3.length = 0;
gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Name_32SceneCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Name_32SceneCode.GDplayer_9595inputObjects3.length = 0;
gdjs.Name_32SceneCode.GDnamenameObjects1.length = 0;
gdjs.Name_32SceneCode.GDnamenameObjects2.length = 0;
gdjs.Name_32SceneCode.GDnamenameObjects3.length = 0;
gdjs.Name_32SceneCode.GDMutedObjects1.length = 0;
gdjs.Name_32SceneCode.GDMutedObjects2.length = 0;
gdjs.Name_32SceneCode.GDMutedObjects3.length = 0;

gdjs.Name_32SceneCode.eventsList5(runtimeScene);

return;

}

gdjs['Name_32SceneCode'] = gdjs.Name_32SceneCode;
