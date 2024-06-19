var gdjs;(function(c){const t=class extends c.RuntimeBehavior{constructor(o,e,s){super(o,e,s);this._invalidDistances=!0;this._leftEdgeDistance=0;this._rightEdgeDistance=0;this._topEdgeDistance=0;this._bottomEdgeDistance=0;this._useLegacyBottomAndRightAnchors=!1;this._relativeToOriginalWindowSize=!!e.relativeToOriginalWindowSize,this._leftEdgeAnchor=e.leftEdgeAnchor,this._rightEdgeAnchor=e.rightEdgeAnchor,this._topEdgeAnchor=e.topEdgeAnchor,this._bottomEdgeAnchor=e.bottomEdgeAnchor,this._useLegacyBottomAndRightAnchors=e.useLegacyBottomAndRightAnchors===void 0?!0:e.useLegacyBottomAndRightAnchors}updateFromBehaviorData(o,e){return o.leftEdgeAnchor!==e.leftEdgeAnchor&&(this._leftEdgeAnchor=e.leftEdgeAnchor),o.rightEdgeAnchor!==e.rightEdgeAnchor&&(this._rightEdgeAnchor=e.rightEdgeAnchor),o.topEdgeAnchor!==e.topEdgeAnchor&&(this._topEdgeAnchor=e.topEdgeAnchor),o.bottomEdgeAnchor!==e.bottomEdgeAnchor&&(this._bottomEdgeAnchor=e.bottomEdgeAnchor),o.useLegacyTrajectory!==e.useLegacyTrajectory&&(this._useLegacyBottomAndRightAnchors=e.useLegacyBottomAndRightAnchors),o.relativeToOriginalWindowSize===e.relativeToOriginalWindowSize}onActivate(){this._invalidDistances=!0}doStepPreEvents(o){const e=c.staticArray(c.AnchorRuntimeBehavior.prototype.doStepPreEvents),s=o.getGame();let r=s.getGameResolutionWidth(),h=s.getGameResolutionHeight();const A=o.getLayer(this.owner.getLayer());if(this._invalidDistances){this._relativeToOriginalWindowSize&&(r=s.getOriginalWidth(),h=s.getOriginalHeight());const i=A.convertCoords(this.owner.getDrawableX(),this.owner.getDrawableY(),0,e);this._leftEdgeAnchor===t.HorizontalAnchor.WINDOW_LEFT?this._leftEdgeDistance=i[0]:this._leftEdgeAnchor===t.HorizontalAnchor.WINDOW_RIGHT?this._leftEdgeDistance=r-i[0]:this._leftEdgeAnchor===t.HorizontalAnchor.PROPORTIONAL&&(this._leftEdgeDistance=i[0]/r),this._topEdgeAnchor===t.VerticalAnchor.WINDOW_TOP?this._topEdgeDistance=i[1]:this._topEdgeAnchor===t.VerticalAnchor.WINDOW_BOTTOM?this._topEdgeDistance=h-i[1]:this._topEdgeAnchor===t.VerticalAnchor.PROPORTIONAL&&(this._topEdgeDistance=i[1]/h);const n=A.convertCoords(this.owner.getDrawableX()+this.owner.getWidth(),this.owner.getDrawableY()+this.owner.getHeight(),0,e);this._rightEdgeAnchor===t.HorizontalAnchor.WINDOW_LEFT?this._rightEdgeDistance=n[0]:this._rightEdgeAnchor===t.HorizontalAnchor.WINDOW_RIGHT?this._rightEdgeDistance=r-n[0]:this._rightEdgeAnchor===t.HorizontalAnchor.PROPORTIONAL&&(this._rightEdgeDistance=n[0]/r),this._bottomEdgeAnchor===t.VerticalAnchor.WINDOW_TOP?this._bottomEdgeDistance=n[1]:this._bottomEdgeAnchor===t.VerticalAnchor.WINDOW_BOTTOM?this._bottomEdgeDistance=h-n[1]:this._bottomEdgeAnchor===t.VerticalAnchor.PROPORTIONAL&&(this._bottomEdgeDistance=n[1]/h),this._invalidDistances=!1}else{let i=0,n=0,d=0,E=0;this._leftEdgeAnchor===t.HorizontalAnchor.WINDOW_LEFT?i=this._leftEdgeDistance:this._leftEdgeAnchor===t.HorizontalAnchor.WINDOW_RIGHT?i=r-this._leftEdgeDistance:this._leftEdgeAnchor===t.HorizontalAnchor.PROPORTIONAL&&(i=this._leftEdgeDistance*r),this._topEdgeAnchor===t.VerticalAnchor.WINDOW_TOP?n=this._topEdgeDistance:this._topEdgeAnchor===t.VerticalAnchor.WINDOW_BOTTOM?n=h-this._topEdgeDistance:this._topEdgeAnchor===t.VerticalAnchor.PROPORTIONAL&&(n=this._topEdgeDistance*h),this._rightEdgeAnchor===t.HorizontalAnchor.WINDOW_LEFT?d=this._rightEdgeDistance:this._rightEdgeAnchor===t.HorizontalAnchor.WINDOW_RIGHT?d=r-this._rightEdgeDistance:this._rightEdgeAnchor===t.HorizontalAnchor.PROPORTIONAL&&(d=this._rightEdgeDistance*r),this._bottomEdgeAnchor===t.VerticalAnchor.WINDOW_TOP?E=this._bottomEdgeDistance:this._bottomEdgeAnchor===t.VerticalAnchor.WINDOW_BOTTOM?E=h-this._bottomEdgeDistance:this._bottomEdgeAnchor===t.VerticalAnchor.PROPORTIONAL&&(E=this._bottomEdgeDistance*h);const _=A.convertInverseCoords(i,n,0,e),g=_[0],l=_[1],N=A.convertInverseCoords(d,E,0,e),O=N[0],f=N[1];this._useLegacyBottomAndRightAnchors?(this._rightEdgeAnchor!==t.HorizontalAnchor.NONE&&this.owner.setWidth(O-g),this._bottomEdgeAnchor!==t.VerticalAnchor.NONE&&this.owner.setHeight(f-l),this._leftEdgeAnchor!==t.HorizontalAnchor.NONE&&this.owner.setX(g+this.owner.getX()-this.owner.getDrawableX()),this._topEdgeAnchor!==t.VerticalAnchor.NONE&&this.owner.setY(l+this.owner.getY()-this.owner.getDrawableY())):(this._rightEdgeAnchor!==t.HorizontalAnchor.NONE&&this._leftEdgeAnchor!==t.HorizontalAnchor.NONE?(this.owner.setWidth(O-g),this.owner.setX(g)):(this._leftEdgeAnchor!==t.HorizontalAnchor.NONE&&this.owner.setX(g+this.owner.getX()-this.owner.getDrawableX()),this._rightEdgeAnchor!==t.HorizontalAnchor.NONE&&this.owner.setX(O+this.owner.getX()-this.owner.getDrawableX()-this.owner.getWidth())),this._bottomEdgeAnchor!==t.VerticalAnchor.NONE&&this._topEdgeAnchor!==t.VerticalAnchor.NONE?(this.owner.setHeight(f-l),this.owner.setY(l)):(this._topEdgeAnchor!==t.VerticalAnchor.NONE&&this.owner.setY(l+this.owner.getY()-this.owner.getDrawableY()),this._bottomEdgeAnchor!==t.VerticalAnchor.NONE&&this.owner.setY(f+this.owner.getY()-this.owner.getDrawableY()-this.owner.getHeight())))}}doStepPostEvents(o){}};let a=t;a.HorizontalAnchor={NONE:0,WINDOW_LEFT:1,WINDOW_RIGHT:2,PROPORTIONAL:3},a.VerticalAnchor={NONE:0,WINDOW_TOP:1,WINDOW_BOTTOM:2,PROPORTIONAL:3},c.AnchorRuntimeBehavior=a,c.registerBehavior("AnchorBehavior::AnchorBehavior",c.AnchorRuntimeBehavior)})(gdjs||(gdjs={}));
//# sourceMappingURL=anchorruntimebehavior.js.map