
function initMap(){
    //map options
    var options = {
        zoom:8,
        center:{lat:1.3733,lng:-32.2903}
    }

    //New map
    var map = new
    google.maps.Map(document.getElementById('map'),options);

    //listen for click on map
    google.maps.event.addListener(map,'click', 
    function(event){
        //add marker
        addMarker({coords:event.latlng});

    });

    

// Array of markers

   var markers = [
       {coords:{lat:0.3476, lng:-32.5825},
       iconImage:'https...',
       content:'<h1>Kampala</h1>' 
           
       },
       {coords:{lat:0.3476, lng:-32.5825},
       content:'<h1>Kampala</h1>'
       },
       {coords:{lat:0.3476, lng:-32.5825}
       }
       ];
   //loop thru markers
       for (var i=0;i<markers.length;i++){
   //add marker
           addMarker(markers[i]);

   }

   

   function addMarker(props){
       var marker = new google.maps.Marker({
           position:props.coords, 
           map:map,
           // icon: props.iconImage
       });
       //check for customicon
           if (props.iconImage){
               //set icon image
               marker.setIcon(props.iconImage);

           }

       //check content
           if (props.content){
               var infoWindow = new google.maps.InfoWindow({
                   content:'props.content'
               });

               marker.addListener('click',function(){
                   infoWindow.open(map,marker);
               });  
       }
         }

   }

<script src="https://maps.googleapis.com/maps/api/js?key= AIzaSyCtVFyxjpIxPUIzL4-5sux64zwa1E9c638 &callback=initMap"
async defer></script>