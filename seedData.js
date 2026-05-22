const countries = [
  {
    id: 'IN',
    name: 'India',
    country: 'India'
  }
];

const states = [
  {
    id: 'GJ',
    country_id: 'IN',
    name: 'Gujarat',
    state: 'Gujarat'
  },
  {
    id: 'MH',
    country_id: 'IN',
    name: 'Maharashtra',
    state: 'Maharashtra'
  }
];

const cities = [
  {
    id: 'AMD',
    state_id: 'GJ',
    name: 'Ahmedabad',
    city: 'Ahmedabad'
  },
  {
    id: 'MUM',
    state_id: 'MH',
    name: 'Mumbai',
    city: 'Mumbai'
  }
];

const businessCategories = [
  {
    id: 'BC01',
    name: 'Restaurants',
    state_id: 'GJ',
    business: 'Food & Dining'
  },
  {
    id: 'BC02',
    name: 'Health & Wellness',
    state_id: 'GJ',
    business: 'Healthcare'
  }
];

const businesses = [
  {
    id: 'BIZ1001',
    member_id: '24',
    business_category_id: 'BC01',
    business_name: 'Parivar Sweets & Family Dining',
    number: '9876543210',
    number_2: '9876501234',
    country_id: 'IN',
    state_id: 'GJ',
    city_id: 'AMD',
    address: '123 Family Lane, Satellite, Ahmedabad',
    location_link: 'https://maps.example.com/parivar-sweets',
    image: 'path/to/business-image-1.jpg',
    about_us: 'Traditional sweets, snacks, and family-friendly dining in the heart of the community.',
    facebook: 'https://facebook.com/parivar.sweets',
    instagram: 'https://instagram.com/parivar_sweets',
    pinterest: '',
    youtube: '',
    website: 'https://parivar.example.com',
    gallery_images: [
      'path/to/business-gallery-1.jpg',
      'path/to/business-gallery-2.jpg'
    ],
    gallery_image_1: 'path/to/business-gallery-1.jpg',
    gallery_image_2: 'path/to/business-gallery-2.jpg',
    gallery_image_3: 'path/to/business-gallery-3.jpg',
    gallery_image_4: 'path/to/business-gallery-4.jpg',
    gallery_image_5: 'path/to/business-gallery-5.jpg',
    status: 1,
    cdate: '2026-05-22'
  },
  {
    id: 'BIZ1002',
    member_id: '26',
    business_category_id: 'BC02',
    business_name: 'Parivar Health & Care',
    number: '9123456780',
    number_2: '9123456781',
    country_id: 'IN',
    state_id: 'GJ',
    city_id: 'AMD',
    address: '45 Wellness Road, Navrangpura, Ahmedabad',
    location_link: 'https://maps.example.com/parivar-health',
    image: 'path/to/business-image-2.jpg',
    about_us: 'Community healthcare service with doctor consultations, wellness sessions, and support for families.',
    facebook: 'https://facebook.com/parivar.health',
    instagram: 'https://instagram.com/parivar_health',
    pinterest: '',
    youtube: '',
    website: 'https://parivarhealth.example.com',
    gallery_images: [
      'path/to/health-gallery-1.jpg',
      'path/to/health-gallery-2.jpg'
    ],
    gallery_image_1: 'path/to/health-gallery-1.jpg',
    gallery_image_2: 'path/to/health-gallery-2.jpg',
    gallery_image_3: 'path/to/health-gallery-3.jpg',
    gallery_image_4: 'path/to/health-gallery-4.jpg',
    gallery_image_5: 'path/to/health-gallery-5.jpg',
    status: 1,
    cdate: '2026-05-22'
  }
];

const posts = [
  {
    id: 'PST1001',
    member_id: '24',
    title: 'Summer Festival Planning',
    description: 'Join our community planning meeting for the upcoming summer festival. Everyone is invited to share ideas and volunteer.',
    image: 'path/to/post-image-1.jpg',
    status: 1,
    cdate: '2026-05-20'
  },
  {
    id: 'PST1002',
    member_id: '25',
    title: 'Family Reunion Highlights',
    description: 'A recap of the last family reunion with special moments, stories, and photographs from all age groups.',
    image: 'path/to/post-image-2.jpg',
    status: 1,
    cdate: '2026-04-12'
  }
];

const galleries = [
  {
    title: 'Family Reunion 2025',
    description: 'Photos from the annual family reunion held in Ahmedabad.',
    image: 'path/to/gallery-image-1.jpg',
    category: 'Reunion',
    year: '2025',
    gallery_category_id: 'G01',
    event_category: 'Family Gathering'
  },
  {
    title: 'Community Diwali Celebration',
    description: 'Lights, rangoli, and sweets from the Diwali celebration event.',
    image: 'path/to/gallery-image-2.jpg',
    category: 'Festival',
    year: '2024',
    gallery_category_id: 'G02',
    event_category: 'Festival'
  }
];

