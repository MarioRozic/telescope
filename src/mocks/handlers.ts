import { http, HttpResponse } from 'msw';

const CARDS = [
  {
    id: 1,
    propertyName: "Greenfield Estate",
    address: "101 Greenfield Lane",
    zipCode: "EC1A 1BB",
    city: "London",
    coordinates: "51.5074, -0.1278",
    estimatedValue: 850000,
    totalRisk: 20,
    handledRisks: 12,
    relevantRisks: 8,
  },
  {
    id: 2,
    propertyName: "Blue Haven",
    address: "202 Blue Haven Street",
    zipCode: "SW1A 1AA",
    city: "London",
    coordinates: "51.5034, -0.1276",
    estimatedValue: 650000,
    totalRisk: 18,
    handledRisks: 10,
    relevantRisks: 6,
  },
  {
    id: 3,
    propertyName: "Sunset Villa",
    address: "303 Sunset Boulevard",
    zipCode: "NW1 2DB",
    city: "London",
    coordinates: "51.5175, -0.1455",
    estimatedValue: 950000,
    totalRisk: 25,
    handledRisks: 15,
    relevantRisks: 10,
  },
  {
    id: 4,
    propertyName: "Maplewood Manor",
    address: "404 Maplewood Drive",
    zipCode: "E1 6AN",
    city: "London",
    coordinates: "51.5220, -0.0795",
    estimatedValue: 720000,
    totalRisk: 22,
    handledRisks: 14,
    relevantRisks: 8,
  },
  {
    id: 5,
    propertyName: "Oakridge Cottage",
    address: "505 Oakridge Avenue",
    zipCode: "W1D 4EP",
    city: "London",
    coordinates: "51.5145, -0.1300",
    estimatedValue: 540000,
    totalRisk: 16,
    handledRisks: 9,
    relevantRisks: 7,
  },
  {
    id: 6,
    propertyName: "Pinehurst Place",
    address: "606 Pinehurst Way",
    zipCode: "N1 8AJ",
    city: "London",
    coordinates: "51.5400, -0.1074",
    estimatedValue: 880000,
    totalRisk: 28,
    handledRisks: 18,
    relevantRisks: 10,
  },
  {
    id: 7,
    propertyName: "Willow Creek",
    address: "707 Willow Creek Road",
    zipCode: "SE1 9AQ",
    city: "London",
    coordinates: "51.5014, -0.1073",
    estimatedValue: 610000,
    totalRisk: 14,
    handledRisks: 8,
    relevantRisks: 6,
  },
  {
    id: 8,
    propertyName: "Cedar Hill",
    address: "808 Cedar Hill Lane",
    zipCode: "W1T 4JL",
    city: "London",
    coordinates: "51.5200, -0.1370",
    estimatedValue: 790000,
    totalRisk: 19,
    handledRisks: 12,
    relevantRisks: 7,
  },
  {
    id: 9,
    propertyName: "The Crown Residences",
    address: "909 Crown Lane",
    zipCode: "SW7 2AZ",
    city: "London",
    coordinates: "51.4974, -0.1745",
    estimatedValue: 980000,
    totalRisk: 24,
    handledRisks: 16,
    relevantRisks: 8,
  },
];

 
export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json({ name: 'John Maverick' });
  }),
  http.get('/card-list', () => {
    return HttpResponse.json(CARDS);
  }),

   // GET a specific card by ID
   http.get('/card/:id', (req) => {
    const { id } = req.params;
    console.log('IDD', id)
    const card = CARDS.find((card) => card.id === parseInt(id as string, 10));

    if (!card) {
      return new HttpResponse("Card not found", 
      {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }

    return HttpResponse.json(card);
  }),

    // POST a new card
    http.post('/card', async ({ request }) => {
      const body = await request.json();
      console.log(body)
      const newCard = {
        id: CARDS.length + 1,
        propertyName: "Cedar Hill",
        address: "808 Cedar Hill Lane",
        zipCode: "80008",
        city: "Fairview",
        coordinates: "39.7392, -104.9903",
        estimatedValue: 790000,
        totalRisk: 19,
        handledRisks: 12,
        relevantRisks: 7,
      };
  
      CARDS.push(newCard);
  
      return HttpResponse.json(newCard, {
        status: 201
      });
    }),
];