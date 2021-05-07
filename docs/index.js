let map;
let marker;

function initZoomControl(map) {
  document.querySelector(".zoom-control-in").onclick = function () {
    map.setZoom(map.getZoom() + 1);
  };
  document.querySelector(".zoom-control-out").onclick = function () {
    map.setZoom(map.getZoom() - 1);
  };
}

function initPanControl(map) {
  document.querySelector(".pan-control-north").onclick = function () {
    map.panBy(0, -100);
  };
  document.querySelector(".pan-control-east").onclick = function () {
    map.panBy(100, 0);
  };
  document.querySelector(".pan-control-south").onclick = function () {
    map.panBy(0, 100);
  };
  document.querySelector(".pan-control-west").onclick = function () {
    map.panBy(-100, 0);
  };
}

function setLocation(map) {
  document.querySelector(".sys").onclick = function () {
    var pos = { lat: 59.3423168, lng: 18.0342352 };
    console.log("clicking this button");
    map.setCenter(pos, 16);
  };
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.3498092, lng: 18.0684758 },
    zoom: 15,
    mapTypeId: "satellite",
    disableDefaultUI: true,
  });
  document.getElementById("map").style.display = "none";
  map.setTilt(45);
  initZoomControl(map);
  initPanControl(map);

  marker_drag = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.3498092, lng: 18.0684758 },
  });
  marker = new google.maps.Marker({
    map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.3508092, lng: 18.0684758 },
  });
  marker.addListener("click", toggleBounce);

  systrarnaAnderssonMarker = new google.maps.Marker({
    map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.3423168, lng: 18.0342352 },
  });
  var systrarnaAnderssonWindow = new google.maps.InfoWindow({
    content: "Systrarna Andersson: Ett trevligt café i Hagastan",
  });
  systrarnaAnderssonMarker.addListener("click", function () {
    systrarnaAnderssonWindow.open(map, systrarnaAnderssonMarker);
  });

  nikesApartmentMarker = new google.maps.Marker({
    map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.234238, lng: 18.2231558 },
  });
  var nikesApartmentWindow = new google.maps.InfoWindow({
    content: "Nikes Lägenhet",
  });
  nikesApartmentMarker.addListener("click", function () {
    nikesApartmentWindow.open(map, nikesApartmentMarker);
  });
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function showOrHideDiv() {
  var v = document.getElementById("homepage");
  if (v.style.display === "none") {
    v.style.display = "block";
  } else {
    v.style.display = "none";
    document.getElementById("map").style.display = "block";
  }
}
