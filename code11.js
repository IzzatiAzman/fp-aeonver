gdjs.BBQ_32IntroCode = {};
gdjs.BBQ_32IntroCode.localVariables = [];
gdjs.BBQ_32IntroCode.GDinstructionsObjects1= [];
gdjs.BBQ_32IntroCode.GDinstructionsObjects2= [];
gdjs.BBQ_32IntroCode.GDinstructionsObjects3= [];
gdjs.BBQ_32IntroCode.GDStartObjects1= [];
gdjs.BBQ_32IntroCode.GDStartObjects2= [];
gdjs.BBQ_32IntroCode.GDStartObjects3= [];
gdjs.BBQ_32IntroCode.GDBackObjects1= [];
gdjs.BBQ_32IntroCode.GDBackObjects2= [];
gdjs.BBQ_32IntroCode.GDBackObjects3= [];
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects1= [];
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects2= [];
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects3= [];
gdjs.BBQ_32IntroCode.GDnamenameObjects1= [];
gdjs.BBQ_32IntroCode.GDnamenameObjects2= [];
gdjs.BBQ_32IntroCode.GDnamenameObjects3= [];
gdjs.BBQ_32IntroCode.GDMutedObjects1= [];
gdjs.BBQ_32IntroCode.GDMutedObjects2= [];
gdjs.BBQ_32IntroCode.GDMutedObjects3= [];


gdjs.BBQ_32IntroCode.mapOfGDgdjs_9546BBQ_959532IntroCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.BBQ_32IntroCode.GDMutedObjects1});
gdjs.BBQ_32IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BBQ_32IntroCode.GDMutedObjects1, gdjs.BBQ_32IntroCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BBQ_32IntroCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.BBQ_32IntroCode.GDMutedObjects2[i].getVariableBoolean(gdjs.BBQ_32IntroCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.BBQ_32IntroCode.GDMutedObjects2[k] = gdjs.BBQ_32IntroCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.BBQ_32IntroCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("muted");
}
}{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDMutedObjects2[i].toggleVariableBoolean(gdjs.BBQ_32IntroCode.GDMutedObjects2[i].getVariables().getFromIndex(0));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BBQ_32IntroCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getVariableBoolean(gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.BBQ_32IntroCode.GDMutedObjects1[k] = gdjs.BBQ_32IntroCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.BBQ_32IntroCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.BBQ_32IntroCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BBQ_32IntroCode.mapOfGDgdjs_9546BBQ_959532IntroCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BBQ_32IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.BBQ_32IntroCode.mapOfGDgdjs_9546BBQ_959532IntroCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.BBQ_32IntroCode.GDMutedObjects1});
gdjs.BBQ_32IntroCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BBQ_32IntroCode.GDMutedObjects1, gdjs.BBQ_32IntroCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BBQ_32IntroCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.BBQ_32IntroCode.GDMutedObjects2[i].getVariableBoolean(gdjs.BBQ_32IntroCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.BBQ_32IntroCode.GDMutedObjects2[k] = gdjs.BBQ_32IntroCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.BBQ_32IntroCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BBQ_32IntroCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getVariableBoolean(gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.BBQ_32IntroCode.GDMutedObjects1[k] = gdjs.BBQ_32IntroCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.BBQ_32IntroCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.BBQ_32IntroCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BBQ_32IntroCode.mapOfGDgdjs_9546BBQ_959532IntroCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.BBQ_32IntroCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDMutedObjects1[i].toggleVariableBoolean(gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getVariables().getFromIndex(0));
}
}
{ //Subevents
gdjs.BBQ_32IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.BBQ_32IntroCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.BBQ_32IntroCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BBQ_32IntroCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.BBQ_32IntroCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BBQ_32IntroCode.GDBackObjects1[k] = gdjs.BBQ_32IntroCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.BBQ_32IntroCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BBQ Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BBQ_32IntroCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BBQ_32IntroCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.BBQ_32IntroCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BBQ_32IntroCode.GDStartObjects1[k] = gdjs.BBQ_32IntroCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.BBQ_32IntroCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bonus", false);
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
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.BBQ_32IntroCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}
{ //Subevents
gdjs.BBQ_32IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.BBQ_32IntroCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}
{ //Subevents
gdjs.BBQ_32IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.BBQ_32IntroCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BBQ_32IntroCode.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.BBQ_32IntroCode.GDinstructionsObjects1);
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDinstructionsObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDBackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.1);
}
}{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDStartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.645);
}
}}

}


};

gdjs.BBQ_32IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BBQ_32IntroCode.GDinstructionsObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDinstructionsObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDinstructionsObjects3.length = 0;
gdjs.BBQ_32IntroCode.GDStartObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDStartObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDStartObjects3.length = 0;
gdjs.BBQ_32IntroCode.GDBackObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDBackObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDBackObjects3.length = 0;
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects3.length = 0;
gdjs.BBQ_32IntroCode.GDnamenameObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDnamenameObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDnamenameObjects3.length = 0;
gdjs.BBQ_32IntroCode.GDMutedObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDMutedObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDMutedObjects3.length = 0;

gdjs.BBQ_32IntroCode.eventsList4(runtimeScene);

return;

}

gdjs['BBQ_32IntroCode'] = gdjs.BBQ_32IntroCode;
