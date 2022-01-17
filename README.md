# Travel-Journal-App

It is a small project that shows how the folder and files are stuctured in react.
It is also figure out how the data is fetched from a sparated js file that contains an array of objects that are holding the trip data
I have designed it in Adobe XD [Behance](https://www.behance.net/gallery/135281705/Travel-Journal).

# project components

The components in the project are two types

- **components** : for small components that might reusable many times
- **containers**: for larg component that hold a small ones (components) such as TripList container holds many other tripCard components

**components**:

- nav bar component
- footer component
- tripCard component: individual trip card data that contains information about individual trip such as image of the city, city name and its stat, trip date, city information and the ability of booking if the trip is available

# Containers:

- TripList: it is a large components that holds other small components which are tripCard

# Project Data

project data is located in a separated js file in the path **src/data/tripData.js**

# project testing:

- Removing data
  remove certain tripdata such as the following
  ` { id:3, cityName:'Frankfurt', state:'Hessen', dateFrom:'4-2-2022', dateTo:'9-2-2022', about:'In this amazing city, you will be very happy with its buildings and a mazing Mains river. It is called sometimes as "Bankfort";it is leading commercial, financial, and high-technology center', cityImage:'frankfurt.png', isAvailable:1, // availability of booking },`
  **Result:** its trip component will disappear from teh layout

- Adding another trip data  
   `{ id:4, cityName:'Hmaburg', state:'Hamburg', dateFrom:'7-2-2022', dateTo:'5-2-2022', about:'Haburg is a amazing city in the North of Germany. It is one of the Important ports in Europe. You can take a wonderfull ship trip to Danemark. This city has many many bridges. It called some times as Vinice of the North. we are sure that you will love this wonderfull city', cityImage:'Hamburg.png', isAvailable:1, // availability of booking },`

  **Result:** Another trip card for Hmburg will be added to the tripList

`Hint: Ensure that the tripData js file remains well structured after adding or removing data otherwise you will get an error: you shoul ensure that each object is separated by (,) from the pervious and the secon object as well as each property in each obkect is also sepaated from other properties by (,)`

- Check availability
  try to change the value of the property isAvailable from 0 to 1 or from 1 to 0 in any trip data
  Result: if the isAvailable equal to 0 that means that the trip is complete ans then the complete badge will appears on the image and you can not book this trip any more
  and if the value is equal to 1 that means you can book the trip and there will not be complete badge
- Responsive mode
  the application is fully responsive with all type of screens
