// By: Brendan Luke
// Date: March 29, 2022
// Purpose: user interface functions

// all functions below toggle between hiding HTML elements when clicked
function FieldInfo() {
    // show this page (div)
    document.getElementById("Airfield Information").style.display = "block";
    // hide these pages (divs)
    document.getElementById("Atmospheric Conditions").style.display = "none";
    document.getElementById("Winds and Runways").style.display = "none";
    document.getElementById("Weather Radar").style.display = "none";
    document.getElementById("Satellite Imagery").style.display = "none";
    // change button classes
    document.getElementById("FieldInfo").className = "SideBarButtonActive"; // active
    document.getElementById("Atmos").className = "SideBarButton";
    document.getElementById("WnR").className = "SideBarButton";
    document.getElementById("WxRadar").className = "SideBarButton";
    document.getElementById("SatImg").className = "SideBarButton";
}
function Atmos() {
    // show this page (div)
    document.getElementById("Atmospheric Conditions").style.display = "block";
    // hide these pages (divs)
    document.getElementById("Airfield Information").style.display = "none";
    document.getElementById("Winds and Runways").style.display = "none";
    document.getElementById("Weather Radar").style.display = "none";
    document.getElementById("Satellite Imagery").style.display = "none";
    // change button classes
    document.getElementById("FieldInfo").className = "SideBarButton";
    document.getElementById("Atmos").className = "SideBarButtonActive"; // active
    document.getElementById("WnR").className = "SideBarButton";
    document.getElementById("WxRadar").className = "SideBarButton";
    document.getElementById("SatImg").className = "SideBarButton";
}
function WnR() {
    // show this page (div)
    document.getElementById("Winds and Runways").style.display = "block";
    // hide these pages (divs)
    document.getElementById("Airfield Information").style.display = "none";
    document.getElementById("Atmospheric Conditions").style.display = "none";
    document.getElementById("Weather Radar").style.display = "none";
    document.getElementById("Satellite Imagery").style.display = "none";
    // change button classes
    document.getElementById("FieldInfo").className = "SideBarButton";
    document.getElementById("Atmos").className = "SideBarButton";
    document.getElementById("WnR").className = "SideBarButtonActive"; // active
    document.getElementById("WxRadar").className = "SideBarButton";
    document.getElementById("SatImg").className = "SideBarButton";
}
function WxRadar() {
    // show this page (div)
    document.getElementById("Weather Radar").style.display = "block";
    // hide these pages (divs)
    document.getElementById("Airfield Information").style.display = "none";
    document.getElementById("Atmospheric Conditions").style.display = "none";
    document.getElementById("Winds and Runways").style.display = "none";
    document.getElementById("Satellite Imagery").style.display = "none";
    // change button classes
    document.getElementById("FieldInfo").className = "SideBarButton";
    document.getElementById("Atmos").className = "SideBarButton";
    document.getElementById("WnR").className = "SideBarButton";
    document.getElementById("WxRadar").className = "SideBarButtonActive"; // active
    document.getElementById("SatImg").className = "SideBarButton";
}
function SatImg() {
    // show this page (div)
    document.getElementById("Satellite Imagery").style.display = "block";
    // hide these pages (divs)
    document.getElementById("Airfield Information").style.display = "none";
    document.getElementById("Atmospheric Conditions").style.display = "none";
    document.getElementById("Winds and Runways").style.display = "none";
    document.getElementById("Weather Radar").style.display = "none";
    // change button classes
    document.getElementById("FieldInfo").className = "SideBarButton";
    document.getElementById("Atmos").className = "SideBarButton";
    document.getElementById("WnR").className = "SideBarButton";
    document.getElementById("WxRadar").className = "SideBarButton";
    document.getElementById("SatImg").className = "SideBarButtonActive"; // active
}
function DarkMode() {
    document.getElementById("body").className = "darkmode";
}