import React from "react";
import FaqItem from "./FaqItem";

// load assets
import "./faq.css";

const faqData = [
  {
    status: "ok",
    totalResults: 7,
    articles: [
      {
        id: "1",
        source: { id: null, name: "Forbes" },
        author:
          "Yue Wang, Senior Contributor, \n Yue Wang, Senior Contributor\n https://www.forbes.com/sites/ywang/",
        title:
          "30 Under 30 Asia: Meet The Entrepreneurs Innovating In Sectors From EVs To Agritech",
        description:
          "Entrepreneurs on the Industry, Manufacturing & Energy list are seizing opportunities and modernizing sectors including transportation and agriculture.",
        url: "https://www.forbes.com/sites/ywang/2024/05/15/30-under-30-asia-meet-the-entrepreneurs-innovating-in-sectors-from-evs-to-agritech/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/66368975ed4ff82a58c01b95/0x0.jpg?format=jpg&crop=1200,675,x0,y112,safe&height=900&width=1600&fit=bounds",
        publishedAt: "2024-05-15T21:12:03Z",
        content:
          "Forbes 30 Under 30 Asia\r\nAs electric vehicles dominate energy transition conversations worldwide, young entrepreneurs on the Forbes 30 Under 30 Asia: Industry, Manufacturing &amp; Energy list are ide… [+5560 chars]",
      },
      {
        id: "2",
        source: { id: null, name: "BusinessLine" },
        author: "Janaki Krishnan",
        title:
          "Agritech startups are attracting funds with their innovative disruptive technologies",
        description:
          "Discover the booming agritech startup scene in India, disrupting agriculture with innovative solutions and attracting billions in funding.",
        url: "https://www.thehindubusinessline.com/economy/agri-business/agritech-startups-are-attracting-funds-with-their-innovative-disruptive-technologies/article68198988.ece",
        urlToImage:
          "https://bl-i.thgim.com/public/incoming/lzw0uj/article67187764.ece/alternates/LANDSCAPE_1200/IMG_BL15_Agritech_tomato_2_1_T5A5ANIS.jpg",
        publishedAt: "2024-05-21T09:01:27Z",
        content:
          "Funding is pouring in, for agritech startups, that are disrupting farming and agriculture in the country, with innovative solutions ranging from supply chain for agribusiness, marketplaces for connec… [+2772 chars]",
      },
      {
        id: "3",
        source: { id: null, name: "BusinessLine" },
        author: "Reuters",
        title: "Space data fuels agriculture innovation drive",
        description:
          "Indian farmers boost profits with satellite data, transforming agriculture in India, with potential for global impact.",
        url: "https://www.thehindubusinessline.com/economy/agri-business/space-data-fuels-agriculture-innovation-drive/article68185262.ece",
        urlToImage:
          "https://bl-i.thgim.com/public/incoming/9aynd5/article68185456.ece/alternates/LANDSCAPE_1200/paddy_workers02.jpg",
        publishedAt: "2024-05-17T07:30:33Z",
        content:
          "Bengaluru \r\nLokeswara Reddy, a farmer with two decades of experience, has seen his crops flourish after lean years, thanks to earth-observation satellites.\r\nShifting climate patterns, high input cost… [+4260 chars]",
      },
      {
        id: "4",
        source: { id: "the-times-of-india", name: "The Times of India" },
        author: "PTI",
        title:
          "Agritech startup Superplum raises $15 million from investors to expand fresh fruits business",
        description:
          "Superplum has built a direct-from-farm produce supply chain, using proprietary technology and cold-chain infrastructure to fundamentally improve how produce is grown and brought to market.",
        url: "https://economictimes.indiatimes.com/tech/funding/agritech-startup-superplum-raises-15-million-from-investors-to-expand-fresh-fruits-business/articleshow/109875905.cms",
        urlToImage:
          "https://img.etimg.com/thumb/msid-109875941,width-1200,height-630,imgsize-25636,overlay-ettech/photo.jpg",
        publishedAt: "2024-05-06T06:27:11Z",
        content:
          "Agritech startup Superplum, which sells premium fresh fruits, on Monday said it has raised $15 million from investors to expand its business. The company said it has completed the Series A funding ro… [+2667 chars]",
      },
      {
        id: "5",
        source: { id: null, name: "Marketscreener.com" },
        author: null,
        title: "Space data fuels India's farming innovation drive",
        description:
          "(marketscreener.com) Lokeswara Reddy, an Indian\nfarmer with two decades of experience, has seen his crops\nflourish after lean years, thanks to earth-observation\nsatellites.\n Shifting climate patterns, high input costs, a scarcity of\nlabour and erratic weather…",
        url: "https://www.marketscreener.com/quote/index/S-P-GSCI-AGRICULTURE-INDE-46869256/news/Space-data-fuels-India-s-farming-innovation-drive-46753677/",
        urlToImage:
          "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
        publishedAt: "2024-05-17T01:38:14Z",
        content:
          "BENGALURU, May 17 (Reuters) - Lokeswara Reddy, an Indian\r\nfarmer with two decades of experience, has seen his crops\r\nflourish after lean years, thanks to earth-observation\r\nsatellites.\r\nShifting clim… [+4525 chars]",
      },
      {
        id: "6",
        source: { id: "the-times-of-india", name: "The Times of India" },
        author: "ETtech",
        title:
          "Agritech firm Poshn raises $4 million in funding led by Prime Ventures Partners, Zephyr Peacock",
        description:
          "Agritech firm Poshn will use the capital to build its innovative stack of solutions that address the gaps in the system, and expand to global markets with imports and exports in profitable categories to Southeast Asia and the Middle East.",
        url: "https://economictimes.indiatimes.com/tech/funding/agritech-firm-poshn-raises-4-million-in-funding-led-by-prime-ventures-partners-zephyr-peacock/articleshow/109873977.cms",
        urlToImage:
          "https://img.etimg.com/thumb/msid-109874056,width-1200,height-630,imgsize-596484,overlay-ettech/photo.jpg",
        publishedAt: "2024-05-06T05:34:23Z",
        content:
          "Agritech company Poshn said it has raised $4 million in equity and $2 million in debt in a pre-Series A funding round led by Prime Venture Partners and Zephyr Peacock India.The startup plans to use t… [+2786 chars]",
      },
      {
        id: "7",
        source: { id: null, name: "Mit.edu" },
        author: "Maria Iacobo | School of Architecture and Planning",
        title: "MITdesignX in Dubai",
        description:
          "MIT is extending its ethos with a series of workshops in Dubai. MITdesignX offers a framework for startups to advance their commercial aims, engage with one another, and gain added value from hosting MIT student interns.",
        url: "https://news.mit.edu/2024/mitdesignx-dubai-0430",
        urlToImage:
          "https://news.mit.edu/sites/default/files/images/202404/Gilad-interns.jpg",
        publishedAt: "2024-04-30T19:00:00Z",
        content:
          "MIT has nurtured and celebrated its entrepreneurial culture for decades, with programs and courses supporting innovative startups. MITdesignX the venture accelerator founded in 2016 in the School of … [+8307 chars]",
      },
    ],
  },
];

const Faq = () => {
  return (
    <div style={{ paddingRight: "80px", paddingLeft: "80px" }}>
      <div className="faq-section">
        <h2 className="title">Agritech Startup News in India</h2>
        {faqData[0].articles.map((item, key) => {
          return <FaqItem key={key} faqItem={item} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
