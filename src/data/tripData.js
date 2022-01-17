/**
 * @description This file contains array of objects that holds data baout the trips and city of the trip
 */
const tripData=[
    {
        id:1,
        cityName:'Berlin',
        state:'Berlin',
        dateFrom:'5-2-2022',
        dateTo:'10-2-2022',
        about:'Berlin, capital and chief urban center of Germany. The city lies at the heart of the North German Plain. You can visit wonderful places in Berlin',
        cityImage:'berlin.png',
        isAvailable:1, // availability of booking
    },
    {
        id:2,
        cityName:'Dusseldorf',
        state:'NRW',
        dateFrom:'1-2-2022',
        dateTo:'7-2-2022',
        about:'Düsseldorf, city, capital of North Rhine–Westphalia Land (state), western Germany. It is the administrative and cultural center of the industrial Rhine-Ruhr area.',
        cityImage:'dusseldorf.png',
        isAvailable:1, // availability of booking
    },
    {
        id:3,
        cityName:'Frankfurt',
        state:'Hessen',
        dateFrom:'4-2-2022',
        dateTo:'9-2-2022',
        about:'In this amazing city, you will be very happy with its buildings and a mazing Mains river. It is called sometimes as "Bankfort";it is leading commercial, financial, and high-technology center',
        cityImage:'frankfurt.png',
        isAvailable:0, // availability of booking
    }, 
];

export default tripData;