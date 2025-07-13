const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;

    socket.emit(
      "send-location",
      { latitude, longitude },
      (error) => {
        console.log("❌ Error occured in the GeoLocation Navigation: ", error);
      },

      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  });
}

Location.map("map");
``;
