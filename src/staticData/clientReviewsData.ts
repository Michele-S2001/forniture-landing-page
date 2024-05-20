interface clientReview {
  id: number;
  name: string;
  image: string;
  city: string; 
  textReview: string;
  clientRating: 1 | 2 | 3 | 4 | 5;
}

const clientReviews: clientReview[] = [
  {
    id: 1,
    image: './img/avatarClientReviews/avatar_1.jpg',
    name: 'marco',
    city: 'rome',
    textReview: 'Lorem ipsum manent caus oniris plantu facitis adectus. Interid dolorem partial fanto, et giano color ben.',
    clientRating: 4
  },
  {
    id: 2,
    image: './img/avatarClientReviews/avatar_2.jpg',
    name: 'michele',
    city: 'rome',
    textReview: 'Lorem ipsum manent caus oniris plantu facitis adectus. Interid dolorem partial fanto, et giano color ben.',
    clientRating: 5
  },
  {
    id: 3,
    image: './img/avatarClientReviews/avatar_3.jpg',
    name: 'olivier',
    city: 'paris',
    textReview: 'Lorem ipsum manent caus oniris plantu facitis adectus. Interid dolorem partial fanto, et giano color ben.',
    clientRating: 5
  },
  {
    id: 4,
    image: './img/avatarClientReviews/avatar_4.jpg',
    name: 'pablo',
    city: 'madrid',
    textReview: 'Lorem ipsum manent caus oniris plantu facitis adectus. Interid dolorem partial fanto, et giano color ben.',
    clientRating: 4
  },
  {
    id: 5,
    image: './img/avatarClientReviews/avatar_5.jpg',
    name: 'matteo',
    city: 'rome',
    textReview: 'Lorem ipsum manent caus oniris plantu facitis adectus. Interid dolorem partial fanto, et giano color ben.',
    clientRating: 4
  },
  {
    id: 6,
    image: './img/avatarClientReviews/avatar_6.jpg',
    name: 'charles',
    city: 'london',
    textReview: 'Lorem ipsum manent caus oniris plantu facitis adectus. Interid dolorem partial fanto, et giano color ben.',
    clientRating: 5
  },
]

export default clientReviews;