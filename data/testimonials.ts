// Real client testimonials and logos, published only with the client's written permission.
// The Proof section hides each block while its list is empty, so never add placeholders here.

export interface Testimonial {
  quote: string;
  name: string;
  title: string; // e.g. "CFO, Example Fintech Ltd"
}

export interface ClientLogo {
  name: string;
  src: string; // file in /public/images/clients/
}

export const TESTIMONIALS: Testimonial[] = [];
export const CLIENT_LOGOS: ClientLogo[] = [];
