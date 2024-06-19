gdjs.Tempura_32ControlCode = {};
gdjs.Tempura_32ControlCode.localVariables = [];
gdjs.Tempura_32ControlCode.GDControlObjects1= [];
gdjs.Tempura_32ControlCode.GDControlObjects2= [];
gdjs.Tempura_32ControlCode.GDControlObjects3= [];
gdjs.Tempura_32ControlCode.GDNextObjects1= [];
gdjs.Tempura_32ControlCode.GDNextObjects2= [];
gdjs.Tempura_32ControlCode.GDNextObjects3= [];
gdjs.Tempura_32ControlCode.GDbackObjects1= [];
gdjs.Tempura_32ControlCode.GDbackObjects2= [];
gdjs.Tempura_32ControlCode.GDbackObjects3= [];
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects1= [];
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects2= [];
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects3= [];
gdjs.Tempura_32ControlCode.GDnamenameObjects1= [];
gdjs.Tempura_32ControlCode.GDnamenameObjects2= [];
gdjs.Tempura_32ControlCode.GDnamenameObjects3= [];
gdjs.Tempura_32ControlCode.GDMutedObjects1= [];
gdjs.Tempura_32ControlCode.GDMutedObjects2= [];
gdjs.Tempura_32ControlCode.GDMutedObjects3= [];


gdjs.Tempura_32ControlCode.mapOfGDgdjs_9546Tempura_959532ControlCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Tempura_32ControlCode.GDMutedObjects1});
gdjs.Tempura_32ControlCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Tempura_32ControlCode.GDMutedObjects1, gdjs.Tempura_32ControlCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32ControlCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Tempura_32ControlCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Tempura_32ControlCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32ControlCode.GDMutedObjects2[k] = gdjs.Tempura_32ControlCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Tempura_32ControlCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("muted");
}
}{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDMutedObjects2[i].toggleVariableBoolean(gdjs.Tempura_32ControlCode.GDMutedObjects2[i].getVariables().getFromIndex(0));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32ControlCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32ControlCode.GDMutedObjects1[k] = gdjs.Tempura_32ControlCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Tempura_32ControlCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.Tempura_32ControlCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Tempura_32ControlCode.mapOfGDgdjs_9546Tempura_959532ControlCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Tempura_32ControlCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Tempura_32ControlCode.mapOfGDgdjs_9546Tempura_959532ControlCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Tempura_32ControlCode.GDMutedObjects1});
gdjs.Tempura_32ControlCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Tempura_32ControlCode.GDMutedObjects1, gdjs.Tempura_32ControlCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32ControlCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Tempura_32ControlCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Tempura_32ControlCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32ControlCode.GDMutedObjects2[k] = gdjs.Tempura_32ControlCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Tempura_32ControlCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32ControlCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32ControlCode.GDMutedObjects1[k] = gdjs.Tempura_32ControlCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Tempura_32ControlCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.Tempura_32ControlCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Tempura_32ControlCode.mapOfGDgdjs_9546Tempura_959532ControlCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Tempura_32ControlCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDMutedObjects1[i].toggleVariableBoolean(gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getVariables().getFromIndex(0));
}
}
{ //Subevents
gdjs.Tempura_32ControlCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Tempura_32ControlCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Tempura_32ControlCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32ControlCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.Tempura_32ControlCode.GDNextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32ControlCode.GDNextObjects1[k] = gdjs.Tempura_32ControlCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.Tempura_32ControlCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tempura Intro", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.Tempura_32ControlCode.GDControlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Tempura_32ControlCode.GDNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Tempura_32ControlCode.GDbackObjects1);
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDNextObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.9);
}
}{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDControlObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDControlObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDbackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "775a79b3d3e7bcccf78c92e4a559d328630b2a029a20ad03127f3ca56e453972_Energizing.aac", true, 70, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Tempura_32ControlCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}
{ //Subevents
gdjs.Tempura_32ControlCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Tempura_32ControlCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}
{ //Subevents
gdjs.Tempura_32ControlCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Tempura_32ControlCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32ControlCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.Tempura_32ControlCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32ControlCode.GDbackObjects1[k] = gdjs.Tempura_32ControlCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.Tempura_32ControlCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Tempura_32ControlCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Tempura_32ControlCode.GDControlObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDControlObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDControlObjects3.length = 0;
gdjs.Tempura_32ControlCode.GDNextObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDNextObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDNextObjects3.length = 0;
gdjs.Tempura_32ControlCode.GDbackObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDbackObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDbackObjects3.length = 0;
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects3.length = 0;
gdjs.Tempura_32ControlCode.GDnamenameObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDnamenameObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDnamenameObjects3.length = 0;
gdjs.Tempura_32ControlCode.GDMutedObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDMutedObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDMutedObjects3.length = 0;

gdjs.Tempura_32ControlCode.eventsList4(runtimeScene);

return;

}

gdjs['Tempura_32ControlCode'] = gdjs.Tempura_32ControlCode;
