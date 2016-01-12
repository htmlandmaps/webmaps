define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "fb74a29a33534d7dafb76385e1b4929a",    //until property sales comes back on
	//"webmap": "f11c117c3a6c43eab9eb22bb7ff8b58b",
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "MDP Parcel Viewer",
    "summary": "The MDP Parcel Viewer allows users to <b>search for parcel information</b> by address, place name, and parcel account ID using either an address or parcel search locator. \
	<br><br>(<i>Place Name example:</i> Rockville Library) \
	<br><br>Read the <b><a href='http://mdpgis.mdp.state.md.us/mris/pi/resources/MDP_Parcel_Viewer_Web_Map_Tutorial_Guide.pdf' target='_blank'>MDP Parcel Viewer Web Map Tutorial Guide</a></b> for more details about the tools and data available on this web map. \
	<br><br> <b>Sharing URLS:</b> \
	<br>To share the map extent of specific addresses, place names, or parcels with other users, add ?address= and the actual address or place name for locations or ?id= and the parcel account ID number for parcels to the end of the link. Examples below: \
	<p style='font-size:12px; '>mdpgis.mdp.state.md.us/mris/pi/index.html<b>?address=</b>301 W Preston St Baltimore\
	<br><br>mdpgis.mdp.state.md.us/mris/pi/index.html<b>?address=</b>Rockville Library\
	<br><br>mdpgis.mdp.state.md.us/mris/pi/index.html<b>?id=</b>04090919000840</p>\
	<b><u>Please note:</u></b>This site performs best on desktop or laptop devices using either <a href='https://www.google.com/chrome/browser/' target='_blank'>Chrome</a> or <a href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'>Firefox</a> browsers.</b> \
	<br><br>The <b>Printing function</b> may not work in Internet Explorer unless you have atleast version 10. To Print, enable popups and press the Print button. The button will display the 'Printing' status for about 40 seconds. When it changes to 'Printout', press the link and a PDF of the map view will open up in a new tab for you to print.\
	<br><br><b>Questions?</b><br/>Email: <a href='mailto:DLMDP-GIS_MDP@maryland.gov?subject=Help with MRIS Viewer'><b>DLMDP-GIS_MDP@maryland.gov</b></a>",
	
    "defaultPanel": "layers",
	//diff
    "enableDialogModal": false,
    "dialogModalContent": "",
    "dialogModalTitle": "",
    //diff
	
	"enableSummaryInfo": true,
    "enableLegendPanel": true,
    "enableAboutPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": true,
    "enableBasemapToggle": false,
    "enableShareDialog": false,
    "enableBookmarks": false,
    "enableOverviewMap": true,
    "openOverviewMap": false,
    "enableModifiedDate": false,
    "enableViewsCount": false,
    "enableMoreInfo": false,
	
	"enablePrintButton": true,
	"enableDrawarea":true,
	"enableMeasure":true,
	"enableAddText":true,
	
    "defaultBasemap": "topo",
    "nextBasemap": "hybrid",
    "swipeType": "vertical",
    "swipeInvertPlacement": true,
    "hideNotesLayerPopups": true,
    "enableInstagram": false,
    "instagramVisible": false,
    "instagramTime": "",
    "enableFlickr": false,
    "flickrVisible": false,
    "flickrSearch": "",
    "flickrTime": "",
    "enableTwitter": false,
    "twitterVisible": false,
    "twitterSearch": "",
    "enableWebcams": false,
    "webcamsVisible": false,
    "enableYouTube": false,
    "youtubeVisible": false,
	"enableGeocodeDropDown":true,
    "youtubeSearch": "",
    "youtubeTime": "all_time", // today, this_week, this_month, all_time
    "bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e",
    "twitterUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/search/tweets.json",
    "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
    "flickr_key": "404ebea7d5bc27aa5251d1207620e99b",
    "webcams_key": "65939add1ebe8bc9cc4180763f5df2ca",
    "instagram_key": "288c36a1a42c49de9a2480a05d054619",
    "youtube_key": "AI39si5AmNrzX3VKNKo4Kcet9BVemrvyjl4B13ezBbNLsvKOlw9Vh3eL_57dZ2vC6M9PwV9i3bHm6emtZLr_BhQ8qtnTbvwzCw",
    /*
    "bannedUsersService": location.protocol + "//services.arcgis.com/QJfoC7c7Z2icolha/ArcGIS/rest/services/fai/FeatureServer/2",
    "bannedWordsService": location.protocol + "//tmservices1.esri.com/ArcGIS/rest/services/SharedTools/Filter/MapServer/1",
    "flagMailServer": location.protocol + "//tmappsevents.esri.com/Website/pim_fai/fai.php",
    */
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you 
    "units": null,
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        
	"geocode": [{  
      "url": "http://geodata.md.gov/imap/rest/services/GeocodeServices/MD_CompositeLocator/GeocodeServer",  
      "singleLineFieldName": "SingleLine",  
      "name": "MD Address Locator",  
      "placefinding":true,  
      "placeholder": "Find a Place"  
    },{  
      "url":"http://geodata.md.gov/imap/rest/services/GeocodeServices/MD_ParcelAccountNumberLocator/GeocodeServer",  
      "singleLineFieldName": "SingleLine",  
      "name": "MD Parcel Account Number Locator",  
      "placefinding":true,  
      "placeholder": "Find Acct ID"  
      }]  
    }
});