const festivals = [
  {
    title: 'Diwali Celebration',
    description: 'Annual Diwali celebration with lights, music, and family pujas.',
    image: 'path/to/festival-image-1.jpg',
    date: new Date('2026-11-01'),
    festival_name: 'Diwali 2026',
    festival_date: '2026-11-01',
    button_name: 'RSVP',
    button_link: 'https://example.com/diwali',
    festival_description: 'Prepare your lamps, sweets, and special gifts to celebrate together.'
  },
  {
    title: 'Navratri Garba Night',
    description: 'A nine-night Navratri celebration with dance, music, and community food stalls.',
    image: 'path/to/festival-image-2.jpg',
    date: new Date('2026-10-05'),
    festival_name: 'Navratri 2026',
    festival_date: '2026-10-05',
    button_name: 'Join Now',
    button_link: 'https://example.com/navratri',
    festival_description: 'Enjoy traditional folk music and colorful attire in our annual Garba celebration.'
  }
];

const events = [
  {
    title: 'Community Health Camp',
    description: 'Free health screening camp for members, with doctors and wellness sessions.',
    image: 'path/to/event-image-1.jpg',
    event_date: new Date('2026-06-15'),
    venue: 'Community Center, Ahmedabad',
    event_category_id: 'E001',
    event_category_name: 'Health',
    event_name: 'Health Camp 2026',
    event_location: 'Community Center',
    location_link: 'https://maps.example.com/healthcamp',
    start_time: new Date('2026-06-15T09:00:00Z'),
    end_time: new Date('2026-06-15T15:00:00Z'),
    entry_type: 'Free',
    event_description: 'Open to all registered members and their families.'
  },
  {
    title: 'Ganesh Chaturthi Puja',
    description: 'Traditional Ganesh Chaturthi celebration with family prayers and prasad distribution.',
    image: 'path/to/event-image-2.jpg',
    event_date: new Date('2026-09-19'),
    venue: 'Parivar Mandir Hall, Ahmedabad',
    event_category_id: 'E002',
    event_category_name: 'Religious',
    event_name: 'Ganesh Puja 2026',
    event_location: 'Mandir Hall',
    location_link: 'https://maps.example.com/ganesh-puja',
    start_time: new Date('2026-09-19T18:00:00Z'),
    end_time: new Date('2026-09-19T21:00:00Z'),
    entry_type: 'Open',
    event_description: 'Family prayers, aarti, and sweets for every participant.'
  }
];

const users = [
  {
    member_id: '24',
    first_name: 'Chovatiya',
    middle_name: 'Ravibhai',
    last_name: 'J',
    email: 'chovatiya@gmail.com',
    password: 'Ravi@123',
    number: '7990881893',
    gender: 'Male',
    dob: new Date('1978-03-16'),
    blood_group: 'B+',
    relation: 'Self',
    is_committee: true,
    committee_role: 'President',
    profile_image: 'path/to/user-profile-1.jpg',
    country_id: 'IN',
    state_id: 'GJ',
    city_id: 'AMD',
    address: '123 Family Lane, Satellite, Ahmedabad',
    family_code: 'FAM1001'
  },
  {
    member_id: '25',
    parent_member_id: '24',
    first_name: 'Naimish',
    middle_name: 'Tanti',
    last_name: '',
    email: 'naimish@gmail.com',
    password: 'Naimish@123',
    number: '9123456789',
    gender: 'Male',
    dob: new Date('2005-08-01'),
    blood_group: 'A+',
    relation: 'Son',
    profile_image: 'path/to/user-profile-2.jpg',
    country_id: 'IN',
    state_id: 'GJ',
    city_id: 'AMD',
    address: '123 Family Lane, Satellite, Ahmedabad',
    family_code: 'FAM1001'
  },
  {
    member_id: '26',
    parent_member_id: '24',
    first_name: 'Asha',
    middle_name: 'R.',
    last_name: 'Patel',
    email: 'asha.patel@example.com',
    password: 'Asha@123',
    number: '9988776655',
    gender: 'Female',
    dob: new Date('1980-10-12'),
    blood_group: 'O-',
    relation: 'Spouse',
    is_committee: false,
    profile_image: 'path/to/user-profile-3.jpg',
    country_id: 'IN',
    state_id: 'GJ',
    city_id: 'AMD',
    address: '123 Family Lane, Satellite, Ahmedabad',
    family_code: 'FAM1001'
  }
];

const configs = [
  {
    primaryColor: '#E65100',
    secondaryColor: '#F4C95D',
    backgroundColor: '#FFF8F0',
    textColor: '#4E342E',
    buttonColor: '#E65100',
    fontColor: '#FFFFFF',
    borderColor: '#E8D9C8',
    gradientStart: '#E65100',
    gradientEnd: '#7B0D1C'
  }
];

module.exports = {
  countries,
  states,
  cities,
  businessCategories,
  businesses,
  posts,
  galleries,
  festivals,
  events,
  users,
  configs
};
