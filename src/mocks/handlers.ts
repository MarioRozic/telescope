import { http, HttpResponse } from 'msw';

const CARDS = JSON.parse(localStorage.getItem('cards') || '[]');

export const handlers = [
  http.get('/card-list', () => {
    return HttpResponse.json(CARDS);
  }),

   // GET a specific card by ID
   http.get('/card/:id', (req) => {
    const { id } = req.params;
    console.log('IDD', id)
    const card = CARDS.find((card: { id: number; }) => card.id === parseInt(id as string, 10));

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
    const body = request.body;
    const formData = await body?.getReader()
    .read()
    .then(({ value }) => JSON.parse(new TextDecoder().decode(value)))

    const newCard = {
      id: CARDS.length + 1,
      propertyName: formData.propertyName ?? "",
      address: formData.address ?? "",
      zipCode: formData.zipCode ?? "",
      city: formData.city ?? "",
      coordinates: formData.coordinates ?? "",
      estimatedValue: formData.estimatedValue ?? 0,
      totalRisk: formData.totalRisk ?? 0,
      handledRisks: formData.handledRisks ?? 0,
      relevantRisks: formData.relevantRisks ?? 0,
    };

    CARDS.push(newCard);

      // Save the updated list of cards to localStorage
      localStorage.setItem('cards', JSON.stringify(CARDS));

    return HttpResponse.json(newCard, {
      status: 201
    });
  }),
];