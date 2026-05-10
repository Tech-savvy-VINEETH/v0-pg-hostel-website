export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  initials: string
  stayDuration: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Software Engineer',
    content: 'HomeStay PG has been my home for the past 2 years. The food quality is excellent, and the staff is very helpful. The location is perfect for my office commute.',
    rating: 5,
    initials: 'PS',
    stayDuration: '2 years',
  },
  {
    id: '2',
    name: 'Rahul Verma',
    role: 'MBA Student',
    content: 'As a student, I needed affordable accommodation with good study environment. This PG provides exactly that. The Wi-Fi is fast and rooms are clean.',
    rating: 5,
    initials: 'RV',
    stayDuration: '1.5 years',
  },
  {
    id: '3',
    name: 'Sneha Patel',
    role: 'Marketing Executive',
    content: 'I moved here from another city and was worried about finding a good place. HomeStay exceeded my expectations. It truly feels like home!',
    rating: 4,
    initials: 'SP',
    stayDuration: '8 months',
  },
  {
    id: '4',
    name: 'Amit Kumar',
    role: 'Research Scholar',
    content: 'The peaceful environment here is perfect for my research work. The management is understanding and the security gives my parents peace of mind.',
    rating: 5,
    initials: 'AK',
    stayDuration: '1 year',
  },
  {
    id: '5',
    name: 'Anjali Reddy',
    role: 'Medical Intern',
    content: 'With my unpredictable hospital hours, having meals ready and a clean room to come back to is a blessing. Highly recommend for healthcare workers!',
    rating: 5,
    initials: 'AR',
    stayDuration: '6 months',
  },
]
