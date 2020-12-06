// https://maps.googleapis.com/maps/api/geocode/json?address=97405&region=us&key=AIzaSyC7QBEyXbpXf53jPvM4lXfgXEHD5caa61A
/*
{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "97405",
               "short_name" : "97405",
               "types" : [ "postal_code" ]
            },
            {
               "long_name" : "Eugene",
               "short_name" : "Eugene",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Lane County",
               "short_name" : "Lane County",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Oregon",
               "short_name" : "OR",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "United States",
               "short_name" : "US",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Eugene, OR 97405, USA",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 44.040783,
                  "lng" : -122.941963
               },
               "southwest" : {
                  "lat" : 43.8140499,
                  "lng" : -123.3366001
               }
            },
            "location" : {
               "lat" : 43.9697922,
               "lng" : -123.2005853
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 44.040783,
                  "lng" : -122.941963
               },
               "southwest" : {
                  "lat" : 43.8140499,
                  "lng" : -123.3366001
               }
            }
         },
         "place_id" : "ChIJfbVn2e4iwVQRFHAnUlfzC8Q",
         "types" : [ "postal_code" ]
      }
   ],
   "status" : "OK"
}
*/
const apiKey = "AIzaSyC1HTCZ6mUEKFuuLHPLdE1zM2_Q7j0vxhk";
const geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?region=us&address=";

export default async function (zipcode) {
    let response = await fetch(`${geocodeUrl}${zipcode}&key=${apiKey}`);
    
    if (!response.ok)
        throw new Error(`API call failed. ${response.status}`);
    else 
        return await response.json();

}