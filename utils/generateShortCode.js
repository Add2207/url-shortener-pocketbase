import { nanoid } from 'nanoid';

export default function generateShortCode() {
  return nanoid(6); // generates a 6-character shortcode
}
