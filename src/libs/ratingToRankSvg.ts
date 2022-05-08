import icons, { subIcons } from "./icons";

const ratingToRankSvg = (rating: number): string => {
  if (0 < rating && rating < 400) {
    if (rating < 32) return subIcons[0];
    if (rating < 54) return subIcons[1];
    if (rating < 89) return subIcons[2];
    if (rating < 147) return subIcons[3];
    if (rating < 188) return icons[0];
    if (rating < 242) return icons[1];
    if (rating < 311) return icons[2];
    return icons[3];
  }

  return icons[rating > 2800 ? 0 : ((rating % 400) / 100) | 0];
};

export default ratingToRankSvg;
