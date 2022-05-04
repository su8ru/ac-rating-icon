const ratingToRank = (rating: number) =>
  rating > 2800 ? 0 : ((rating % 400) / 100) | 0;

export default ratingToRank;
