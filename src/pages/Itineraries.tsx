import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronUp, Clock, Compass, Hotel, MapPin, MessageSquare, ShieldCheck, Sparkles, TrainFront, Users } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { ITINERARIES_FAQS } from '../seo/siteConfig';

interface SampleItineraryDay {
  day: string;
  title: string;
  description: string;
}

interface SampleItinerary {
  id: string;
  title: string;
  route: string;
  bestFor: string;
  idealLength: string;
  summary: string;
  days: SampleItineraryDay[];
  links: { label: string; to: string }[];
}

const Itineraries: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('first-time-classic-china');

  const sampleItineraries: SampleItinerary[] = [
    {
      id: 'first-time-classic-china',
      title: 'First-Time Classic China',
      route: "Beijing -> Xi'an -> Chengdu -> Jiuzhaigou/Huanglong",
      bestFor: 'First-time travellers who want history, culture, pandas and iconic scenery',
      idealLength: '12 days',
      summary:
        "A classic route combining Beijing's major landmarks, Xi'an's ancient history, Chengdu's relaxed food and panda experiences, plus Jiuzhaigou and Huanglong for natural scenery.",
      days: [
        {
          day: 'Day 1',
          title: 'Beijing arrival',
          description:
            'Pickup from the airport or train station and transfer to the hotel. After check-in, enjoy free time depending on arrival time. Travellers may explore a local night market or nearby dining area at their own pace.',
        },
        {
          day: 'Day 2',
          title: 'Tiananmen Square, Forbidden City and Temple of Heaven',
          description:
            "Start with Tiananmen Square before entering the Forbidden City for a deeper look at Beijing's imperial history. In the afternoon, visit the Temple of Heaven, one of Beijing's most iconic cultural landmarks.",
        },
        {
          day: 'Day 3',
          title: 'Badaling Great Wall day trip',
          description:
            'Take a day trip to the Badaling section of the Great Wall. This day focuses on the Great Wall experience, with private transfer support to make the journey smoother and less rushed.',
        },
        {
          day: 'Day 4',
          title: 'Summer Palace, Old Summer Palace or Hutong experience, Lao She Teahouse',
          description:
            "Visit the Summer Palace, then choose between the Old Summer Palace or a hutong cultural experience. In the evening, enjoy Lao She Teahouse for a traditional Beijing-style cultural performance.",
        },
        {
          day: 'Day 5',
          title: "Beijing to Xi'an",
          description:
            "Travel to Xi'an by high-speed rail or flight. After hotel check-in, explore the Muslim Quarter for local halal food, visit Big Wild Goose Pagoda Square for the fountain show, and experience the Great Tang All Day Mall at night.",
        },
        {
          day: 'Day 6',
          title: 'Terracotta Warriors and Huaqing Palace',
          description:
            "Visit the Terracotta Warriors, one of China's most famous historical sites. Continue to Huaqing Palace, with the option to add a large-scale historical evening show depending on timing and interest.",
        },
        {
          day: 'Day 7',
          title: "Chang'an Twelve Hours, Hanfu experience and Ancient City Wall",
          description:
            "Explore the Chang'an Twelve Hours cultural district, enjoy a Hanfu experience, take in Xi'an's night views, and visit the Ancient City Wall. A themed dining experience such as Daming Palace-style dining can be included where available.",
        },
        {
          day: 'Day 8',
          title: "Xi'an to Chengdu",
          description:
            "Travel to Chengdu and check into the hotel. Spend the afternoon or evening around Kuanzhai Alley for a relaxed introduction to Chengdu's food and lifestyle.",
        },
        {
          day: 'Day 9',
          title: 'Chengdu Panda Base and relaxed city time',
          description:
            'Visit Chengdu Panda Base in the morning when pandas are usually more active. The rest of the day can be kept relaxed, with optional city sightseeing or local food experiences.',
        },
        {
          day: 'Day 10',
          title: 'Jiuzhaigou',
          description:
            'Travel to Jiuzhaigou and begin the nature-focused part of the journey. This day can be planned with a lighter pace depending on transport timing and hotel location.',
        },
        {
          day: 'Day 11',
          title: 'Jiuzhaigou full-day scenic visit',
          description:
            "Spend the day exploring Jiuzhaigou's lakes, valleys and mountain scenery. The itinerary should allow enough time for photography, walking and rest breaks.",
        },
        {
          day: 'Day 12',
          title: 'Huanglong and departure or onward transfer',
          description:
            'Visit Huanglong for colourful pools and alpine scenery, then return for departure or continue to the next destination depending on the final travel plan.',
        },
      ],
      links: [
        { label: 'Beijing', to: '/destinations/beijing' },
        { label: 'Chengdu', to: '/destinations/chengdu' },
        { label: 'Private Tours', to: '/private-china-tours' },
      ],
    },
    {
      id: 'family-friendly-china',
      title: 'Family-Friendly China',
      route: 'Hengqin/Zhuhai -> Guangzhou -> Chengdu',
      bestFor: 'Families with younger children who want resorts, theme parks, wildlife and pandas',
      idealLength: '7 days',
      summary:
        "A family-focused route with resort time, Chimelong Ocean Kingdom, Guangzhou Chimelong Safari Park, Chengdu's pandas and flexible pacing.",
      days: [
        {
          day: 'Day 1',
          title: 'Arrive in Hengqin or Zhuhai',
          description:
            "Arrive in Hengqin or Zhuhai and check into a resort-style hotel. Keep the day light with hotel pool time, kids' facilities and simple resort exploration.",
        },
        {
          day: 'Day 2',
          title: 'Chimelong Ocean Kingdom full day',
          description:
            "Spend the full day at Chimelong Ocean Kingdom. Suggested highlights include the Whale Shark Aquarium, dolphin or sea lion shows, children's play areas, selected thrill rides for older children, and the evening fireworks or light show.",
        },
        {
          day: 'Day 3',
          title: 'Chimelong Ocean Kingdom second visit at a slower pace',
          description:
            "Use the second park day to revisit children's favourite attractions and catch any shows missed on Day 2. Return to the hotel earlier for rest, swimming or water facilities.",
        },
        {
          day: 'Day 4',
          title: 'Travel to Guangzhou and Chimelong Safari Park',
          description:
            'Travel to Guangzhou and visit Chimelong Safari Park. This day is designed around wildlife experiences and a more family-friendly pace.',
        },
        {
          day: 'Day 5',
          title: 'Guangzhou to Chengdu',
          description:
            "Travel to Chengdu and check into the hotel. Spend the evening around Kuanzhai Alley for light local sightseeing and easy dining.",
        },
        {
          day: 'Day 6',
          title: 'Chengdu Sunac Land or Sunac Snow Park',
          description:
            "Choose Chengdu Sunac Land for theme park fun or Sunac Snow Park for an indoor snow experience. This day can be adjusted depending on children's ages and energy levels.",
        },
        {
          day: 'Day 7',
          title: 'Chengdu Panda Base and departure',
          description:
            'Visit Chengdu Panda Base in the morning, then keep the rest of the day flexible for city time, packing or departure.',
        },
      ],
      links: [
        { label: 'Family Travel', to: '/styles/family' },
        { label: 'Chengdu', to: '/destinations/chengdu' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      id: 'nature-scenery-china',
      title: 'Nature & Scenery China',
      route: 'Chengdu -> Jiuzhaigou/Huanglong -> Chongqing -> Zhangjiajie -> Guilin/Yangshuo',
      bestFor: 'Nature lovers who want dramatic landscapes and varied scenery',
      idealLength: '14 days',
      summary:
        "A scenery-rich itinerary combining pandas, Jiuzhaigou, Huanglong, Chongqing city views, Zhangjiajie's mountains, Guilin's rivers and Yangshuo's countryside.",
      days: [
        {
          day: 'Day 1',
          title: 'Arrive in Chengdu',
          description:
            'Arrive in Chengdu, transfer to the hotel and check in. Visit Kuanzhai Alley for a relaxed first evening with local food and light walking.',
        },
        {
          day: 'Day 2',
          title: 'Chengdu Panda Base and relaxed city time',
          description:
            'Visit Chengdu Panda Base in the morning. Keep the afternoon flexible for local food, teahouse culture or light city sightseeing.',
        },
        {
          day: 'Day 3',
          title: 'Jiuzhaigou',
          description:
            'Travel to Jiuzhaigou and settle into the hotel. The day should be planned with realistic transfer timing and a relaxed evening.',
        },
        {
          day: 'Day 4',
          title: 'Huanglong',
          description:
            'Visit Huanglong for colourful pools and alpine scenery. This is a scenic day with walking and mountain conditions, so pacing should be comfortable.',
        },
        {
          day: 'Day 5',
          title: 'Travel to Chongqing',
          description:
            'Travel to Chongqing. After arrival, explore Jiefangbei and visit Hongya Cave in the evening for night views.',
        },
        {
          day: 'Day 6',
          title: 'Chongqing city experiences',
          description:
            'Experience Chongqing city highlights, including Liziba light rail through the building, Yangtze River Cableway and Mountain City Trail. Finish with a hotpot dinner if suitable.',
        },
        {
          day: 'Day 7',
          title: 'Travel to Wulingyuan / Zhangjiajie',
          description:
            'Travel to the Wulingyuan or Zhangjiajie area and check into the hotel. Keep the evening simple to prepare for mountain sightseeing.',
        },
        {
          day: 'Day 8',
          title: 'Zhangjiajie core mountain scenery',
          description:
            "Explore Zhangjiajie's core mountain scenery, including Yuanjiajie or the Avatar Mountains area. Use cable car support and light hiking where suitable.",
        },
        {
          day: 'Day 9',
          title: 'Tianmen Mountain or Zhangjiajie Grand Canyon',
          description:
            'Choose Tianmen Mountain for the glass walkway and mountain road experience, or Zhangjiajie Grand Canyon for the glass bridge. The final choice depends on weather, energy and preferences.',
        },
        {
          day: 'Day 10',
          title: 'Travel to Guilin',
          description:
            'Travel to Guilin and check into the hotel. In the evening, enjoy the Two Rivers and Four Lakes night cruise.',
        },
        {
          day: 'Day 11',
          title: 'Guilin to Yangshuo Li River cruise',
          description:
            "Take the Li River cruise from Guilin to Yangshuo, approximately 4 hours. This is one of China's most classic landscape experiences.",
        },
        {
          day: 'Day 12',
          title: 'Yangshuo countryside',
          description:
            "Explore Yangshuo's countryside, including Ten-Mile Gallery by bike or electric scooter and Yulong River bamboo rafting for a quieter scenic experience.",
        },
        {
          day: 'Day 13',
          title: 'Longji Rice Terraces day trip',
          description:
            'Take a day trip to Longji Rice Terraces for layered mountain and village scenery. This adds a different landscape style to the itinerary.',
        },
        {
          day: 'Day 14',
          title: 'Departure',
          description:
            'Return for departure or continue onward depending on the final route and timing of the overall trip.',
        },
      ],
      links: [
        { label: 'Chengdu', to: '/destinations/chengdu' },
        { label: 'Destinations', to: '/destinations' },
        { label: 'China Tours from Australia', to: '/china-tours-from-australia' },
      ],
    },
    {
      id: 'family-theme-park-city-trip',
      title: 'Family Theme Park & City Trip',
      route: 'Beijing -> Shanghai',
      bestFor: 'School-holiday family trips, especially families who want major cities and theme parks',
      idealLength: '8 days',
      summary:
        "A compact family route combining Beijing's classic sights, Mutianyu Great Wall, Universal Beijing Resort, Shanghai city highlights, Disneyland and LEGOLAND.",
      days: [
        {
          day: 'Day 1',
          title: 'Beijing arrival',
          description:
            'Pickup from the airport or station and transfer to the hotel. After check-in, enjoy free time depending on arrival time, with the option to explore a local Beijing night market or nearby dining area.',
        },
        {
          day: 'Day 2',
          title: 'Tiananmen Square, Forbidden City and Temple of Heaven',
          description:
            "Visit Tiananmen Square, the Forbidden City and the Temple of Heaven. This day introduces Beijing's major cultural landmarks with private transfer support.",
        },
        {
          day: 'Day 3',
          title: 'Mutianyu Great Wall day trip',
          description:
            "Take a day trip to the Mutianyu section of the Great Wall, which is often a good option for families. The day can be paced around children's energy levels and weather conditions.",
        },
        {
          day: 'Day 4',
          title: 'Universal Beijing Resort',
          description:
            'Spend the full day at Universal Beijing Resort. This day is kept focused on the park so families do not need to rush between multiple attractions.',
        },
        {
          day: 'Day 5',
          title: 'Beijing to Shanghai',
          description:
            'Travel to Shanghai and check into the hotel. Visit Nanjing Road and enjoy the Bund night view in the evening.',
        },
        {
          day: 'Day 6',
          title: 'Shanghai Disneyland',
          description:
            'Spend the full day at Shanghai Disneyland. Timing can be planned around popular rides, shows, meals and rest breaks.',
        },
        {
          day: 'Day 7',
          title: 'LEGOLAND Shanghai',
          description:
            'Visit LEGOLAND Shanghai for a family-friendly theme park day, especially suitable for children and school-holiday trips.',
        },
        {
          day: 'Day 8',
          title: 'Yu Garden, City God Temple area and departure',
          description:
            'Visit Yu Garden and the City God Temple area for a lighter cultural and food-focused final day before departure.',
        },
      ],
      links: [
        { label: 'Beijing', to: '/destinations/beijing' },
        { label: 'Shanghai', to: '/destinations/shanghai' },
        { label: 'Family Travel', to: '/styles/family' },
      ],
    },
  ];

  const itineraryLengths = [
    {
      title: '7 to 8 days',
      text: 'Best for Beijing plus Shanghai, or for focusing on one main region without overloading the schedule.',
    },
    {
      title: '10 days',
      text: "A good range for Beijing, Xi'an and Shanghai, or a route such as Shanghai, Chengdu and Beijing.",
    },
    {
      title: '12 to 14 days',
      text: 'Usually better for families and multi-city private travel because it allows more practical pacing.',
    },
    {
      title: '15+ days',
      text: 'Suitable for slower travel, nature-heavy routes, or adding destinations such as Guilin, Zhangjiajie or Jiuzhaigou.',
    },
  ];

  const planningFactors = [
    'Trip length',
    'Travel season',
    "Children's ages",
    'Preferred pace',
    'Preferred cities',
    'Interests such as culture, food, nature, theme parks or local life',
  ];

  const smootherPoints = [
    'Airport and train station transfers',
    'Suitable hotel locations',
    'Realistic rail and driving times',
    'Private guides where useful',
    'Attraction timing',
    'Payment and app preparation',
    'Avoiding overly rushed city-hopping',
  ];

  const planningPrinciples = [
    'Share your dates, group size and interests',
    'We suggest route flow and pacing',
    'The sample itinerary is refined around your trip',
    'After deposit, detailed arrangements can be confirmed',
    'China-side services can include hotels, private guides, transfers, high-speed rail planning, tickets and local support',
  ];

  const toggleDetails = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo route={getSeoRoute('/itineraries')} />

      <section className="bg-white border-b border-slate-200 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
            <ShieldCheck size={14} /> Private China Itinerary Planning
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 serif tracking-tight text-slate-900">China Itineraries for Australians</h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed font-light">
            Explore sample China trip ideas designed for Australian travellers, including first-time routes, family-friendly journeys, nature-focused trips and private itineraries with flexible pacing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-emerald-900 text-white px-10 py-4 rounded-sm font-medium transition-all text-lg shadow-lg hover:bg-emerald-800"
            >
              Plan My China Itinerary
            </Link>
            <Link
              to="/destinations"
              className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-sm font-medium transition-all text-lg hover:bg-slate-50"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold serif text-emerald-900 mb-4">Quick Answer</h2>
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              A good China itinerary balances cities, realistic travel time, high-speed rail or domestic flights where appropriate, and the pace that suits your trip. VisitChina.au helps Australian travellers shape private China itineraries around dates, group size, travel style and day-to-day comfort.
            </p>
          </div>
          <div className="lg:col-span-4 bg-white border border-emerald-100 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
                <Sparkles className="text-emerald-300" size={24} />
              </div>
              <h3 className="font-bold text-lg leading-tight text-slate-900">What matters most</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Strong itineraries feel practical on the ground, with sensible city order, manageable pacing, and local logistics that support the trip rather than disrupt it.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex items-end justify-between gap-8 mb-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold serif mb-4 text-slate-900">Sample China Itinerary Ideas</h2>
            <p className="text-slate-600 leading-relaxed">
              These sample routes help Australian travellers see how a China trip could be structured before requesting a tailored quote or planning call.
            </p>
          </div>
          <Link to="/china-tours-from-australia" className="hidden lg:inline text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            China Tours from Australia
          </Link>
        </div>

        <div className="space-y-6">
          {sampleItineraries.map((trip) => (
            <article key={trip.id} className="bg-white border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    <h3 className="text-3xl font-bold serif text-slate-900 mb-4">{trip.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium rounded-full">
                        <MapPin size={12} className="text-emerald-700" /> {trip.route}
                      </span>
                      <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium rounded-full">
                        <Clock size={12} className="text-emerald-700" /> {trip.idealLength}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div className="bg-slate-50 border border-slate-200 p-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Best for</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{trip.bestFor}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Ideal length</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{trip.idealLength}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong className="text-slate-900">Summary:</strong> {trip.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-4 text-sm">
                      {trip.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-3">Why this route works</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      This sample keeps the route coherent, avoids unnecessary backtracking, and gives enough room for private transfers, rail or flight connections, and more comfortable daily pacing.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => toggleDetails(trip.id)}
                    className="sm:w-auto border-2 border-slate-200 text-slate-800 px-8 py-4 text-center font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    {expandedId === trip.id ? (
                      <>
                        <ChevronUp size={16} /> Hide Day-by-Day
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} /> View Day-by-Day
                      </>
                    )}
                  </button>
                  <Link
                    to="/contact"
                    className="sm:w-auto bg-emerald-900 text-white px-8 py-4 text-center font-bold hover:bg-emerald-800 transition-all shadow-xl text-sm uppercase tracking-widest flex items-center justify-center gap-3"
                  >
                    <MessageSquare size={18} /> Plan a Similar Trip
                  </Link>
                </div>
              </div>

              {expandedId === trip.id && (
                <div className="border-t border-slate-200 bg-slate-50 px-8 md:px-10 py-8 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h4 className="text-xl font-bold serif mb-6 flex items-center gap-3 text-slate-900">
                    <Compass className="text-emerald-800" size={20} /> Day-by-Day Outline
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {trip.days.map((item) => (
                      <div key={`${trip.id}-${item.day}`} className="bg-white border border-slate-200 p-5 shadow-sm">
                        <div className="flex gap-4 items-start">
                          <CheckCircle className="text-emerald-800 shrink-0 mt-0.5" size={18} />
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800 mb-1">{item.day}</p>
                            <h5 className="text-base font-bold text-slate-900 mb-2">{item.title}</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold serif mb-6 text-slate-900">How to Choose the Right China Itinerary</h2>
            <p className="text-slate-600 leading-relaxed">
              The right route depends on trip length, season, children's ages, preferred pace, the cities you most want to include, and whether your interests lean more toward culture, food, nature, theme parks, or local life.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold serif mb-6 text-slate-900">Key planning factors</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {planningFactors.map((factor) => (
                <li key={factor} className="flex gap-3 items-start">
                  <CheckCircle className="text-emerald-800 shrink-0 mt-0.5" size={16} />
                  <span className="text-sm text-slate-600">{factor}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link to="/destinations" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                Browse Destinations
              </Link>
              <Link to="/styles/family" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                Family Travel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Suggested Itinerary Lengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {itineraryLengths.map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold serif mb-4 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10">What Makes a China Itinerary Easier for Australians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {smootherPoints.map((point, index) => {
              const icons = [MapPin, Hotel, TrainFront, Users];
              const Icon = icons[index % icons.length];
              return (
                <div key={point} className="bg-white/5 border border-white/10 p-8">
                  <Icon className="text-emerald-400 mb-4" size={22} />
                  <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link to="/china-tours-from-australia" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              China Tours from Australia
            </Link>
            <Link to="/payment-help" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              China Payment Help
            </Link>
            <Link to="/visa-guide" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              China Visa Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold serif mb-6 text-slate-900">How VisitChina.au Customises Your Itinerary</h2>
            <p className="text-slate-600 leading-relaxed">
              Travellers usually begin by sharing their dates, group size, and interests. From there, we suggest route flow and pacing, refine the sample itinerary around the trip, and after deposit, detailed arrangements can be confirmed.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold serif mb-6 text-slate-900">Planning approach</h3>
            <ul className="space-y-4">
              {planningPrinciples.map((point) => (
                <li key={point} className="flex gap-3 items-start">
                  <CheckCircle className="text-emerald-800 shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-slate-600">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link to="/private-china-tours" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                Private China Tours
              </Link>
              <Link to="/styles/family" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                Family Travel
              </Link>
              <Link to="/contact" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold serif mb-4 text-slate-900">FAQs</h2>
          <p className="text-slate-600">Common questions about shaping a practical China itinerary from Australia.</p>
        </div>
        <div className="space-y-6">
          {ITINERARIES_FAQS.map((faq) => (
            <div key={faq.question} className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold serif mb-4 text-slate-900">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 serif">Plan a China Itinerary That Fits Your Trip</h2>
          <p className="text-emerald-100/60 text-xl mb-12 font-light leading-relaxed">
            Share your travel dates, group size, preferred cities, and travel style, and VisitChina.au can shape a tailored China itinerary idea around your route and pace.
          </p>
          <Link to="/contact" className="bg-emerald-500 text-emerald-950 px-12 py-5 font-bold shadow-2xl hover:bg-emerald-400 transition-all text-xl inline-block uppercase tracking-widest">
            Plan My China Itinerary
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Itineraries;
