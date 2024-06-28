gdjs.Start_32GameCode = {};
gdjs.Start_32GameCode.localVariables = [];
gdjs.Start_32GameCode.GDStart_9595GameObjects1= [];
gdjs.Start_32GameCode.GDStart_9595GameObjects2= [];
gdjs.Start_32GameCode.GDStart_9595GameObjects3= [];
gdjs.Start_32GameCode.GDplay_9595btnObjects1= [];
gdjs.Start_32GameCode.GDplay_9595btnObjects2= [];
gdjs.Start_32GameCode.GDplay_9595btnObjects3= [];
gdjs.Start_32GameCode.GDbackgroundObjects1= [];
gdjs.Start_32GameCode.GDbackgroundObjects2= [];
gdjs.Start_32GameCode.GDbackgroundObjects3= [];
gdjs.Start_32GameCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Start_32GameCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Start_32GameCode.GDFloatingOutButtonDarkBlueObjects3= [];
gdjs.Start_32GameCode.GDlogoObjects1= [];
gdjs.Start_32GameCode.GDlogoObjects2= [];
gdjs.Start_32GameCode.GDlogoObjects3= [];
gdjs.Start_32GameCode.GDIntroObjects1= [];
gdjs.Start_32GameCode.GDIntroObjects2= [];
gdjs.Start_32GameCode.GDIntroObjects3= [];
gdjs.Start_32GameCode.GDStartVideoObjects1= [];
gdjs.Start_32GameCode.GDStartVideoObjects2= [];
gdjs.Start_32GameCode.GDStartVideoObjects3= [];
gdjs.Start_32GameCode.GDplayObjects1= [];
gdjs.Start_32GameCode.GDplayObjects2= [];
gdjs.Start_32GameCode.GDplayObjects3= [];
gdjs.Start_32GameCode.GDplayer_9595inputObjects1= [];
gdjs.Start_32GameCode.GDplayer_9595inputObjects2= [];
gdjs.Start_32GameCode.GDplayer_9595inputObjects3= [];
gdjs.Start_32GameCode.GDnamenameObjects1= [];
gdjs.Start_32GameCode.GDnamenameObjects2= [];
gdjs.Start_32GameCode.GDnamenameObjects3= [];
gdjs.Start_32GameCode.GDMutedObjects1= [];
gdjs.Start_32GameCode.GDMutedObjects2= [];
gdjs.Start_32GameCode.GDMutedObjects3= [];


gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Start_32GameCode.GDMutedObjects1});
gdjs.Start_32GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Start_32GameCode.GDMutedObjects1, gdjs.Start_32GameCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32GameCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Start_32GameCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Start_32GameCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32GameCode.GDMutedObjects2[k] = gdjs.Start_32GameCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32GameCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Start_32GameCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("muted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

/* Reuse gdjs.Start_32GameCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32GameCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Start_32GameCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Start_32GameCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32GameCode.GDMutedObjects1[k] = gdjs.Start_32GameCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32GameCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Start_32GameCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.Start_32GameCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Start_32GameCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Start_32GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDMutedObjects1Objects = Hashtable.newFrom({"Muted": gdjs.Start_32GameCode.GDMutedObjects1});
gdjs.Start_32GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Start_32GameCode.GDMutedObjects1, gdjs.Start_32GameCode.GDMutedObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32GameCode.GDMutedObjects2.length;i<l;++i) {
    if ( gdjs.Start_32GameCode.GDMutedObjects2[i].getVariableBoolean(gdjs.Start_32GameCode.GDMutedObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32GameCode.GDMutedObjects2[k] = gdjs.Start_32GameCode.GDMutedObjects2[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDMutedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32GameCode.GDMutedObjects2 */
{for(var i = 0, len = gdjs.Start_32GameCode.GDMutedObjects2.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDMutedObjects2[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

/* Reuse gdjs.Start_32GameCode.GDMutedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32GameCode.GDMutedObjects1.length;i<l;++i) {
    if ( gdjs.Start_32GameCode.GDMutedObjects1[i].getVariableBoolean(gdjs.Start_32GameCode.GDMutedObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32GameCode.GDMutedObjects1[k] = gdjs.Start_32GameCode.GDMutedObjects1[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDMutedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32GameCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Start_32GameCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.Start_32GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Start_32GameCode.GDMutedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDMutedObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32GameCode.GDMutedObjects1 */
{for(var i = 0, len = gdjs.Start_32GameCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDMutedObjects1[i].toggleVariableBoolean(gdjs.Start_32GameCode.GDMutedObjects1[i].getVariables().getFromIndex(0));
}
}
{ //Subevents
gdjs.Start_32GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Start_32GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Start_32GameCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32GameCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.Start_32GameCode.GDplayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32GameCode.GDplayObjects1[k] = gdjs.Start_32GameCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Name Scene", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.Start_32GameCode.GDIntroObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartVideo"), gdjs.Start_32GameCode.GDStartVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_Game"), gdjs.Start_32GameCode.GDStart_9595GameObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Start_32GameCode.GDplayObjects1);
{for(var i = 0, len = gdjs.Start_32GameCode.GDStart_9595GameObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDStart_9595GameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDplayObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.85);
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDStartVideoObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDStartVideoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDIntroObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDIntroObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.55);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Start_32GameCode.GDMutedObjects1);
{for(var i = 0, len = gdjs.Start_32GameCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("muted");
}
}
{ //Subevents
gdjs.Start_32GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Start_32GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.Start_32GameCode.GDIntroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Muted"), gdjs.Start_32GameCode.GDMutedObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartVideo"), gdjs.Start_32GameCode.GDStartVideoObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "72e9c7d27d07ead77a928dacdf3947412c9aa607e22b3a94d26fa7f9412224ee_01 - super mushroom eater revised and fixed.aac", true, 70, 1);
}{for(var i = 0, len = gdjs.Start_32GameCode.GDIntroObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDIntroObjects1[i].resetTimer("TypingSound");
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDStartVideoObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDStartVideoObjects1[i].play();
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDMutedObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDMutedObjects1[i].getBehavior("Animation").setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.Start_32GameCode.GDIntroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32GameCode.GDIntroObjects1.length;i<l;++i) {
    if ( gdjs.Start_32GameCode.GDIntroObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TypingSound") >= 0.05 ) {
        isConditionTrue_0 = true;
        gdjs.Start_32GameCode.GDIntroObjects1[k] = gdjs.Start_32GameCode.GDIntroObjects1[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDIntroObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32GameCode.GDIntroObjects1.length;i<l;++i) {
    if ( !(gdjs.Start_32GameCode.GDIntroObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32GameCode.GDIntroObjects1[k] = gdjs.Start_32GameCode.GDIntroObjects1[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDIntroObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32GameCode.GDIntroObjects1 */
{for(var i = 0, len = gdjs.Start_32GameCode.GDIntroObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDIntroObjects1[i].resetTimer("TypingSound");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2d13990f8c40250a463018d3cacda8d099885ff8cbcf31b9a4644079008a19e6_Blip 4.aac", false, 20, 5);
}}

}


};

gdjs.Start_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32GameCode.GDStart_9595GameObjects1.length = 0;
gdjs.Start_32GameCode.GDStart_9595GameObjects2.length = 0;
gdjs.Start_32GameCode.GDStart_9595GameObjects3.length = 0;
gdjs.Start_32GameCode.GDplay_9595btnObjects1.length = 0;
gdjs.Start_32GameCode.GDplay_9595btnObjects2.length = 0;
gdjs.Start_32GameCode.GDplay_9595btnObjects3.length = 0;
gdjs.Start_32GameCode.GDbackgroundObjects1.length = 0;
gdjs.Start_32GameCode.GDbackgroundObjects2.length = 0;
gdjs.Start_32GameCode.GDbackgroundObjects3.length = 0;
gdjs.Start_32GameCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Start_32GameCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Start_32GameCode.GDFloatingOutButtonDarkBlueObjects3.length = 0;
gdjs.Start_32GameCode.GDlogoObjects1.length = 0;
gdjs.Start_32GameCode.GDlogoObjects2.length = 0;
gdjs.Start_32GameCode.GDlogoObjects3.length = 0;
gdjs.Start_32GameCode.GDIntroObjects1.length = 0;
gdjs.Start_32GameCode.GDIntroObjects2.length = 0;
gdjs.Start_32GameCode.GDIntroObjects3.length = 0;
gdjs.Start_32GameCode.GDStartVideoObjects1.length = 0;
gdjs.Start_32GameCode.GDStartVideoObjects2.length = 0;
gdjs.Start_32GameCode.GDStartVideoObjects3.length = 0;
gdjs.Start_32GameCode.GDplayObjects1.length = 0;
gdjs.Start_32GameCode.GDplayObjects2.length = 0;
gdjs.Start_32GameCode.GDplayObjects3.length = 0;
gdjs.Start_32GameCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Start_32GameCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Start_32GameCode.GDplayer_9595inputObjects3.length = 0;
gdjs.Start_32GameCode.GDnamenameObjects1.length = 0;
gdjs.Start_32GameCode.GDnamenameObjects2.length = 0;
gdjs.Start_32GameCode.GDnamenameObjects3.length = 0;
gdjs.Start_32GameCode.GDMutedObjects1.length = 0;
gdjs.Start_32GameCode.GDMutedObjects2.length = 0;
gdjs.Start_32GameCode.GDMutedObjects3.length = 0;

gdjs.Start_32GameCode.eventsList4(runtimeScene);

return;

}

gdjs['Start_32GameCode'] = gdjs.Start_32GameCode;
