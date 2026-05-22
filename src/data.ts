
import type { Itinerary, Destination, TravelStyle, TravelStyleDetail } from './types.ts';

export interface ItineraryExtended extends Itinerary {
  dailyHighlights: { day: string; title: string; description: string }[];
  inclusions: string[];
}

export const ITINERARIES: ItineraryExtended[] = [
  {
    id: 'avatar-mountains',
    title: 'The Avatar Mountains & Misty Rivers: A Journey of Contrasts',
    duration: '10 Days',
    destinations: ['Shanghai', 'Zhangjiajie', 'Guilin', 'Yangshuo'],
    style: ['Nature & Landscapes', 'Adventure & Active'],
    activityLevel: 'Moderate',
    overview: 'Experience the China you\'ve seen in movies. From the futuristic skyline of Shanghai to the surreal, floating pillars of Zhangjiajie (the inspiration for Avatar), and the serene landscapes of Yangshuo.',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Itineraries/journey%20of%20contrasts.jpg',
    price: 3850,
    deposit: 0.1,
    inclusions: [
      'Private English-speaking guides',
      '5-star luxury accommodation throughout',
      'Domestic flights (Shanghai-Zhangjiajie, Guilin-Shanghai)',
      '4-Star Luxury Li River Cruise',
      'VIP Airport transfers'
    ],
    dailyHighlights: [
      { day: 'Day 1', title: 'Arrival in Shanghai', description: 'Private transfer from PVG airport. Evening guided stroll along the Huangpu River to witness the iconic Lujiazui skyline.' },
      { day: 'Day 2', title: 'Old Meets New', description: 'Visit Yu Garden and the French Concession. Enjoy a coffee culture tour and see the blend of colonial history and modern life.' },
      { day: 'Day 3', title: 'Into the Clouds', description: 'Flight to Zhangjiajie. Conquer Tianmen Mountain via the world\'s longest cable car and experience the Glass Skywalk.' },
      { day: 'Day 4', title: 'The Avatar Experience', description: 'Ride the Bailong Elevator to Yuanjiajie to see the Hallelujah Mountains. Hike the peaceful Golden Whip Stream.' },
      { day: 'Day 5', title: 'Grand Canyon to Guilin', description: 'Walk the world\'s highest glass-bottomed bridge. Evening transfer to Guilin via high-speed rail or flight.' },
      { day: 'Day 6', title: 'The Li River Cruise', description: 'Board a 4-Star Luxury Cruise down the Li River. Pass the "20 Yuan" scenery and arrive in boutique Yangshuo.' },
      { day: 'Day 7', title: 'Authentic Countryside', description: 'Bamboo rafting on the Yulong River, followed by a cycling or scooter tour through rice paddies and local villages.' },
      { day: 'Day 8', title: 'Dragon\'s Backbone', description: 'Day trip to the Longji Rice Terraces. Enjoy a local lunch of "Bamboo Rice" cooked over an open fire.' },
      { day: 'Day 9', title: 'Return to Shanghai', description: 'Fly back to Shanghai. Farewell feast featuring authentic Xiao Long Bao (Soup Dumplings) and last-minute shopping.' },
      { day: 'Day 10', title: 'Departure', description: 'Private transfer to the airport for your flight back to Australia.' }
    ]
  },
  {
    id: 'imperial-pandas',
    title: 'Dynasties, Dragons & Pandas: The Ultimate Cultural Journey',
    duration: '11 Days',
    destinations: ['Beijing', 'Xi\'an', 'Chengdu', 'Shanghai'],
    style: ['Culture & History', 'Local Life Experiences'],
    activityLevel: 'Moderate',
    overview: 'Walk the Great Wall, stare into the eyes of the Terracotta Warriors, and meet Giant Pandas. This journey balances ancient history with China\'s relaxed modern lifestyle.',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Itineraries/the%20ultimate%20cultural%20journey.webp',
    price: 4250,
    deposit: 0.1,
    inclusions: [
      'Private Historian Guides',
      'VIP Access to Forbidden City',
      'High-speed Bullet Train (Beijing-Xi\'an)',
      'Panda Research Base entry',
      'Peking Duck Welcome Dinner'
    ],
    dailyHighlights: [
      { day: 'Day 1', title: 'Ní Hǎo Beijing', description: 'Private transfer from PEK. Welcome dinner featuring authentic Peking Duck carved at your table.' },
      { day: 'Day 2', title: 'Imperial Life', description: 'VIP access to the Forbidden City. Afternoon Hutong Rickshaw tour and local family dumpling-making session.' },
      { day: 'Day 3', title: 'Great Wall (The Fun Way)', description: 'Hike the Mutianyu section of the Great Wall. Take the cable car up and the toboggan slide down!' },
      { day: 'Day 4', title: 'The High-Speed Experience', description: 'Visit Temple of Heaven with locals. Take the 300km/h Bullet Train to the ancient capital of Xi\'an.' },
      { day: 'Day 5', title: 'Ghost Army & City Walls', description: 'Private tour of the Terracotta Warriors. Afternoon cycling on the 14km Ancient City Wall loop.' },
      { day: 'Day 6', title: 'Spice & Chill', description: 'Travel to Chengdu. Experience teahouse culture in People\'s Park with jasmine tea and Mahjong.' },
      { day: 'Day 7', title: 'The Panda Base', description: 'Early morning visit to the Giant Panda Research Base. Evening optional Sichuan "Face Changing" Opera.' },
      { day: 'Day 8', title: 'Future City', description: 'Fly to Shanghai. Stroll the French Concession and see the Bund lit up at night.' },
      { day: 'Day 9', title: 'Shanghai Modern', description: 'Ascend the Shanghai Tower and take the ferry to Lujiazui for the highest views in China.' },
      { day: 'Day 10', title: 'Departure', description: 'Final shopping on Nanjing Road before your private transfer to PVG for the flight home.' }
    ]
  },
  {
    id: 'china-for-kids',
    title: 'China for Kids: Theme Parks, Pandas & Palaces',
    duration: '13 Days',
    destinations: ['Beijing', 'Xi\'an', 'Chengdu', 'Shanghai'],
    style: ['Travel with Kids', 'Adventure & Active'],
    activityLevel: 'High',
    overview: 'Australia has playgrounds, but China has Wonderlands. Combine the Great Wall and Pandas with the world\'s newest theme parks and luxury "Quarry" hotels.',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Itineraries/china%20for%20kids.jpg',
    price: 5400,
    deposit: 0.1,
    inclusions: [
      'Universal Studios & Disneyland VIP passes',
      'Stay at InterContinental "Quarry Hotel"',
      'Meland Club luxury play center access',
      'Themed family suites',
      'Family-paced private transport'
    ],
    dailyHighlights: [
      { day: 'Day 1', title: 'Arrival in Beijing', description: 'Check into the Universal Studios Grand Hotel with early park access and Minion-themed vibes.' },
      { day: 'Day 2', title: 'Kung Fu Panda Land', description: 'Full day at Universal Studios Beijing. Explore the exclusive indoor Kung Fu Panda Land of Awesomeness.' },
      { day: 'Day 3', title: 'The Great Wall Slide', description: 'Visit the Mutianyu Great Wall. Kids love the toboggan slide descent. Afternoon Science Museum visit.' },
      { day: 'Day 4', title: 'Bullet Train to Xi\'an', description: 'Experience the high-speed rail. Evening Tang Dynasty Dinner Show with colorful costumes and dumplings.' },
      { day: 'Day 5', title: 'Warriors & Cycling', description: '3D Movie experience at the Terracotta Warriors museum followed by cycling on the ancient City Walls.' },
      { day: 'Day 6', title: 'Travel to Chengdu', description: 'Experience high-speed rail. Visit Meland Club, a multi-story fantasy land that redefines "indoor playground".' },
      { day: 'Day 7', title: 'Pandas & Sugar Art', description: 'Morning at the Panda Base. Afternoon learning "Sugar Painting" melted art from street artists.' },
      { day: 'Day 8', title: 'The Quarry Hotel', description: 'Fly to Shanghai. Stay at the "Underground" Quarry Hotel with underwater rooms and a glass walkway.' },
      { day: 'Day 9', title: 'Ocean Deep', description: 'Shanghai Ocean Aquarium and the Bund Sightseeing Tunnel\'s laser show tram ride.' },
      { day: 'Day 10', title: 'Shanghai Disneyland', description: 'Full day at Disney Resort. Experience the world-exclusive Zootopia land and TRON Lightcycle Power Run.' },
      { day: 'Day 11', title: 'Safari or Shopping', description: 'Option for a Safari bus ride at the Wild Animal Park or shopping at the Lego Flagship Store.' },
      { day: 'Day 12', title: 'Departure', description: 'Private transfer to the airport for your flight back to Australia.' }
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'beijing',
    name: 'Beijing',
    overview: 'Imperial History & Living Tradition',
    summary: 'Beijing is the cultural and historical heart of China. As the former imperial capital, it offers unparalleled access to iconic landmarks such as the Forbidden City and the Great Wall. It is the ideal starting point for travellers who want to understand China’s history, values, and traditions.',
    longDescription: 'The political and cultural heart of China for over 800 years. Its grand scale reveals how power and order shaped Chinese civilisation.',
    bestFor: ['First-time visitors', 'Culture & History lovers'],
    activityLevel: 'Moderate',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/Tiantan.jpg',
    localTips: ['Set up Alipay before arriving.', 'Mutianyu is best for a less crowded Wall experience.', 'Visit Hutongs by foot for the best detail.'],
    activities: [
      { title: 'Forbidden City', description: 'The political centre of China for over 500 years and home to 24 emperors. Its grand scale and strict layout reveal how power, hierarchy, and order shaped Chinese civilisation.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/entrance-Gate-of-Divine-Might-Beijing-Forbidden.webp' },
      { title: 'Great Wall (Mutianyu / Jinshanling)', description: 'One of the world’s most iconic landmarks. Stretching across mountain ridges, it offers both dramatic scenery and historical depth. This is often the most unforgettable moment of a first China journey.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Adventure%20and%20active/Beijing/jinshanling6_70527.jpg' },
      { title: 'Temple of Heaven', description: 'Reflects ancient Chinese beliefs about harmony between Heaven, Earth, and humanity. Today, it is also a lively public park where locals practise tai chi and socialise.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/Tiantan.jpg' },
      { title: 'Hutongs & Courtyard Homes', description: 'Beijing’s hutongs are traditional residential neighbourhoods where local life continues today. Walking through these narrow lanes offers an authentic view of everyday Beijing.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/Beijing/China_Hutong-Life.jpg' },
      { title: 'Hanfu Cultural Experience', description: 'Wearing traditional hanfu in historic settings allows travellers to engage with Chinese culture in a personal way. Especially popular with families and couples.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/hanfu%20experience.jpg' }
    ]
  },
  {
    id: 'xian',
    name: 'Xi\'an',
    overview: 'The Origins of Chinese Civilisation',
    summary: 'Xi’an reveals the origins of Chinese civilisation. Home to the Terracotta Warriors and ancient city walls, it shows how China first emerged as a unified empire. It is a powerful destination for travellers interested in history, archaeology, and cultural depth.',
    longDescription: 'The starting point of the Silk Road and the first capital of a unified China. A place where ancient history is visible at every turn.',
    bestFor: ['History buffs', 'Families'],
    activityLevel: 'Moderate',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/City_wall_of_Xian.jpg',
    activities: [
      { title: 'Terracotta Warriors', description: 'Built to protect China’s first emperor in the afterlife. Thousands of life-sized figures demonstrate the early scale, ambition, and organisation of Chinese civilisation.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/hall-pit1-terracotta-warriors-960.jpg' },
      { title: 'Ancient City Wall', description: 'One of the best-preserved ancient defensive systems in China. Visitors can walk or cycle along the top, gaining a clear sense of how historic cities were designed.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/City_wall_of_Xian.jpg' },
      { title: 'Big Wild Goose Pagoda', description: 'This landmark symbolises the spread of Buddhism in ancient China and reflects Xi’an’s role as a cultural and religious crossroads along the Silk Road.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/xa-big%20wild%20goose%20pagoda%20.jpg' },
      { title: 'Muslim Quarter', description: 'Showcases Xi’an’s multicultural heritage. Food stalls and local markets offer a lively introduction to regional flavours and daily life.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/xa-Muslim%20Quarter.jpg' },
      { title: 'Tang Dynasty Cultural Experiences', description: 'Cultural shows and themed experiences highlight the prosperity of the Tang Dynasty, one of China’s golden ages.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/xa-Tang%20Dynasty%20Cultural%20Experiences.webp' }
    ]
  },
  {
    id: 'shanghai',
    name: 'Shanghai',
    overview: 'Modern China & Global Connections',
    summary: 'Shanghai represents modern China at its most dynamic and international. Historic neighbourhoods sit alongside a futuristic skyline, creating a striking contrast between past and present. It offers comfort, style, and insight into China’s rapid transformation.',
    longDescription: 'A striking contrast between colonial history and futuristic urban landscapes. Shanghai is China\'s window to the modern world.',
    bestFor: ['Modern city lovers', 'Urban explorers'],
    activityLevel: 'Low',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/shanghai.jpg',
    activities: [
      { title: 'The Bund', description: 'Features historic architecture from Shanghai’s colonial era, revealing a striking contrast between early 20th-century buildings and the modern skyline.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Shanghai/the%20bunds.webp' },
      { title: 'Pudong Skyline', description: 'Represents the speed and scale of China’s modern development. Skyscrapers and financial centres offer a clear picture of contemporary China.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/sh-Pudong%20skyline.jpg' },
      { title: 'Yuyuan Garden & Old Town', description: 'Showcases classical Chinese garden design. Located within the old town, it provides insight into Shanghai’s traditional roots.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Shanghai/Shanghai%20Old%20Town%20%26%20Yuyuan%20Garden.jpg' },
      { title: 'French Concession', description: 'Tree-lined streets and historic villas reflect Shanghai’s international past. It is a pleasant area for walking, cafés, and relaxed exploration.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/sh-French%20Concession.jpg' },
      { title: 'Huangpu River Cruise', description: 'A river cruise offers a comfortable way to enjoy Shanghai’s skyline by day or night.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Relax%20and%20leisure/Shanghai/HuangpuRiverCruise%EF%BC%88QingjiangLine%EF%BC%89.jpg' }
    ]
  },
  {
    id: 'zhangjiajie',
    name: 'Zhangjiajie',
    overview: 'Dramatic Landscapes & Natural Wonder',
    summary: 'Zhangjiajie is known for its dramatic sandstone mountains and otherworldly landscapes. Its towering rock pillars and scenic viewpoints create some of the most visually striking scenery in China. This destination is ideal for nature lovers and travellers seeking unforgettable natural experiences.',
    longDescription: 'Towering sandstone pillars create one of the most unique landscapes in the world. The scenery inspired the floating mountains in Avatar.',
    bestFor: ['Nature lovers', 'Photographers'],
    activityLevel: 'High',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/Zhangjiajie-national-forest-park-3.jpg',
    activities: [
      { title: 'Zhangjiajie National Forest Park', description: 'Towering sandstone pillars create an otherworldly landscape, ideal for nature lovers and photographers.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/zhangjiajie/Zhangjiajie-national-forest-park-3.jpg' },
      { title: 'Tianmen Mountain', description: 'Known for steep cliffs and panoramic views, Tianmen Mountain offers unforgettable scenery and adventurous glass walkways.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/zhangjiajie/Tianmen%20Mountain%20and%20Glass%20walkway.jpg' },
      { title: 'Scenic Walking Trails', description: 'Well-maintained trails allow visitors to explore the park on foot at a comfortable pace.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/zjj-Scenic%20Walking%20Trails.jpg' },
      { title: 'Cable Cars & Viewpoints', description: 'Cable cars provide sweeping views across the mountains, making the experience accessible for all ages.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/zjj-viewpoint.jpg' }
    ]
  },
  {
    id: 'jiuzhaigou',
    name: 'Jiuzhaigou Valley',
    overview: 'Colourful Lakes & Alpine Scenery',
    summary: 'Jiuzhaigou is famous for its crystal-clear lakes, waterfalls, and colourful forests. The peaceful alpine scenery feels untouched and visually rich in every season. It is one of China’s most beautiful destinations for nature, photography, and slow exploration.',
    longDescription: 'A paradise of crystal-clear lakes, layered waterfalls, and multi-coloured forests set high in the Min Mountains.',
    bestFor: ['Nature enthusiasts', 'Slow travellers'],
    activityLevel: 'Moderate',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Jiuzhaigou/Multi-Coloured%20Lakes%20%26%20Waterfalls.jpg',
    activities: [
      { title: 'Multi-Coloured Lakes', description: 'Crystal-clear lakes reflect shades of blue, green, and turquoise, changing with the light and season.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Jiuzhaigou/Multi-Coloured%20Lakes%20%26%20Waterfalls.jpg' },
      { title: 'Waterfalls & Streams', description: 'Layered waterfalls flow through forested valleys, adding movement and sound to the dreamlike landscape.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/jzgwaterfall.jpg' },
      { title: 'Boardwalk Trails', description: 'Wooden walkways connect key viewpoints, allowing comfortable exploration for visitors of all ages.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/jzgBoardwalk%20Trails.jpg' },
      { title: 'Seasonal Scenery', description: 'Especially known for its vibrant autumn colours, Jiuzhaigou remains beautiful and alpine year-round.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Adventure%20and%20active/Jiuzhaigou/Jiuzhaigounationalpark.jpg' }
    ]
  },
  {
    id: 'guilin-yangshuo',
    name: 'Guilin & Yangshuo',
    overview: 'Poetic Landscapes & Slow Travel',
    summary: 'Guilin and Yangshuo are celebrated for their iconic karst mountains and tranquil river landscapes. Cruising the Li River and exploring the countryside offer a relaxed and immersive way to experience China’s natural beauty. This region is perfect for travellers seeking a slower pace and scenic surroundings.',
    longDescription: 'The emerald karst mountains and rivers that have inspired Chinese painters for centuries. A region defined by its serene atmosphere.',
    bestFor: ['Couples', 'Landscape photographers', 'Relaxation seekers'],
    activityLevel: 'Low',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Hero/87318-Li-River.jpg',
    activities: [
      { title: 'Li River Cruise', description: 'A gentle cruise reveals iconic karst mountains, villages, and riverside scenery. This is one of the most relaxing nature experiences in China.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Guilin/Li%20River.jpg' },
      { title: 'Yangshuo Countryside', description: 'Cycling and walking routes allow visitors to explore rural landscapes at their own pace.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Guilin/Yangshuo.jpg' },
      { title: 'Karst Mountains', description: 'Limestone peaks create the classic scenery found in traditional Chinese paintings.', image: '' },
      { title: 'Riverside Walks & Sunsets', description: 'Quiet paths and open views provide a peaceful and picturesque end to each day.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Relax%20and%20leisure/Guilin/Yangshuo%20Riverside%20Walks.webp' }
    ]
  },
  {
    id: 'chengdu',
    name: 'Chengdu',
    overview: 'Pandas, Nature & Relaxed Living',
    summary: 'Chengdu is known for its relaxed lifestyle, rich food culture, and giant pandas. Beyond the pandas, the city offers tea houses, parks, and easy access to natural scenery. It is a comfortable and welcoming destination, especially popular with families and slow-paced travellers.',
    longDescription: 'Home to the giant panda and famous for its slow-paced teahouse culture. Chengdu offers a unique blend of heritage and modern leisure.',
    bestFor: ['Families', 'Animal lovers', 'Foodies'],
    activityLevel: 'Low',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/Chengdu.jpg',
    activities: [
      { title: 'Giant Panda Base', description: 'Seeing giant pandas up close is a highlight for travellers of all ages, especially families.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Travel%20with%20kids/Chengdu/chengdu-panda-base-700-5.jpg' },
      { title: 'Tea House Culture', description: 'Tea houses reflect Chengdu’s famously relaxed pace of life. Locals gather to chat, relax, and enjoy long afternoons.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/CHengdu/Tea%20House%20Culture.jpg' },
      { title: 'Mount Qingcheng', description: 'A lush, tranquil mountain known for its natural beauty and Taoist heritage.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Chengdu/Mount%20Qingcheng.jpg' },
      { title: 'Dujiangyan Irrigation System', description: 'An ancient engineering system still in use today, set within a scenic natural environment.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Chengdu/Dujiangyan%20Irrigation%20System.jpg' },
      { title: 'Local Food & Street Life', description: 'Chengdu’s food culture is an essential part of its daily life and social scene.', image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/CHengdu/Street%20Food%20%26%20Neighbourhood%20Life.jpg' }
    ]
  }
];

export const TRAVEL_STYLES: TravelStyle[] = [
  {
    id: 'nature',
    name: 'Nature & Landscapes',
    description: 'Dramatic mountains, karst rivers, and serene rice terraces curated for aesthetic appreciation. Perfect for photographers.',
    icon: '🌿',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Hero/%E5%B0%81%E9%9D%A2%E5%9B%BE.jpeg'
  },
  {
    id: 'culture',
    name: 'Culture & History',
    description: 'Ancient capitals, silk road heritage, and imperial landmarks explored with our hand-picked expert historians.',
    icon: '🏛',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/Tiantan.jpg'
  },
  {
    id: 'local-life',
    name: 'Local Life Experiences',
    description: 'Hidden alleyways, bustling teahouses, and morning markets where real life unfolds away from tourist traps.',
    icon: '🏙',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/Hero/guilin-china-travel-photo-20251106211102011-main-image.jpg'
  },
  {
    id: 'relaxed',
    name: 'Relaxed & Leisure',
    description: 'Slow-paced exploration focusing on high-end retreats, wellness, and scenic teahouses for a stress-free journey.',
    icon: '🌴',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Relax%20and%20leisure/Hero/guilin-li-river-cruise_7.jpg'
  },
  {
    id: 'adventure',
    name: 'Adventure & Active',
    description: 'Off-the-beaten-path hiking, cycling through remote villages, and engaging with high-altitude frontiers.',
    icon: '🥾',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Adventure%20and%20active/Hero/jiuzhaigou-hiking-trail.jpg'
  },
  {
    id: 'kids',
    name: 'Travel with Kids',
    description: 'Interactive encounters, hands-on cultural workshops, and family pacing designed for multi-generational explorers.',
    icon: '👨',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Travel%20with%20kids/Hero/0201f12000e56hp2gBAE3.jpg'
  },
  {
    id: 'food',
    name: 'Food & Culinary Experiences',
    description: 'Experience China Through Taste. From imperial banquets to street food, we curate clean, authentic, and English-friendly dining.',
    icon: '🥟',
    image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Beijing/Peking%20duck.jpg'
  }
];

export const STYLE_DETAILS: Record<string, TravelStyleDetail> = {
  nature: {
    ...TRAVEL_STYLES[0],
    introTitle: "China’s Most Iconic Natural Scenery",
    description: "China offers some of the most diverse and dramatic natural landscapes in the world. This route brings together towering sandstone mountains, colourful alpine lakes, peaceful river scenery, and forested valleys. From the striking formations of Zhangjiajie to the calm waterways of Guilin and the alpine beauty of Jiuzhaigou, these destinations highlight China’s natural beauty at its most varied and memorable.",
    cities: [
      {
        cityName: "Zhangjiajie",
        sections: [
          {
            title: "Zhangjiajie National Forest Park",
            points: [
              "Famous for its towering sandstone pillars that rise dramatically from the ground.",
              "These vertical peaks create a landscape unlike anywhere else in the world, often described as otherworldly.",
              "Walking through the park allows visitors to experience China’s most visually striking natural scenery, with well-maintained paths that make the area accessible while preserving its dramatic impact."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/zhangjiajie/Zhangjiajie-national-forest-park-3.jpg"
          },
          {
            title: "Tianmen Mountain & Glass Walkway",
            points: [
              "Tianmen Mountain is known for its sheer cliffs, panoramic views, and glass walkways suspended along the mountainside.",
              "The experience combines breathtaking scenery with light adventure, offering strong visual impact without requiring extreme physical effort.",
              "It is one of the most memorable locations for travellers seeking dramatic landscapes and unique viewpoints."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/zhangjiajie/Tianmen%20Mountain%20and%20Glass%20walkway.jpg"
          }
        ]
      },
      {
        cityName: "Guilin & Yangshuo",
        sections: [
          {
            title: "Li River Cruise",
            points: [
              "The Li River is one of China’s most celebrated natural landscapes, known for its karst mountains rising gently along the water.",
              "A cruise along the river offers a slow, immersive way to experience the scenery, passing rural villages, bamboo groves, and limestone peaks.",
              "This journey is often the most peaceful and relaxing part of a China itinerary, ideal for travellers who appreciate nature at a comfortable pace."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Guilin/Li%20River.jpg"
          },
          {
            title: "Yangshuo Countryside",
            points: [
              "Yangshuo showcases the same iconic karst scenery as Guilin, but in a more intimate rural setting.",
              "Cycling paths, riverside walks, and open farmland allow visitors to experience the landscape up close and at their own rhythm.",
              "It is an ideal destination for those who want to combine natural beauty with a relaxed, outdoor lifestyle."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Guilin/Yangshuo.jpg"
          }
        ]
      },
      {
        cityName: "Jiuzhaigou",
        sections: [
          {
            title: "Jiuzhaigou National Park",
            points: [
              "Jiuzhaigou National Park is renowned for its crystal-clear lakes, colourful forests, and cascading waterfalls.",
              "The vivid blues and greens of the water change with the light and seasons, creating a landscape that feels almost unreal.",
              "This area is widely regarded as one of China’s most beautiful natural destinations, especially for visitors who enjoy photography and scenic walking routes."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Jiuzhaigou/Jiuzhaigounationalpark.jpg"
          },
          {
            title: "Multi-Coloured Lakes & Waterfalls",
            points: [
              "Jiuzhaigou’s layered lakes and waterfalls are naturally arranged along gentle boardwalks, allowing visitors to explore the area comfortably.",
              "The scenery is calm, immersive, and visually rich, making it suitable for travellers of all ages.",
              "It is a destination that rewards slow exploration and careful observation."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Jiuzhaigou/Multi-Coloured%20Lakes%20%26%20Waterfalls.jpg"
          }
        ]
      },
      {
        cityName: "Chengdu",
        sections: [
          {
            title: "Mount Qingcheng",
            points: [
              "Mount Qingcheng is one of the most tranquil natural sites near Chengdu, known for its lush greenery and peaceful atmosphere.",
              "As one of the birthplaces of Taoism, the mountain combines natural beauty with a strong sense of harmony and balance.",
              "It is an excellent choice for travellers seeking a gentle nature experience close to the city."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Chengdu/Mount%20Qingcheng.jpg"
          },
          {
            title: "Dujiangyan Irrigation System",
            points: [
              "Dujiangyan is an ancient irrigation system set within a natural river landscape, still functioning today.",
              "Surrounded by mountains and waterways, it demonstrates how humans have worked in balance with nature for over two thousand years.",
              "The site offers both scenic views and cultural insight, making it a unique addition to a nature-focused journey."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Chengdu/Dujiangyan%20Irrigation%20System.jpg"
          }
        ]
      }
    ]
  },
  culture: {
    ...TRAVEL_STYLES[1],
    introTitle: "Walking through the timeline of an empire.",
    description: "This journey focuses on understanding China through its history and cultural development. From ancient capitals and imperial landmarks to modern cities shaped by global influence, these destinations together tell the story of how China evolved over time. It is an ideal route for travellers who want context, depth, and a clearer understanding of Chinese civilisation.",
    cities: [
      {
        cityName: "Beijing",
        sections: [
          {
            title: "Forbidden City",
            points: [
              "The Forbidden City was the political heart of China for over 500 years and home to 24 emperors.",
              "Its vast palace complex, arranged along a strict central axis, reflects the importance of hierarchy, order, and power in Chinese culture.",
              "Walking through the Forbidden City allows visitors to physically experience how an empire was governed, making history tangible and easy to understand."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/entrance-Gate-of-Divine-Might-Beijing-Forbidden.webp"
          },
          {
            title: "Temple of Heaven",
            points: [
              "The Temple of Heaven was where emperors prayed for harmony between Heaven and Earth.",
              "Rather than a residence, it represents ancient Chinese beliefs about balance, nature, and the emperor’s role in the universe.",
              "Today, it is also a public park, offering a rare opportunity to see history and everyday local life naturally coexist."
            ],
            image: 'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/Tiantan.jpg'
          }
        ]
      },
      {
        cityName: "Xi’an",
        sections: [
          {
            title: "Terracotta Warriors",
            points: [
              "The Terracotta Warriors are one of the most significant archaeological discoveries in the world.",
              "Created to guard China’s first emperor in the afterlife, the thousands of life-sized figures demonstrate the early scale and ambition of Chinese civilisation.",
              "Each figure is unique, offering a powerful insight into how China first imagined empire, order, and military strength."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/hall-pit1-terracotta-warriors-960.jpg"
          },
          {
            title: "Ancient City Wall",
            points: [
              "Xi’an’s ancient city wall is one of the best-preserved defensive systems in China.",
              "From the top, visitors can see the contrast between the historic old city and modern urban life beyond.",
              "It provides a clear, physical understanding of how Chinese cities were planned and protected in the past."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Xi'an/City_wall_of_Xian.jpg"
          }
        ]
      },
      {
        cityName: "Chengdu",
        sections: [
          {
            title: "Wuhou Shrine",
            points: [
              "Wuhou Shrine is dedicated to key figures from the Three Kingdoms period, one of the most influential eras in Chinese history.",
              "The site combines historical storytelling with tranquil gardens, making it accessible and engaging for visitors.",
              "It offers insight into loyalty, strategy, and leadership—values deeply rooted in traditional Chinese culture."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Chengdu/wuhou-memorial-temple.jpg"
          },
          {
            title: "Jinli Ancient Street",
            points: [
              "Jinli Ancient Street recreates the atmosphere of traditional Sichuan life.",
              "Historic-style buildings, local snacks, and crafts provide an easy introduction to regional culture and customs.",
              "It is an ideal place to experience history in a relaxed and approachable setting."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Chengdu/Jinli%20Ancient%20Street.jpg"
          }
        ]
      },
      {
        cityName: "Shanghai",
        sections: [
          {
            title: "The Bund",
            points: [
              "The Bund showcases Shanghai’s colonial-era architecture along the Huangpu River.",
              "These historic buildings reflect a period when China was opening to the world and undergoing major transformation.",
              "Standing on the Bund, visitors gain a clear understanding of Shanghai’s role in China’s modern history."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Shanghai/the%20bunds.webp"
          },
          {
            title: "Shanghai Old Town & Yuyuan Garden",
            points: [
              "Yuyuan Garden represents classical Chinese garden design, with pavilions, ponds, and rock formations.",
              "Located within Shanghai’s old town, it offers a glimpse into the city’s traditional roots amid a modern metropolis."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Shanghai/Shanghai%20Old%20Town%20%26%20Yuyuan%20Garden.jpg"
          }
        ]
      }
    ]
  },
  'local-life': {
    ...TRAVEL_STYLES[2],
    introTitle: "Experiencing How People Live in China",
    description: "For travellers interested in everyday life rather than major landmarks, this route highlights how people live across different parts of China. From traditional neighbourhoods and tea houses to riverside villages and local markets, these cities offer authentic, human-scale experiences. It is well suited to those who prefer slower travel and meaningful cultural connection.",
    cities: [
      {
        cityName: "Beijing",
        sections: [
          {
            title: "Hutongs & Courtyard Homes",
            points: [
              "Beijing’s hutongs are traditional alleyway neighbourhoods where locals continue to live today.",
              "Families often share courtyard homes across generations, creating strong community ties.",
              "Walking through the hutongs offers an authentic look into everyday life beyond major landmarks."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/Beijing/China_Hutong-Life.jpg"
          },
          {
            title: "Local Parks & Morning Activities",
            points: [
              "Public parks in Beijing are lively social spaces where locals practise tai chi, sing, or play chess.",
              "These daily routines reveal a softer, more personal side of the city."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/Beijing/Local%20Parks%20Morning%20Activities.jpg"
          }
        ]
      },
      {
        cityName: "Chengdu",
        sections: [
          {
            title: "Tea House Culture",
            points: [
              "Tea houses are an essential part of Chengdu’s daily life.",
              "Locals gather to chat, relax, and spend long afternoons together.",
              "This experience reflects the city’s famously slow and relaxed pace of life."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/CHengdu/Tea%20House%20Culture.jpg"
          },
          {
            title: "Local Food Streets",
            points: [
              "Chengdu’s street food culture showcases the flavours of Sichuan cuisine.",
              "Visitors can observe daily routines while sampling regional snacks in a casual, social setting."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/CHengdu/Street%20Food%20%26%20Neighbourhood%20Life.jpg"
          }
        ]
      },
      {
        cityName: "Guilin",
        sections: [
          {
            title: "Riverside Villages",
            points: [
              "Villages along the Li River offer insight into rural life in southern China.",
              "Daily activities unfold naturally against a backdrop of karst mountains and farmland.",
              "This setting allows visitors to connect with local life at a slower pace."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/Guilin/Riverside%20Villages.jpg"
          },
          {
            title: "Local Markets",
            points: [
              "Traditional markets in Guilin provide a window into everyday routines, food culture, and local produce.",
              "They offer a grounded, authentic experience beyond sightseeing."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/Guilin/local%20market.jpg"
          }
        ]
      }
    ]
  },
  relaxed: {
    ...TRAVEL_STYLES[3],
    introTitle: "Slower Travel at a Comfortable Pace",
    description: "This route is designed for comfort, balance, and a relaxed pace. Scenic river landscapes, calm city parks, and comfortable urban environments allow travellers to enjoy China without rushing. It is particularly suitable for couples, mature travellers, and those looking for a more leisurely journey.",
    cities: [
      {
        cityName: "Guilin",
        sections: [
          {
            title: "Li River Cruise",
            points: [
              "Cruising along the Li River allows travellers to enjoy the landscape without physical effort.",
              "The calm movement of the boat creates a peaceful and immersive experience.",
              "Ideal for taking in the cinematic limestone peaks while relaxing in comfort."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Guilin/Li%20River.jpg"
          },
          {
            title: "Yangshuo Riverside Walks",
            points: [
              "Gentle walks along the river in Yangshuo allow visitors to enjoy nature at their own rhythm.",
              "The environment is quiet, scenic, and ideal for relaxation.",
              "Witness the golden sunset reflecting off the karst mountains in a serene atmosphere."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Relax%20and%20leisure/Guilin/Yangshuo%20Riverside%20Walks.webp"
          }
        ]
      },
      {
        cityName: "Chengdu",
        sections: [
          {
            title: "People's Park",
            points: [
              "People’s Park is a central gathering place where locals relax, drink tea, and socialise.",
              "It offers a calm introduction to Chengdu’s famously slow-paced lifestyle.",
              "Observe the unique 'Matchmaking Corner' and join the locals for a quiet afternoon."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Local%20life%20experiences/CHengdu/Tea%20House%20Culture.jpg"
          },
          {
            title: "Spa & Wellness Experiences",
            points: [
              "Chengdu’s wellness and spa experiences complement its relaxed atmosphere.",
              "They provide a comfortable way to unwind during a longer journey.",
              "Traditional therapies integrated with modern luxury for total rejuvenation."
            ],
            image: "https://images.unsplash.com/photo-1544161515-4af6b1d8b159?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        cityName: "Shanghai",
        sections: [
          {
            title: "Huangpu River Cruise",
            points: [
              "A river cruise offers a relaxed way to enjoy Shanghai’s iconic skyline.",
              "Historic and modern architecture can be seen together without the rush of city streets.",
              "Best experienced at night when the Lujiazui towers come alive with light."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Relax%20and%20leisure/Shanghai/HuangpuRiverCruise%EF%BC%88QingjiangLine%EF%BC%89.jpg"
          },
          {
            title: "Stylish Cafés & Waterfront Areas",
            points: [
              "Shanghai’s boutique cafés and pedestrian areas offer comfort and familiarity.",
              "The French Concession and Bund waterfront provide an easy, leisurely contrast to intensive sightseeing.",
              "Perfect for slow mornings watching the city wake up over high-quality local coffee."
            ],
            image: "https://images.unsplash.com/photo-1548810931-e3b0b5c95698?auto=format&fit=crop&w=800&q=80"
          }
        ]
      }
    ]
  },
  adventure: {
    ...TRAVEL_STYLES[4],
    introTitle: "Active Ways to Experience Nature",
    description: "This route focuses on active exploration through walking, hiking, and outdoor movement. Mountain trails, scenic boardwalks, and historic walks combine natural scenery with physical engagement. It is ideal for travellers who enjoy staying active while experiencing China’s landscapes in a more immersive way.",
    cities: [
      {
        cityName: "Zhangjiajie",
        sections: [
          {
            title: "National Forest Park Trails",
            points: [
              "Well-maintained walking paths allow visitors to explore dramatic landscapes on foot.",
              "The experience combines movement with breathtaking scenery."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/zhangjiajie/Zhangjiajie-national-forest-park-3.jpg"
          },
          {
            title: "Glass Walkways",
            points: [
              "Glass walkways offer light adventure with strong visual impact.",
              "They create memorable moments without demanding physical endurance."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/zhangjiajie/Tianmen%20Mountain%20and%20Glass%20walkway.jpg"
          }
        ]
      },
      {
        cityName: "Jiuzhaigou Valley",
        sections: [
          {
            title: "Scenic Boardwalk Trails",
            points: [
              "Wooden boardwalks connect lakes and waterfalls throughout the valley.",
              "They encourage active exploration at a comfortable pace."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Nature%20and%20landscapes/Jiuzhaigou/Multi-Coloured%20Lakes%20%26%20Waterfalls.jpg"
          },
          {
            title: "Nature Photography Walks",
            points: [
              "Jiuzhaigou’s landscapes reward slow, active walking and observation.",
              "It is especially appealing to travellers who enjoy photography."
            ],
            image: "https://github.com/vincentluna-0507/VisitChinaImages/blob/main/Adventure%20and%20active/Hero/jiuzhaigou-hiking-trail-conditions.jpg"
          }
        ]
      },
      {
        cityName: "Beijing",
        sections: [
          {
            title: "Great Wall Walks",
            points: [
              "Walking along the Great Wall offers a sense of movement through history and landscape.",
              "The experience is physically engaging but accessible."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Adventure%20and%20active/Hero/twobluepassports-china.webp"
          },
          {
            title: "City Cycling Routes",
            points: [
              "Cycling through historic areas provides a more active way to explore the city.",
              "It allows visitors to cover distance while staying connected to local surroundings."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Adventure%20and%20active/Beijing/city%20cycling.jfif"
          }
        ]
      }
    ]
  },
  kids: {
    ...TRAVEL_STYLES[5],
    introTitle: "Family-Friendly Cities & Experiences",
    description: "This family-friendly route combines education, comfort, and engaging experiences for travellers of all ages. These cities offer clear storytelling, safe environments, and activities that are easy for children to understand and enjoy. It is well suited to families and multi-generational travel, balancing learning with enjoyment and ease.",
    cities: [
      {
        cityName: "Beijing",
        sections: [
          {
            title: "Forbidden City",
            points: [
              "The scale and layout of the Forbidden City help children visualise history easily.",
              "Wide spaces and clear storytelling make it engaging for all ages."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Travel%20with%20kids/Beijing/1mi47224x8y565gq5F409_W_400_0_R5_Q90.jpg"
          },
          {
            title: "Science & Technology Museums",
            points: [
              "Interactive exhibits provide educational experiences in a family-friendly environment."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Travel%20with%20kids/Beijing/content_China_Science_and_Technology_Museum_(7).jpg"
          }
        ]
      },
      {
        cityName: "Xi’an",
        sections: [
          {
            title: "Terracotta Warriors",
            points: [
              "Life-sized figures make ancient history tangible and easy for children to understand."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Hero/hall-pit1-terracotta-warriors-960.jpg"
          },
          {
            title: "City Wall Cycling",
            points: [
              "Cycling on top of the city wall offers a fun, safe activity with historical context."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Culture%20and%20history/Xi'an/City_wall_of_Xian.jpg"
          }
        ]
      },
      {
        cityName: "Chengdu",
        sections: [
          {
            title: "Giant Panda Base",
            points: [
              "Seeing pandas up close is a highlight for children and adults alike."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Travel%20with%20kids/Chengdu/chengdu-panda-base-700-5.jpg"
          },
          {
            title: "Local Parks & Open Spaces",
            points: [
              "Parks provide space for children to move freely while parents enjoy the relaxed atmosphere."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Travel%20with%20kids/Chengdu/IMG_2652-775x1024.jpg"
          }
        ]
      },
      {
        cityName: "Shanghai",
        sections: [
          {
            title: "Shanghai Tower Observation Deck",
            points: [
              "High viewpoints offer excitement and clear city views in a safe environment."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Travel%20with%20kids/Shanghai/the%20bunds.webp"
          },
          {
            title: "Family-Friendly Urban Attractions",
            points: [
              "Modern infrastructure and international-standard facilities make Shanghai comfortable for families."
            ],
            image: "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Travel%20with%20kids/Shanghai/0201f12000e56hp2gBAE3.jpg"
          }
        ]
      }
    ]
  },
  food: {
    ...TRAVEL_STYLES[6],
    introTitle: "Experience China Through Taste",
    description: "China is one of the world’s richest food destinations — a place where flavours change dramatically from city to city, and every dish reflects centuries of culture and tradition. For English-speaking Australian travellers, food is not just part of the trip. It is the experience. At Visit China, we curate clean, safe, authentic, English-friendly dining experiences that help families enjoy real Chinese flavours without stress, confusion, or guesswork.",
    cities: [
      {
        cityName: "Beijing",
        sections: [
          {
            title: "Peking Duck & Imperial Flavours",
            points: [
              "Signature: Peking Duck, Imperial-style snacks & desserts, Handmade noodles & dumplings.",
              "Why it's great: Clean, structured, English-friendly restaurants. Iconic dishes with global reputation. Perfect for first-timers."
            ],
            images: [
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Beijing/Peking%20duck.jpg",
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Beijing/Imperial-style%20snacks.jpg",
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Beijing/dumplings.jpg"
            ]
          }
        ]
      },
      {
        cityName: "Shanghai",
        sections: [
          {
            title: "Xiao Long Bao & Seasonal Crab Dishes",
            points: [
              "Signature: Xiaolongbao, Crab roe soup dumplings, Crab noodles (蟹黄捞面), Jiangnan pastries (mung bean cake, meat mooncake, osmanthus cake).",
              "Why it's great: Mild flavours, elegant presentation. Perfect for families & picky eaters. Fantastic balance of modern & traditional cuisine."
            ],
            images: [
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Shanghai/Xiaolongbao.jpg",
              "https://github.com/vincentluna-0507/VisitChinaImages/blob/main/Food%20image/Shanghai/Crab%20roe%20soup%20dumpings.jpg?raw=true",
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Shanghai/Crab%20noodles.jpg"
            ]
          }
        ]
      },
      {
        cityName: "Chengdu",
        sections: [
          {
            title: "Hotpot & Street Food Culture",
            points: [
              "Signature: Sichuan hotpot (mild versions available), Dan dan noodles, Local teahouse snacks, Chengdu street food.",
              "Why it's great: 'Food & culture' perfect blend. Teahouse culture is a top hit for Aussie travellers. Huge variety of non-spicy dishes available for families."
            ],
            images: [
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Chengdu/Hotpot.jpg",
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Chengdu/Street%20food.jpg",
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Chengdu/Teahouse%20snacks.jpg"
            ]
          }
        ]
      },
      {
        cityName: "Xi'an",
        sections: [
          {
            title: "Noodles & Dumpling Banquet",
            points: [
              "Signature: Biangbiang noodles, Dumpling banquet, Roujiamo (Chinese burger).",
              "Why it's great: Very foreigner-friendly flavours. Ideal combination with Terracotta Warriors and historical attractions."
            ],
            images: [
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Xi'an/Biangbiang%20noodles.jpg",
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Xi'an/dumpling%20banquet.jpg",
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Xi'an/Roujiamo.jpg"
            ]
          }
        ]
      },
      {
        cityName: "Qingdao",
        sections: [
          {
            title: "Coastal Seafood & Beer Culture",
            points: [
              "Signature: Fresh seafood, Beer culture, Seafood clay pot / stir-fry.",
              "Why it's great: Clean coastal flavours. Pairs well with resort-style itineraries."
            ],
            images: [
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Qingdao/Fresh%20seafood.jpg",
              "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Food%20image/Qingdao/Beer%20culture.jpg"
            ]
          }
        ]
      }
    ]
  }
};
