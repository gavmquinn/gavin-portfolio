// Single source of truth for all audio-department credits.
// Adding/removing an entry here automatically updates the credits page
// and the homepage's production-count stat.
// `month` is the sort key used to order entries within a year (latest
// month of the shoot range, 1-12) — it's independent of array order.
// `category` drives the filter buttons on the credits page — keep it
// to one of: Movie, TV Show, Short Film, Documentary, Commercial,
// Music Video, Social.
const CREDITS = [
  { year: 2026, month: 4, date: "Apr 2026", title: "Crowning At The Prom", category: "Movie", location: "Hamilton, ON", company: "NE Crowning at the Prom Productions ULC", role: "Sound Mixer", imdb: "tt42004395" },
  { year: 2026, month: 7, date: "Jun–Jul 2026", title: "The Christmas Feast", category: "Movie", location: "Hamilton, ON", company: "NE Christmas Eve Productions ULC", role: "Sound Mixer", imdb: null },
  { year: 2026, month: 5, date: "May 2026", title: "Bulges", category: "TV Show", location: "Hamilton, ON", company: "Bulges Inc.", role: "Sound Mixer", imdb: "tt43362271" },
  { year: 2026, month: 5, date: "May 2026", title: "Argos Media Day", category: "TV Show", location: "Waterloo, ON", company: "Superhuman Images Inc.", role: "Sound Mixer", imdb: null },
  { year: 2026, month: 5, date: "May 2026", title: "Sportsnet Marketing", category: "Commercial", location: "Toronto, ON", company: "Rogers Communications", role: "Sound Mixer", imdb: null },
  { year: 2026, month: 5, date: "May 2026", title: "Can I Come In", category: "Movie", location: "Toronto, ON", company: "CICI Film Inc.", role: "Sound Mixer", imdb: null },
  { year: 2026, month: 1, date: "Jan 2026", title: "My Highschool Sweetheart Just Died", category: "Movie", location: "Toronto, ON", company: "FCP Film Inc.", role: "Sound Mixer", imdb: null },
  { year: 2026, month: 7, date: "Jul 2026", title: "Haventree Bank", category: "Commercial", location: "Toronto, ON", company: "Fela Productions", role: "Sound Mixer", imdb: null, video: "https://youtu.be/uR6J4H2r6JM" },
  { year: 2026, month: 5, date: "May 2026", title: "Drake — 2 Hard 4 The Radio", category: "Music Video", location: "Toronto, ON", company: "Kid Studio", role: "Playback / A2", imdb: "tt42727252", video: "https://youtu.be/ESRCdJHbvnU" },
  { year: 2026, month: 3, date: "Mar 2026", title: "Royal Nannies", category: "Movie", location: "Hamilton, ON", company: "French Toast Films", role: "Sound Mixer", imdb: "tt42599178" },
  { year: 2026, month: 6, date: "Jun 2026", title: "Thank You Come Again", category: "Short Film", location: "Toronto, ON", company: null, role: "Sound Mixer", imdb: null },

  { year: 2025, month: 10, date: "Sep–Oct 2025", title: "America's Culinary Cup", category: "TV Show", location: "Etobicoke, ON", company: "Sagia Productions", role: "A2", imdb: "tt33362418", video: "https://youtu.be/jWH4BZS4iNU" },
  { year: 2025, month: 6, date: "May–Jun 2025", title: "Lice", category: "Movie", location: "Hamilton, ON", company: "French Toast Films", role: "Boom Operator", imdb: "tt37255755" },
  { year: 2025, month: 10, date: "Oct 2025", title: "FOX Sports WS Pregame Special", category: "TV Show", location: "Toronto, ON", company: "FOX Sports", role: "Sound Mixer", imdb: null },
  { year: 2025, month: 8, date: "Aug 2025", title: "H&S Beats Evolution Project", category: "Commercial", location: "Calgary, AB", company: "Sequoia Productions", role: "Sound Mixer", imdb: null, video: "https://youtu.be/xErvf5nat4Y" },
  { year: 2025, month: 8, date: "Aug 2025", title: "Doc", category: "TV Show", location: "Hamilton, ON", company: "Idaho Productions Ltd.", role: "Daily Boom Operator", imdb: "tt26748321" },
  { year: 2025, month: 7, date: "Jul 2025", title: "I Will Find You", category: "TV Show", location: "Toronto, ON", company: "Quartz Productions", role: "Daily Boom Operator", imdb: "tt34771210" },
  { year: 2025, month: 7, date: "Jul 2025", title: "Killer Clues / How to Hire a Hitman", category: "TV Show", location: "Hamilton, ON", company: "Shadow Pine Productions", role: "Sound Mixer", imdb: null },
  { year: 2025, month: 5, date: "May 2025", title: "Holt Renfrew X Function", category: "Commercial", location: "Toronto, ON", company: "Made By Plot", role: "Sound Mixer", imdb: null },
  { year: 2025, month: 4, date: "Mar–Apr 2025", title: "Fake Yourself a Merry Little Christmas", category: "Movie", location: "Hamilton, ON", company: "Neshama Entertainment", role: "Sound Mixer", imdb: "tt38126406", video: "https://youtu.be/uvVxOjGQ6pA" },
  { year: 2025, month: 1, date: "Jan 2025", title: "Savvy Sheldon Feels Good as Hell", category: "Movie", location: "Hamilton, ON", company: "Neshama Entertainment", role: "Boom Operator", imdb: "tt35002927" },

  { year: 2024, month: 7, date: "Jun–Jul 2024", title: "The Memory Keeper", category: "Movie", location: "London, ON", company: "Falsehood Pictures Inc.", role: "Sound Mixer", imdb: "tt22640460", video: "https://youtu.be/kaD_docBDDo" },
  { year: 2024, month: 8, date: "Aug 2024", title: "Macy Murdoch S2", category: "TV Show", location: "Toronto, ON", company: "Shaftesbury Digital III Inc.", role: "Sound Mixer", imdb: "tt27251194", video: "https://youtu.be/jFigslfiuKU" },
  { year: 2024, month: 11, date: "Nov 2024", title: "Dateless to Dangerous", category: "Movie", location: "Hamilton, ON", company: "Neshama Entertainment", role: "Sound Mixer", imdb: "tt34555664", video: "https://youtu.be/qPxlz-VctKo" },
  { year: 2024, month: 9, date: "Sep 2024", title: "Maple Leafs Media Day", category: "Social", location: "Toronto, ON", company: "Superhuman Images Inc.", role: "Sound Mixer", imdb: null },
  { year: 2024, month: 7, date: "Jun–Jul 2024", title: "Love Potion", category: "Movie", location: "Hamilton, ON", company: "Neshama Entertainment", role: "Sound Mixer", imdb: null },
  { year: 2024, month: 10, date: "Oct 2024", title: "Food52 Episode", category: "Social", location: "St. Catharines, ON", company: "Food52", role: "Sound Mixer", imdb: null },
  { year: 2024, month: 10, date: "Oct 2024", title: "One Voice, One Team", category: "Commercial", location: "Brampton, ON", company: "Nexus Communications North America", role: "Sound Mixer", imdb: null },
  { year: 2024, month: 10, date: "Oct 2024", title: "Gowling", category: "Commercial", location: "Waterloo, ON", company: "Nexus Communications North America", role: "Sound Mixer", imdb: null },
  { year: 2024, month: 9, date: "Sep 2024", title: "She Was Murdered In My House", category: "Movie", location: "Toronto, ON", company: "Superhuman Images Inc.", role: "Boom Operator", imdb: null },
  { year: 2024, month: 9, date: "Sep 2024", title: "FriendSHIP", category: "Social", location: "Toronto, ON", company: "Merchant", role: "Sound Mixer", imdb: null, video: "https://youtu.be/mdH6nCN1Wzo" },
  { year: 2024, month: 9, date: "Sep 2024", title: "Enna Nu Rehna Sehna Nai Aunda", category: "Movie", location: "Brampton, ON", company: "Qultr Motion Pictures", role: "Sound Mixer", imdb: "tt33044546", video: "https://youtu.be/QpKpz81alZ8" },
  { year: 2024, month: 9, date: "Aug–Sep 2024", title: "Ordinary Girl in a Tiara", category: "Movie", location: "Hamilton, ON", company: "NE OGIAT Productions ULC", role: "Boom / Mixer", imdb: "tt33362130" },
  { year: 2024, month: 8, date: "Aug 2024", title: "Legacy Assets BHP", category: "Commercial", location: "Elliot Lake, ON", company: "Barbershop Films", role: "Sound Mixer", imdb: null },
  { year: 2024, month: 5, date: "May 2024", title: "Her Last Supper", category: "Movie", location: "Toronto, ON", company: "Her Last Supper Productions Inc.", role: "Boom Operator", imdb: "tt32056451" },
  { year: 2024, month: 4, date: "Apr 2024", title: "My Husbands Mistress", category: "Movie", location: "Hamilton, ON", company: "MHM Productions Inc.", role: "Sound Mixer / Boom", imdb: "tt32048472", video: "https://youtu.be/LOJmBXSaP6U" },
  { year: 2024, month: 3, date: "Feb–Mar 2024", title: "Gentle Barbarians", category: "Movie", location: "Mississauga, ON", company: "Luna Reel Productions Inc.", role: "Sound Mixer", imdb: "tt33039641", video: "https://youtu.be/eBr7HiH92VU" },

  { year: 2023, month: 12, date: "Nov–Dec 2023", title: "Morningside", category: "Movie", location: "Scarborough, ON", company: "Augusta Avenue Productions", role: "Sound Mixer", imdb: "tt24666718", video: "https://youtu.be/n2w5aQmHvhY" },
  { year: 2023, month: 11, date: "Oct–Nov 2023", title: "The Love Club S2", category: "Movie", location: "Hamilton, ON", company: "Nikki Ray Media", role: "Sound Mixer", imdb: "tt19896920" },
  { year: 2023, month: 10, date: "Oct 2023", title: "Nissan Social", category: "Commercial", location: "Mississauga, ON", company: "Angle Media Group", role: "Sound Mixer", imdb: null },
  { year: 2023, month: 10, date: "Oct 2023", title: "Frogs", category: "Short Film", location: "Warkworth, ON", company: "Molly Shears Productions", role: "Sound Mixer", imdb: null },
  { year: 2023, month: 8, date: "Aug 2023", title: "Move In", category: "Short Film", location: "Markham, ON", company: "Decorum", role: "Sound Mixer", imdb: "tt28862680" },
  { year: 2023, month: 7, date: "Jul 2023", title: "Homes Pro Corporate", category: "Commercial", location: "Markham, ON", company: "Libalula", role: "Sound Mixer", imdb: null },
  { year: 2023, month: 6, date: "Jun 2023", title: "Revved Up Recaps", category: "Commercial", location: "Toronto, ON", company: "Spin Master Corp.", role: "Sound Mixer", imdb: null, video: "https://youtu.be/__O1gisImLM" },
  { year: 2023, month: 6, date: "Jun 2023", title: "How To Fall in Love at Christmas", category: "Movie", location: "Hamilton, ON", company: "CME Winter Productions Inc.", role: "Sound Mixer", imdb: "tt29144851" },
  { year: 2023, month: 5, date: "May 2023", title: "Dinner Party (Working Title)", category: "Movie", location: "Toronto, ON", company: "Autograph Communications Inc.", role: "Sound Mixer", imdb: "tt31806236" },
  { year: 2023, month: 5, date: "Apr–May 2023", title: "J'adore New York", category: "Movie", location: "Hamilton, ON", company: "CME Winter Productions Inc.", role: "Sound Mixer", imdb: null },
  { year: 2023, month: 3, date: "Mar 2023", title: "Swept Up In Christmas", category: "Movie", location: "Hamilton, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: null },
  { year: 2023, month: 2, date: "Feb 2023", title: "Subaru Customer Stories", category: "Commercial", location: "Niagara, ON", company: "Zulubot Inc.", role: "Sound Mixer", imdb: null },
  { year: 2023, month: 1, date: "Jan 2023", title: "Christmas Casanova", category: "Movie", location: "Hamilton, ON", company: "CME Autumn Productions Inc.", role: "Sound Mixer", imdb: "tt27728751" },

  { year: 2022, month: 11, date: "Nov 2022", title: "Giving Hope: The Ni'Cola Mitchell Story", category: "Movie", location: "Hamilton, ON", company: "CME Autumn Productions Inc.", role: "Boom Op", imdb: null },
  { year: 2022, month: 11, date: "Nov 2022", title: "Sounds Black", category: "Documentary", location: "Toronto, ON", company: "CBF Productions Inc.", role: "Sound Mixer", imdb: null },
  { year: 2022, month: 10, date: "Oct 2022", title: "Macy Murdoch", category: "TV Show", location: "Toronto, ON", company: "Shaftesbury Digital III Inc.", role: "Boom Operator", imdb: "tt27251194" },
  { year: 2022, month: 10, date: "Oct 2022", title: "A Year In Film", category: "Documentary", location: "Toronto, ON", company: "Hollywood Suite", role: "Sound Mixer", imdb: null },
  { year: 2022, month: 9, date: "Sep 2022", title: "Pawsitively Perfect", category: "Movie", location: "Hamilton, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: null },
  { year: 2022, month: 9, date: "Sep 2022", title: "Pairs Well With Love", category: "Movie", location: "Hamilton, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator, Sound Mixer", imdb: null },
  { year: 2022, month: 8, date: "Aug 2022", title: "Warrior Strong", category: "Movie", location: "Sault Ste-Marie, ON", company: "Darius-Warrior Productions Inc.", role: "Boom Operator, Sound Mixer", imdb: null },
  { year: 2022, month: 8, date: "Aug 2022", title: "One In A Million", category: "Movie", location: "Hamilton, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: null },
  { year: 2022, month: 8, date: "May & Aug 2022", title: "The Love Club 1/2/4", category: "Movie", location: "Hamilton, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: "tt19896920" },
  { year: 2022, month: 7, date: "Jul 2022", title: "Royally In Love", category: "Movie", location: "Toronto, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: null },
  { year: 2022, month: 5, date: "May 2022", title: "Wedding Wars", category: "Movie", location: "Toronto, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: null },
  { year: 2022, month: 3, date: "Mar 2022", title: "Christmas On The Rocks", category: "Movie", location: "Toronto, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: "tt23873758" },
  { year: 2022, month: 3, date: "Mar 2022", title: "Fashionably Date", category: "Movie", location: "Toronto, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: null },
  { year: 2022, month: 3, date: "Mar 2022", title: "The Christmas Switch", category: "Movie", location: "Toronto, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: null },
  { year: 2022, month: 3, date: "Mar 2022", title: "Luck Strikes In Winter", category: "Movie", location: "Hamilton, ON", company: "CME Autumn Productions Inc.", role: "Boom Operator", imdb: null },

  { year: 2021, month: 11, date: "Jan–Mar 2020, Oct–Nov 2021", title: "Santa Claus The Serial Killer", category: "Documentary", location: "GTA, ON", company: "Forest (We Are Forest) Productions", role: "Boom Op", imdb: "tt16587970" },
  { year: 2021, month: 11, date: "Apr / Nov 2021", title: "Imposters Sin Room", category: "Short Film", location: "Toronto, ON", company: "AKA Films", role: "Audio Mixer", imdb: null },
  { year: 2021, month: 9, date: "Sep 2021", title: "Ted X", category: "Social", location: "Toronto, ON", company: "Toronto Sound", role: "Sound Mixer", imdb: null },
  { year: 2021, month: 8, date: "Aug 2021", title: "Most of the Time We Are Just Waiting!", category: "Movie", location: "Toronto, ON", company: "Molly Shears Productions", role: "Mixer", imdb: "tt18936270" },
  { year: 2021, month: 7, date: "Jul 2021", title: "To Do List", category: "Commercial", location: "Toronto, ON", company: "Brand New School", role: "Boom Operator", imdb: null },

  { year: 2020, month: 9, date: "Sep 2020", title: "Topline", category: "TV Show", location: "Toronto, ON", company: "Shaftesbury Digital III Inc.", role: "Boom Operator", imdb: "tt16390628" },

  { year: 2019, month: 7, date: "Jul 2019", title: "Middle of Nowhere", category: "Short Film", location: "Tobermory, ON", company: "Molly Shears Productions", role: "Audio Mixer", imdb: "tt11095494" },

  { year: 2018, month: 8, date: "Jun–Aug 2018", title: "Carrots", category: "Short Film", location: "Toronto, ON", company: "Molly Shears Productions", role: "Lead Audio Engineer, Boom Op", imdb: "tt9733168" },

  { year: 2017, month: 12, date: "2015–2017", title: "Survivor (US Series)", category: "TV Show", location: "Cambodia, Fiji", company: "SEG", role: "Audio Assist", imdb: "tt0239195" },

  { year: 2016, month: 9, date: "Sep 2016", title: "Scotiabank - Heroes of Hockey Day", category: "Commercial", location: "Brampton, ON", company: "The Mark Studios", role: "A2", imdb: null }
];
