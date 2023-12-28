// import React, { useState } from "react";
// import Mapir from "mapir-react-component";

// const Map = Mapir.setToken({
//   transformRequest: url => {
//     return {
//       url: url,
//       headers: {
//         "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJkYWRjOWZmYmU5OGQ4MWMyMzM2Y2YxYzY5YTNmMWIwNDZkZTMxMmZiMzZmNGZhNDQ2Y2MyMjhlMDI3MDIyOWE2NDI0NDZlYzI5NWU3MWY5In0.eyJhdWQiOiIyNTQyOSIsImp0aSI6IjJkYWRjOWZmYmU5OGQ4MWMyMzM2Y2YxYzY5YTNmMWIwNDZkZTMxMmZiMzZmNGZhNDQ2Y2MyMjhlMDI3MDIyOWE2NDI0NDZlYzI5NWU3MWY5IiwiaWF0IjoxNzAzMTQzNTIzLCJuYmYiOjE3MDMxNDM1MjMsImV4cCI6MTcwNTY0OTEyMywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.s6VeVn-EaqqH-r6UW232c0bApu12ZcGUU6QWue5pba9GHmagNhvvEepppBB19wM8BgKXVRhaxSV3gxCWuyGJgLweItY_FoljoAHYEXaJ8-SOeVE8zHSgSU-z63tplBgUhIvbaedTsK7XP2fFAQoTIH_DePbRrjkXYO-GsVY2NUAL4onH70TEjYNg-2coH2_XTycOcDxqM0OMevyNg6RC5m05v3Bq3f-CQenodcDTaNr2YBGKfCKJOrQHT1Q1WJD4SGdrnMQKzkb7hd6xdvKMX45Zzg1cpz6qJocWrWYD0q-dF2nq9rQRg9zwAikHFA_7YNmXN_gEnEckCvEVovbaLA', 
//         "Mapir-SDK": "reactjs"
//       }
//     };
//   }
// });

// const App = ({setPosition, position, setIsMapOpen}) => {
//   const [coord, setCoord] = useState([51.42, 35.72]);

//   const onCloseHandler = (e) =>{
//     if(e.target.id === "container"){
//         setIsMapOpen(false);
//     }
// };

//   const reverseFunction=(map, e)=> {
//     var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${
//       e.lngLat.lng
//     }`;
//     fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//         "x-api-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJkYWRjOWZmYmU5OGQ4MWMyMzM2Y2YxYzY5YTNmMWIwNDZkZTMxMmZiMzZmNGZhNDQ2Y2MyMjhlMDI3MDIyOWE2NDI0NDZlYzI5NWU3MWY5In0.eyJhdWQiOiIyNTQyOSIsImp0aSI6IjJkYWRjOWZmYmU5OGQ4MWMyMzM2Y2YxYzY5YTNmMWIwNDZkZTMxMmZiMzZmNGZhNDQ2Y2MyMjhlMDI3MDIyOWE2NDI0NDZlYzI5NWU3MWY5IiwiaWF0IjoxNzAzMTQzNTIzLCJuYmYiOjE3MDMxNDM1MjMsImV4cCI6MTcwNTY0OTEyMywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.s6VeVn-EaqqH-r6UW232c0bApu12ZcGUU6QWue5pba9GHmagNhvvEepppBB19wM8BgKXVRhaxSV3gxCWuyGJgLweItY_FoljoAHYEXaJ8-SOeVE8zHSgSU-z63tplBgUhIvbaedTsK7XP2fFAQoTIH_DePbRrjkXYO-GsVY2NUAL4onH70TEjYNg-2coH2_XTycOcDxqM0OMevyNg6RC5m05v3Bq3f-CQenodcDTaNr2YBGKfCKJOrQHT1Q1WJD4SGdrnMQKzkb7hd6xdvKMX45Zzg1cpz6qJocWrWYD0q-dF2nq9rQRg9zwAikHFA_7YNmXN_gEnEckCvEVovbaLA"
//       }
//     })
//       .then(response => response.json())
//       .then(data => console.log(data));
//     // const array = [];
//     // array.push(
//       <Mapir.Marker
//         coordinates={[e.lngLat.lng, e.lngLat.lat]}
//         anchor="bottom"
//       />
//     // );
//     setPosition({lat: e.lngLat.lng, lng: e.lngLat.lng});
//   }
//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
//         <div
//         id='container' 
//         onClick={onCloseHandler} 
//         className='relative w-full h-full false z-50 p-4'
//         >
//             <Mapir center={coord} Map={Map} onClick={reverseFunction}>
//                 {position}
//             </Mapir>
//         </div>
      
//     </div>
//   );
// };

// export default App;
















// // import React, {useState} from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // //https://help.map.ir/documentation/wsdk_examples/reversewithclick/

// // const Map = ({setPosition, position, setIsMapOpen}) => {


// //     const onCloseHandler = (e) =>{
// //         if(e.target.id === "container"){
// //             // onCloseEn();
// //             setIsMapOpen(false);
// //         }
// //     };

// //     // const handleMapClick = (e) => {
// //     //     setPosition(e.latlng);
// //     // }


// //     // return (
// //     //     <div className='fixed inset-0  '>
// //     //         <div 
// //     //         id='container' 
// //     //         onClick={onCloseHandler} 
// //     //         className='relative w-full h-full false z-50 p-4'
// //     //         >
// //     //             <MapContainer center={[35.6892, 51.389]} zoom={13} onClick={handleMapClick}>
// //     //             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// //     //             </MapContainer>

// //     //         </div>
// //     //         {position && (
// //     //             <Marker position={position}>
// //     //                 <Popup>
// //     //                 موقعیت انتخاب شده: <br /> {position.lat}, {position.lng}
// //     //                 </Popup>
// //     //             </Marker>
// //     //         )}

// //     //     </div>
// //     // );






// // };

// // export default Map;