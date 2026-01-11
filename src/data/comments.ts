export interface Comment {
  _id: string;
  postId: string;
  author: string;
  email: string;
  comment: string;
  rating: number;
  date: string;
}

export const staticComments: Comment[] = [
  {
    _id: "c1",
    postId: "1",
    author: "John Doe",
    email: "john@example.com",
    comment: "Great article! Very helpful for my fitness journey.",
    rating: 5,
    date: "2024-02-01T10:00:00.000Z",
  },
  {
    _id: "c2",
    postId: "1",
    author: "Jane Smith",
    email: "jane@example.com",
    comment:
      "I love the focus on strength training. Could you add more about recovery?",
    rating: 4,
    date: "2024-02-05T14:30:00.000Z",
  },
  {
    _id: "c3",
    postId: "2",
    author: "Tech Enthusiast",
    email: "tech@example.com",
    comment: "The future look promising indeed. Next.js 13 is a game changer.",
    rating: 5,
    date: "2024-02-10T09:15:00.000Z",
  },
  {
    _id: "c4",
    postId: "3",
    author: "Solo Traveler",
    email: "solo@example.com",
    comment: "Japan is amazing! The rail pass is definitely a must-have.",
    rating: 5,
    date: "2024-02-12T16:45:00.000Z",
  },
];
