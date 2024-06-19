gdjs.Smokey_32ControlCode = {};
gdjs.Smokey_32ControlCode.localVariables = [];
gdjs.Smokey_32ControlCode.GDControlObjects1= [];
gdjs.Smokey_32ControlCode.GDControlObjects2= [];
gdjs.Smokey_32ControlCode.GDControlObjects3= [];
gdjs.Smokey_32ControlCode.GDNextObjects1= [];
gdjs.Smokey_32ControlCode.GDNextObjects2= [];
gdjs.Smokey_32ControlCode.GDNextObjects3= [];
gdjs.Smokey_32ControlCode.GDbackObjects1= [];
gdjs.Smokey_32ControlCode.GDbackObjects2= [];
gdjs.Smokey_32ControlCode.GDbackObjects3= [];
gdjs.Smokey_32ControlCode.GDplayer_9595inputObjects1= [];
gdjs.Smokey_32ControlCode.GDplayer_9595inputObjects2= [];
gdjs.Smokey_32ControlCode.GDplayer_9595inputObjects3= [];
gdjs.Smokey_32ControlCode.GDnamenameObjects1= [];
gdjs.Smokey_32ControlCode.GDnamenameObjects2= [];
gdjs.Smokey_32ControlCode.GDnamenameObjects3= [];
gdjs.Smokey_32ControlCode.GDMutedObjects1= [];
gdjs.Smokey_32ControlCode.GDMutedObjects2= [];
gdjs.Smokey_32ControlCode.GDMutedObjects3= [];


gdjs.Smokey_32ControlCode.mapOfGDgdjs_9546Smokey_959532ControlCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Smokey_32ControlCode.GDMutedObjects1});
gdjs.Smokey_32ControlCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Smokey_32ControlCode.GDMutedObjects1, gdjs.Smokey_32ControlCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Smokey_32ControlCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Smokey_32ControlCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Smokey_32ControlCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Smokey_32ControlCode.GDMutedObjects2[k] = gdjs.Smokey_32ControlCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Smokey_32ControlCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("muted");
}
}{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDMutedObjects2[i].toggleVariableBoolean(gdjs.Smokey_32ControlCode.GDMutedObjects2[i].getVariables().getFromIndex(0));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Smokey_32ControlCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Smokey_32ControlCode.GDMutedObjects1[k] = gdjs.Smokey_32ControlCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Smokey_32ControlCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.Smokey_32ControlCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Smokey_32ControlCode.mapOfGDgdjs_9546Smokey_959532ControlCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Smokey_32ControlCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Smokey_32ControlCode.mapOfGDgdjs_9546Smokey_959532ControlCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Smokey_32ControlCode.GDMutedObjects1});
gdjs.Smokey_32ControlCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Smokey_32ControlCode.GDMutedObjects1, gdjs.Smokey_32ControlCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Smokey_32ControlCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Smokey_32ControlCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Smokey_32ControlCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Smokey_32ControlCode.GDMutedObjects2[k] = gdjs.Smokey_32ControlCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Smokey_32ControlCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Smokey_32ControlCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Smokey_32ControlCode.GDMutedObjects1[k] = gdjs.Smokey_32ControlCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Smokey_32ControlCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.Smokey_32ControlCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Smokey_32ControlCode.mapOfGDgdjs_9546Smokey_959532ControlCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Smokey_32ControlCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDMutedObjects1[i].toggleVariableBoolean(gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getVariables().getFromIndex(0));
}
}
{ //Subevents
gdjs.Smokey_32ControlCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Smokey_32ControlCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Smokey_32ControlCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Smokey_32ControlCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.Smokey_32ControlCode.GDNextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Smokey_32ControlCode.GDNextObjects1[k] = gdjs.Smokey_32ControlCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.Smokey_32ControlCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Smokey Intro", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.Smokey_32ControlCode.GDControlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Smokey_32ControlCode.GDNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Smokey_32ControlCode.GDbackObjects1);
{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDNextObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.9);
}
}{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDbackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.1);
}
}{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDControlObjects1.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDControlObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
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
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Smokey_32ControlCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}
{ //Subevents
gdjs.Smokey_32ControlCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Smokey_32ControlCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Smokey_32ControlCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Smokey_32ControlCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}
{ //Subevents
gdjs.Smokey_32ControlCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Smokey_32ControlCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Smokey_32ControlCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.Smokey_32ControlCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Smokey_32ControlCode.GDbackObjects1[k] = gdjs.Smokey_32ControlCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.Smokey_32ControlCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Smokey_32ControlCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Smokey_32ControlCode.GDControlObjects1.length = 0;
gdjs.Smokey_32ControlCode.GDControlObjects2.length = 0;
gdjs.Smokey_32ControlCode.GDControlObjects3.length = 0;
gdjs.Smokey_32ControlCode.GDNextObjects1.length = 0;
gdjs.Smokey_32ControlCode.GDNextObjects2.length = 0;
gdjs.Smokey_32ControlCode.GDNextObjects3.length = 0;
gdjs.Smokey_32ControlCode.GDbackObjects1.length = 0;
gdjs.Smokey_32ControlCode.GDbackObjects2.length = 0;
gdjs.Smokey_32ControlCode.GDbackObjects3.length = 0;
gdjs.Smokey_32ControlCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Smokey_32ControlCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Smokey_32ControlCode.GDplayer_9595inputObjects3.length = 0;
gdjs.Smokey_32ControlCode.GDnamenameObjects1.length = 0;
gdjs.Smokey_32ControlCode.GDnamenameObjects2.length = 0;
gdjs.Smokey_32ControlCode.GDnamenameObjects3.length = 0;
gdjs.Smokey_32ControlCode.GDMutedObjects1.length = 0;
gdjs.Smokey_32ControlCode.GDMutedObjects2.length = 0;
gdjs.Smokey_32ControlCode.GDMutedObjects3.length = 0;

gdjs.Smokey_32ControlCode.eventsList4(runtimeScene);

return;

}

gdjs['Smokey_32ControlCode'] = gdjs.Smokey_32ControlCode;
