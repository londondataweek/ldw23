function objectifyTsv(tableData: string) {
  const [headerString, ...objectValueStrings] = tableData
    .replaceAll('﻿', '')
    .replaceAll(/(\r\n){2}/g, 'BREAK')
    .split(/[\r\n]+/);
  const objectKeys = headerString.replaceAll(/[ ]/g, '').split('\t');
  const objectArray = createObjectArray(objectValueStrings, objectKeys);
  sortByDate(objectArray);
  return sortByDate(objectArray);
}

function createObjectArray(objectValueStrings: string[], objectKeys: string[]) {
  const returnArray: Array<Record<string, string>> = [];
  objectValueStrings.forEach((objectValueString) => {
    const newObject: Record<string, string> = makeNewObject(objectValueString.trim(), objectKeys);
    returnArray.push(newObject);
  });
  return returnArray;
}

function makeNewObject(objectValueString: string, objectKeys: string[]) {
  const valueArray = objectValueString.trim().split('\t');
  const returnObject: Record<string, string> = {};
  valueArray.forEach((value, index) => {
    returnObject[`${objectKeys[index]}`] = value.trim().replaceAll(',', ', ').replaceAll(',  ', ', ');
  });
  [returnObject.dayNumber, returnObject.monthNumber, returnObject.yearNumber] = returnObject.Date.split('/');
  const newDate = new Date(`${returnObject.monthNumber}/${returnObject.dayNumber}/${returnObject.yearNumber}`);
  const newDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(newDate);
  returnObject.dayName = newDay;
  const newMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(newDate);
  returnObject.monthName = newMonthName;
  const hasColon = returnObject.Name.includes(':');
  returnObject.title = hasColon ? `${returnObject.Name.split(':')[0]}:` : returnObject.Name;
  returnObject.subtitle = hasColon ? returnObject.Name.split(':')[1] : '';
  return returnObject;
}

function sortByDate(arrayOfObjects: Array<Record<string, string>>) {
  const sortedArray: Array<Array<Record<string, string>>> = [];
  arrayOfObjects.forEach((object) => {
    const [month, day] = object.Date.split('/');
    const number = Number(`${month}${day.padStart(2, '0')}`);
    if (sortedArray[number] === undefined) sortedArray[number] = [];
    sortedArray[number].push(object);
  });
  const sortedValues = Object.values(sortedArray);
  return sortedValues;
}

async function fetchData() {
  const response = await fetch('/ADDEVENTDATA/eventdata.tsv');
  const tsvData = await response.text();

  return objectifyTsv(tsvData.trim());
}

