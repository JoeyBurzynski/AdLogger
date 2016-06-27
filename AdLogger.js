/**
 * Created by aadarsh on 6/27/16.
 */

var AdLogger = function (iframeId,pageTitle,adSize) {
    this.iframeID = iframeId;
    this.pageTitle = pageTitle;
    this.adSize = adSize;

};

AdLogger.prototype.TrackAnalytics = function() {
    var iframeMouseOver = false;
    var iframeID = this.iframeID;
    var pageTitle = this.pageTitle;
    var adSize = this.adSize;


    document.getElementById(iframeID).addEventListener('load',function(){
        ga('send', { hitType: 'event', eventCategory: 'AD', eventAction: 'impression', eventLabel: pageTitle+'_'+adSize});
    });

    window.addEventListener('blur',function(){
        if(iframeMouseOver){
            ga('send', { hitType: 'event', eventCategory: 'AD', eventAction: 'click', eventLabel: pageTitle+'_'+adSize});
        }
    });

    document.getElementById(this.iframeID).addEventListener('mouseover',function(){
        iframeMouseOver = true;
    });

    document.getElementById(this.iframeID).addEventListener('mouseout',function(){
        iframeMouseOver = false;
    });
};