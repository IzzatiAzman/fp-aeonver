gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDGame_9595overObjects1= [];
gdjs.Game_32OverCode.GDGame_9595overObjects2= [];
gdjs.Game_32OverCode.GDGame_9595overObjects3= [];
gdjs.Game_32OverCode.GDbackgroundObjects1= [];
gdjs.Game_32OverCode.GDbackgroundObjects2= [];
gdjs.Game_32OverCode.GDbackgroundObjects3= [];
gdjs.Game_32OverCode.GDBGVideoObjects1= [];
gdjs.Game_32OverCode.GDBGVideoObjects2= [];
gdjs.Game_32OverCode.GDBGVideoObjects3= [];
gdjs.Game_32OverCode.GDMainMenuObjects1= [];
gdjs.Game_32OverCode.GDMainMenuObjects2= [];
gdjs.Game_32OverCode.GDMainMenuObjects3= [];
gdjs.Game_32OverCode.GDreplayObjects1= [];
gdjs.Game_32OverCode.GDreplayObjects2= [];
gdjs.Game_32OverCode.GDreplayObjects3= [];
gdjs.Game_32OverCode.GDplayer_9595inputObjects1= [];
gdjs.Game_32OverCode.GDplayer_9595inputObjects2= [];
gdjs.Game_32OverCode.GDplayer_9595inputObjects3= [];
gdjs.Game_32OverCode.GDnamenameObjects1= [];
gdjs.Game_32OverCode.GDnamenameObjects2= [];
gdjs.Game_32OverCode.GDnamenameObjects3= [];
gdjs.Game_32OverCode.GDMutedObjects1= [];
gdjs.Game_32OverCode.GDMutedObjects2= [];
gdjs.Game_32OverCode.GDMutedObjects3= [];


gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Game_32OverCode.GDMutedObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32OverCode.GDMutedObjects1, gdjs.Game_32OverCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Game_32OverCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDMutedObjects2[k] = gdjs.Game_32OverCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("muted");
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMutedObjects2[i].toggleVariableBoolean(gdjs.Game_32OverCode.GDMutedObjects2[i].getVariables().getFromIndex(0));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

/* Reuse gdjs.Game_32OverCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Game_32OverCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDMutedObjects1[k] = gdjs.Game_32OverCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32OverCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Game_32OverCode.GDMutedObjects1});
gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32OverCode.GDMutedObjects1, gdjs.Game_32OverCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Game_32OverCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDMutedObjects2[k] = gdjs.Game_32OverCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

/* Reuse gdjs.Game_32OverCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Game_32OverCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDMutedObjects1[k] = gdjs.Game_32OverCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.Game_32OverCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32OverCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMutedObjects1[i].toggleVariableBoolean(gdjs.Game_32OverCode.GDMutedObjects1[i].getVariables().getFromIndex(0));
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32OverCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Game_32OverCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Game_32OverCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BGVideo"), gdjs.Game_32OverCode.GDBGVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Game_over"), gdjs.Game_32OverCode.GDGame_9595overObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDBGVideoObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBGVideoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDGame_9595overObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDGame_9595overObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BGVideo"), gdjs.Game_32OverCode.GDBGVideoObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "9a1751ebb6f3ca1f40a2a3b3dc2f7e8b3bc0572267d18086ce9adee864e3b104_Lose 7.aac", true, 70, 1);
}{for(var i = 0, len = gdjs.Game_32OverCode.GDBGVideoObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBGVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.Game_32OverCode.GDreplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDreplayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDreplayObjects1[k] = gdjs.Game_32OverCode.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDreplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BBQ Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.Game_32OverCode.GDMainMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDMainMenuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDMainMenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDMainMenuObjects1[k] = gdjs.Game_32OverCode.GDMainMenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDMainMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Game", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGame_9595overObjects1.length = 0;
gdjs.Game_32OverCode.GDGame_9595overObjects2.length = 0;
gdjs.Game_32OverCode.GDGame_9595overObjects3.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects3.length = 0;
gdjs.Game_32OverCode.GDBGVideoObjects1.length = 0;
gdjs.Game_32OverCode.GDBGVideoObjects2.length = 0;
gdjs.Game_32OverCode.GDBGVideoObjects3.length = 0;
gdjs.Game_32OverCode.GDMainMenuObjects1.length = 0;
gdjs.Game_32OverCode.GDMainMenuObjects2.length = 0;
gdjs.Game_32OverCode.GDMainMenuObjects3.length = 0;
gdjs.Game_32OverCode.GDreplayObjects1.length = 0;
gdjs.Game_32OverCode.GDreplayObjects2.length = 0;
gdjs.Game_32OverCode.GDreplayObjects3.length = 0;
gdjs.Game_32OverCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Game_32OverCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Game_32OverCode.GDplayer_9595inputObjects3.length = 0;
gdjs.Game_32OverCode.GDnamenameObjects1.length = 0;
gdjs.Game_32OverCode.GDnamenameObjects2.length = 0;
gdjs.Game_32OverCode.GDnamenameObjects3.length = 0;
gdjs.Game_32OverCode.GDMutedObjects1.length = 0;
gdjs.Game_32OverCode.GDMutedObjects2.length = 0;
gdjs.Game_32OverCode.GDMutedObjects3.length = 0;

gdjs.Game_32OverCode.eventsList4(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