const hardData = `Name	Organiser	Date	Time	Location	EventType	Description	MoreInfo
AI and Sustainable Cities (Day 2)	The Alan Turing Institute, UCL, QMUL	4/7/2023	09:00 - 17:30	North West Wing, Lecture Theatre G22, WC1E 6BT	Public Conversations	This event a scoping workshop activity centred on the theme of ‘Cities’ that examines the role of data science and artificial intelligence in paving the way for sustainable cities. Speakers will be invited from academia, industry, and governmental authorities to present diverse efforts that aim to instigate sustainability in UK cities. Day 2 focuses on: Active Transport, Economics of Cities, and Sustainability in Cities.	https://www.eventbrite.co.uk/e/the-alan-turing-institute-ucl-qmul-ai-and-sustainable-cities-workshop-tickets-630674894587
Data Innovation in London	London Office of Technology and Innovation (LOTI)	3/7/2023	09:30 - 16:00	Museum of London	Public Conversations	Kicking off London Data Week, this event will convene data leaders, practitioners and enthusiasts from across the city for a daylong event highlighting London’s unique flavour of data innovation and looking forward to how data & technology can support creating a better London of tomorrow. Limited tickets are available - please fill out the following form to express your interest in attending the event.	https://forms.gle/euqQg9oFKSRMpyLh7
Statisticians for Society	The Royal Statistical Society	4/7/2023	10:00 - 16:00	RSS offices, Errol Street, EC1Y 8LX	Data Education	The RSS is putting on an event to bring together local London charities to explore ways in which data and statistical analysis can support their team’s objectives. Charities will be paired with expert statisticians to identify and scope projects that can be supported pro bono by the RSS Statisticians for Society initiative during and after the event. Charities interested in participating can express their interest at the link below.	https://rss.org.uk/training-events/events/events-2023/rss-events/statisticians-for-society-london-data-week/#fulleventinfo
3D Urban Models: Applications and Digital Twins	Centre for Urban Science and Progress (CUSP) London	4/7/2023	11:00 - 16:00	Online	Public Conversations	3D City models are becoming widespread in use for mapping and planning cities and for communicating data about cities to stakeholders. This workshop will cover a wide range of related topics including: model quality, model use, model production, new 3D visualization methods and future trends in VR, AR and Digital Twins. There will be a keynote session from NUS Singapore, a number of presentations from King's researchers and from Accucities Ltd., we will also have speakers from Ukraine working on the virtual reconstruction of lost historic buildings. The event is intended to be informal and to encourage discussion and generate new contacts among attendees.	https://www.eventbrite.co.uk/e/3d-urban-models-applications-and-digital-twins-tickets-657449387817 
Better Images of AI Workshop	Better Images of AI, London Office of Technology and Innovation (LOTI)	4/7/2023	15:00 - 17:00	Science Gallery London	Exhibits & Experiences	For this workshop, Better Images of AI will bring together artists and Machine Learning (ML) practitioners for a live showcase of the conversation and co-creation process that produces more accurate visual representations of data and ML content. You can also participate in the creation process - feel free to bring your own artistic materials, though a limited selection will be provided.	https://forms.gle/tjZMzoMkNWvVyEQC6
Data in the High Street	High Streets Data Service team	5/7/2023	10:00 - 17:00	32 Shoreditch High Street - Sook	Exhibits & Experiences	The High Streets Data Service team is planning a popup exhibition showcasing interesting data visualisations and interactive tools which are built using datasets available via the HSDS.The purpose is to celebrate the impact of the High Streets Data Service and partnership, inspire subscribers on how HSDS data can be used to impact policy & strategy, and share key policy-relevant insights on high streets present and future with resident audiences.	https://www.eventbrite.co.uk/e/data-in-the-high-street-a-london-data-week-pop-up-exhibition-tickets-642276324777
Look up: Visualising data about London	Applied Works	5/7/2023	11:00 - 13:00	Somerset House Strand London WC2R 1LA	Exhibits & Experiences	In this two-hour lively and creative session in and around Makerversity at Somerset House, explore how recording and visualising data can help us to better understand ourselves and the world around us. No previous data visualisation or design knowledge necessary. Tea, coffee and snacks included. Please note: Part of the workshop will take part outside, so please prepare for all weathers. Please arrive 10 minutes before the 11am start.	https://www.eventbrite.co.uk/e/look-up-visualising-data-about-london-london-data-week-tickets-667561904627?aff=oddtdtcreator
AI and Sustainable Cities (Day 1)	The Alan Turing Institute, UCL, QMUL	3/7/2023	10:30 - 17:30	1-19 Torrington Place, Lecture Theatre G12, WC1E 7HB	Public Conversations	This event a scoping workshop activity centred on the theme of ‘Cities’ that examines the role of data science and artificial intelligence in paving the way for sustainable cities. Speakers will be invited from academia, industry, and governmental authorities to present diverse efforts that aim to instigate sustainability in UK cities. Day 1 focuses on: Digital Twins and Liveability / Inequality.	https://www.eventbrite.co.uk/e/the-alan-turing-institute-ucl-qmul-ai-and-sustainable-cities-workshop-tickets-630674894587
AI: Who’s Looking After Me?	King’s College London	4/7/2023	10:30 - 17:30	Science Gallery London	Exhibits & Experiences	The Science Gallery, in collaboration with FutureEverything, is hosting a free exhibition and public events programme that takes a questioning, surprisingly, playful look at the way AI is already shaping many areas of our lives, and asks if we can rely on these technologies for our wellbeing and happiness. The exhibit runs from 21 June 2023 – 20 January 2024.	https://london.sciencegallery.com/ai-season
AI: Who’s Looking After Me?	King’s College London	5/7/2023	10:30 - 17:30	Science Gallery London	Exhibits & Experiences	The Science Gallery, in collaboration with FutureEverything, is hosting a free exhibition and public events programme that takes a questioning, surprisingly, playful look at the way AI is already shaping many areas of our lives, and asks if we can rely on these technologies for our wellbeing and happiness. The exhibit runs from 21 June 2023 – 20 January 2024.	https://london.sciencegallery.com/ai-season
AI: Who’s Looking After Me?	King’s College London	6/7/2023	10:30 - 17:30	Science Gallery London	Exhibits & Experiences	The Science Gallery, in collaboration with FutureEverything, is hosting a free exhibition and public events programme that takes a questioning, surprisingly, playful look at the way AI is already shaping many areas of our lives, and asks if we can rely on these technologies for our wellbeing and happiness. The exhibit runs from 21 June 2023 – 20 January 2024.	https://london.sciencegallery.com/ai-season
AI: Who’s Looking After Me?	King’s College London	7/7/2023	10:30 - 17:30	Science Gallery London	Exhibits & Experiences	The Science Gallery, in collaboration with FutureEverything, is hosting a free exhibition and public events programme that takes a questioning, surprisingly, playful look at the way AI is already shaping many areas of our lives, and asks if we can rely on these technologies for our wellbeing and happiness. The exhibit runs from 21 June 2023 – 20 January 2024.	https://london.sciencegallery.com/ai-season
AI: Who’s Looking After Me?	King’s College London	8/7/2023	10:30 - 17:30	Science Gallery London	Exhibits & Experiences	The Science Gallery, in collaboration with FutureEverything, is hosting a free exhibition and public events programme that takes a questioning, surprisingly, playful look at the way AI is already shaping many areas of our lives, and asks if we can rely on these technologies for our wellbeing and happiness. The exhibit runs from 21 June 2023 – 20 January 2024.	https://london.sciencegallery.com/ai-season
Geomob London	Geomob	5/7/2023	18:00	Geovation Hub	Public Conversations	Join geodata enthusiasts for a free event featuring community projects with an open data focus for London Data Week. This GeoMob features talks from the London Ambulance Service, on using open geospatial data to improve emergency response, and Lightbug, a UK company producing the 'smallest GPS trackers'.	https://thegeomob.com/post/july-5th-2023-geomoblon-details
PyData London Meetup	PyData London	4/7/2023	19:00 - 21:00	1 Angel Lane, EC4R 3AB	Public Conversations	Join the PyData London community for its 75th meetup. Express interest by RSVPing on their Meetup page.	https://www.meetup.com/pydata-london-meetup/events/292298566/
Time to stop living with it: An interactive breakfast workshop on bridging the gender inequality gap in healthcare	Profusion, Women in Data	6/7/2023	09:00 - 10:30	Profusion, Telephone House, Ground floor, 69-77 Paul Street, EC2A 4NW	Public Conversations	Women live longer than men, but live far fewer years in good health than men do. There is well documented gender inequality in healthcare which is impacting each and every one of us. It’s time to take control and stop just living with it, and data can be the answer! This interactive session will explore some of the challenges women face and give everyone a chance to share the things they would love us to use data to fix in women’s healthcare. All sexes very welcome – we need to hear from everyone! Every level of data understanding very welcome. Breakfast provided.	https://www.eventbrite.co.uk/e/womens-health-workshop-time-to-stop-living-with-it-tickets-665228806267 
ODI's 'in the pink' for London Data Week	The Open Data Institute	6/7/2023	11:00 - 20:00	Kings Place, Kings Cross, N1 9AG	Exhibits & Experiences	Join our team of researchers, the Director of the Data as Culture programme, Hannah Redler-Hawes, and artist Alistair Gentry’s DoxBox Trustbot - along with its Operator - on a day of live, immersive events and activities. You can join as many or as few sessions as you wish - they’re all free! Enjoy tea and pink biscuits as part of the deal. But places are limited so don’t delay! In our sessions, we’ll explore how people can get more involved in decisions about data and what they can do with that involvement - to improve the lives of all Londoners.	https://www.theodi.org/event/odis-in-the-pink-for-london-data-week/
Canalside Chat: In the pink? How art and data are driving London forwards	The Open Data Institute	6/7/2023	18:30 - 20:00	Kings Place, Kings Cross, N1 9AG	Exhibits & Experiences	We wrap up with one of our live Canalside Chat events, In the pink? How art and data is driving London forward. In this session, we’ll explore how people might participate more broadly in London’s data economy. We’ll ask what it might take to overcome barriers and increase trust and explore how new technologies, absurd humour, legislative and regulatory measures, and creative approaches could help.	https://www.theodi.org/event/odi-canalside-chats-in-the-pink-how-art-and-data-are-driving-london-forwards/
The Turing's Cabaret of Dangerous Ideas	The Alan Turing Institute	6/7/2023	19:00 - 21:30	The Camden Club	Exhibits & Experiences	What do you get if you combine top academics, contentious research and a comedian compère? Answer: the Cabaret of Dangerous Ideas (CoDI)! Join us at The Camden Club for a night of edgy, exciting AI and data science-based entertainment with a comedy twist. Adult content, suitable for 18+.	https://www.turing.ac.uk/events/turings-cabaret-dangerous-ideas-london
Health data equity in the age of genome editing	Crick AI Club (CrAIC), DSxHE	7/7/2023	17:30 - 19:00	The Francis Crick Institute - Cut and Paste Exhibition Gallery	Public Conversations	Genome editing promises to transform the way we tackle disease, however, it also threatens to promote healthcare inequalities. As we enter a world where genome editing and digital medicine collide, what role might our data play in the future of this technology? Join us for a discussion exploring this theme for London Data Week, set in the Francis Crick Institute's Cut + Paste exhibition on genome editing.	https://www.eventbrite.co.uk/e/crick-ai-club-craic-7th-of-july-2023-tickets-650703300087 
All the Docks	All the Docks	9/7/2023	All Day	All over London	Citizen Science	All The Docks is a cycling challenge where 5 teams visit all 800+ Santander Cycles Docking stations in one day. Along the way they will collect data on the road conditions across London that will be released as open data after the event. To get involved, you can register to join a cycling team, follow their progress on a live visualisation, or join for a final celebration after the event.	https://allthedocks.com/
Citi Map Data Collection Campaign	Citi Map	3/7/2023	All Day	All over London	Citizen Science	To contribute to an open dataset of poo, rubbish, and puddles, click below!	https://citimap.org/
Citi Map Data Collection Campaign	Citi Map	4/7/2023	All Day	All over London	Citizen Science	To contribute to an open dataset of poo, rubbish, and puddles, click below!	https://citimap.org/
Citi Map Data Collection Campaign	Citi Map	5/7/2023	All Day	All over London	Citizen Science	To contribute to an open dataset of poo, rubbish, and puddles, click below!	https://citimap.org/
Citi Map Data Collection Campaign	Citi Map	6/7/2023	All Day	All over London	Citizen Science	To contribute to an open dataset of poo, rubbish, and puddles, click below!	https://citimap.org/
Citi Map Data Collection Campaign	Citi Map	7/7/2023	All Day	All over London	Citizen Science	To contribute to an open dataset of poo, rubbish, and puddles, click below!	https://citimap.org/
Citi Map Data Collection Campaign	Citi Map	8/7/2023	All Day	All over London	Citizen Science	To contribute to an open dataset of poo, rubbish, and puddles, click below!	https://citimap.org/
Citi Map Data Collection Campaign	Citi Map	9/7/2023	All Day	All over London	Citizen Science	To contribute to an open dataset of poo, rubbish, and puddles, click below!	https://citimap.org/`;

export default async function eventData() {
  const dataObject = await fetchData();
  if (dataObject.length === 0) {
    return getHardData();
  }
  return dataObject;
}
export function getHardData() {
  return objectifyTsv(hardData);
}
