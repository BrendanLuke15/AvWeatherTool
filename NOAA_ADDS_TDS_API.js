// By: Brendan Luke
// Date: March 30, 2022
// Purpose: use NOAA ADDS TDS API to get METAR data for selected airfield

/*
var textXML = <?xml version="1.0" encoding="UTF-8"?>
<response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.2" xsi:noNamespaceSchemaLocation="http://www.aviationweather.gov/static/adds/schema/metar1_2.xsd">'+
  <request_index>80592860</request_index>
  <data_source name="metars" />
  <request type="retrieve" />
  <errors />
  <warnings />
  <time_taken_ms>4</time_taken_ms>
  <data num_results="1">
    <METAR>
      <raw_text>CYOO 301300Z AUTO 13007G15KT 9SM BKN120 BKN140 M00/M06 A3013 RMK SLP212</raw_text>
      <station_id>CYOO</station_id>
      <observation_time>2022-03-30T13:00:00Z</observation_time>
      <latitude>43.92</latitude>
      <longitude>-78.9</longitude>
      <temp_c>0.0</temp_c>
      <dewpoint_c>-6.0</dewpoint_c>
      <wind_dir_degrees>130</wind_dir_degrees>
      <wind_speed_kt>7</wind_speed_kt>
      <wind_gust_kt>15</wind_gust_kt>
      <visibility_statute_mi>9.0</visibility_statute_mi>
      <altim_in_hg>30.129921</altim_in_hg>
      <sea_level_pressure_mb>1021.2</sea_level_pressure_mb>
      <quality_control_flags>
        <auto>TRUE</auto>
      </quality_control_flags>
      <sky_condition sky_cover="BKN" cloud_base_ft_agl="12000" />
      <sky_condition sky_cover="BKN" cloud_base_ft_agl="14000" />
      <flight_category>VFR</flight_category>
      <metar_type>METAR</metar_type>
      <elevation_m>136.0</elevation_m>
    </METAR>
  </data>
</response>
*/

function API_Test() {
    const baseURL = 'https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource='; // constant pat of resource URL
    var resource = 'metars&requestType=retrieve&format=xml&hoursBeforeNow=3&mostRecent=true&stationString=CYOO'; // variable part of URL based on 
    
    const myRequest = new Request(baseURL+resource);
    var textWriteLoc = document.getElementById("API_Test");
    
    /*
    const fetchResponsePromise = fetch(myRequest, {
        method: 'GET'/*,
        mode: 'no-cors'*/
    /*});*/

    fetch(myRequest)
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
            }
            
            return response.blob();
        })
        .then((response) => {
            //myImage.src = URL.createObjectURL(response);
            textWriteLoc.innerText = response.blob();
        });

    console.log(baseURL+resource);
    console.log(fetchResponsePromise);
}