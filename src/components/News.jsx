import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Sara Moniuszko",
      title:
        "Leqembi, first Alzheimer's drug to slow disease, gets full FDA approval - CBS News",
      description:
        "Leqembi is not a cure, but it is the first drug shown to slow the progression of Alzheimer's disease. It first received an accelerated approval from the FDA earlier this year.",
      url: "https://www.cbsnews.com/news/first-alzheimers-drug-slow-disease-leqembi-gets-full-fda-approval/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/06/6155b273-0a87-4d22-97d4-b6aa87e83e74/thumbnail/1200x630/5904df83378be2beb3922f98d71ffa3c/fda-reuters.jpg?v=532947bbe7449b367b963713a282edbc",
      publishedAt: "2023-07-07T13:56:00Z",
      content:
        "The U.S. Food and Drug Administration on Thursday granted traditional approval to the Alzheimer's drug lecanemab, known by the brand name Leqembi, after an accelerated approval was issued earlier thi… [+5468 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Peter",
      title:
        "Early Amazon Prime Day deals in the US, the UK and Germany - GSMArena.com news - GSMArena.com",
      description:
        "Prime Day starts on July 11, but early deals are already available to subscribers to Amazon's premium service. Amazon’s Prime Day is almost here – the...",
      url: "https://www.gsmarena.com/early_amazon_prime_day_deals_in_the_us_the_uk_and_germany-news-59117.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/23/07/amazon-early-prime-day-deals/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2023-07-07T13:20:01Z",
      content:
        "Amazons Prime Day is almost here the shopping event will be held on July 11 and 12. However, if you have Prime already, you can jump right in with these early Prime Day deals.\r\nNote that we tried to … [+5903 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Josh Schafer",
      title:
        "June jobs report: US economy added 209,000 jobs in June as labor market cools - Yahoo Finance",
      description:
        "The June jobs report reflected a slowdown in the labor market from the prior month.",
      url: "https://finance.yahoo.com/news/june-jobs-report-july-7-2023-123312752.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/X.kIWeZH0EyQ2O9zgXTziQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/14c64e10-ffb4-11ed-bff5-17639fcebe18",
      publishedAt: "2023-07-07T12:57:34Z",
      content:
        "The US economy added 209,000 jobs in June, missing Wall Street estimates and reflecting a slowdown from the previous month, data from the Bureau of Labor Statistics showed Friday.\r\nEconomists surveye… [+2725 chars]",
    },
    {
      source: { id: null, name: "Motorsport.com" },
      author: "Megan White",
      title:
        "F1 British GP: Verstappen tops FP1 from Perez, Albon - Motorsport.com",
      description:
        "Max Verstappen led a Red Bull 1-2 in first practice for Formula 1's British Grand Prix, topping the session ahead of team-mate Sergio Perez.",
      url: "https://www.motorsport.com/f1/news/f1-british-gp-verstappen-tops-fp1-from-perez-albon/10492675/",
      urlToImage:
        "https://cdn-5.motorsport.com/images/amp/YKEOLpB0/s6/max-verstappen-red-bull-racing.jpg",
      publishedAt: "2023-07-07T12:47:48Z",
      content:
        "The Dutchman is hunting for his sixth consecutive win this weekend at Silverstone, a feat only completed by four other drivers, as he makes his 150th start for the reigning champions.\r\nDespite strugg… [+2596 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Family not believing apology in murder of Iowa Spanish teacher - KCRG-TV9: Your Trusted Local News Source",
      description:
        "For more Local News from KCRG:  https://www.kcrg.com/ For more YouTube Content: https://www.youtube.com/channel/UCVg0ul_tJm6uNvTmZxEtXJA",
      url: "https://www.youtube.com/watch?v=TUAgRBX5CY8",
      urlToImage: "https://i.ytimg.com/vi/TUAgRBX5CY8/maxresdefault.jpg",
      publishedAt: "2023-07-07T12:09:58Z",
      content: null,
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "2023 MLB Mock Draft: LSU's Dylan Crews keeps No. 1 position; Virginia's Kyle Teel could jump high schoolers - CBS Sports",
      description: "The 2023 draft begins Sunday, July 9",
      url: "https://www.cbssports.com/mlb/news/2023-mlb-mock-draft-lsus-dylan-crews-keeps-no-1-position-virginias-kyle-teel-could-jump-high-schoolers/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/07/05/ec024b6e-b947-41dc-aedc-47f1afc2b351/thumbnail/1200x675/ed42012b2209ac2c4bbe82249b6ecbba/crews-getty.png",
      publishedAt: "2023-07-07T11:00:51Z",
      content:
        "The 2023 MLB Draft is only a few days away. Two years ago MLB pushed the draft back from the first week of June to the All-Star break in an effort to better market the event and it will remain there … [+1574 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Joining the Western military alliance is a dream for Ukraine. But is it realistic? | DW News - DW News",
      description:
        "Will Ukraine get a path for joining the military defense alliance NATO? This is top of the agenda at the NATO summit in Vilnius. Some allies are pushing for ...",
      url: "https://www.youtube.com/watch?v=AuyqON46JcA",
      urlToImage: "https://i.ytimg.com/vi/AuyqON46JcA/maxresdefault.jpg",
      publishedAt: "2023-07-07T10:15:00Z",
      content: null,
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: "Ruth Carson, Yumi Teso, Garfield Reynolds",
      title:
        "Traders Brace for US Payrolls With Global Yields at 15-Year High - Bloomberg",
      description:
        "Bond investors are bracing for fresh signs of strength in the US labor market on Friday after Treasuries tanked on fears the Federal Reserve will hike interest rates higher than previously assumed.",
      url: "https://www.bloomberg.com/news/articles/2023-07-07/renewed-treasury-rout-catapults-global-yields-to-15-year-high",
      urlToImage:
        "https://assets.bwbx.io/s3/javelin/public/javelin/images/social-markets-3d32d2f713.jpg",
      publishedAt: "2023-07-07T10:10:59Z",
      content:
        "Bond investors are bracing for fresh signs of strength in the US labor market on Friday after Treasuries tanked on fears the Federal Reserve will hike interest rates higher than previously assumed. \r… [+225 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Sara Moniuszko",
      title:
        'How to avoid "traveler\'s tummy" on your next vacation, according to gut health experts - CBS News',
      description:
        "Bathroom trouble is the last thing you want to worry about when traveling. Here's how to avoid \"traveler's tummy,\" from diarrhea to constipation, with tips from gut health experts.",
      url: "https://www.cbsnews.com/news/how-to-avoid-travelers-tummy-diarrhea-constipation/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/05/02d32266-3b21-46f1-8c26-532ce6ef4835/thumbnail/1200x630/bc990982fac0c074fd4b35d588137fee/gettyimages-170614774.jpg?v=532947bbe7449b367b963713a282edbc",
      publishedAt: "2023-07-07T10:00:15Z",
      content:
        "Ever had your bathroom habits change a little — or a lot — during travel? You're not alone.\r\nOften referred to as \"traveler's tummy,\" it's common to experience disruptions to your digestion and bowel… [+2530 chars]",
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: null,
      title:
        "Russian Operator of Occupied Ukraine Reactor Disregards IAEA Advice to Shut Down - Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/news/articles/2023-07-07/russian-operator-of-occupied-ukraine-reactor-disregards-iaea-advice-to-shut-down",
      urlToImage: null,
      publishedAt: "2023-07-07T09:59:07Z",
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: { id: null, name: "Eurogamer.net" },
      author: "Victoria Kennedy",
      title:
        "Diablo 4 season 1 gets late July release date, brings new corrupted enemies and gear - Eurogamer.net",
      description:
        "Diablo 4's first season will go live on 20th July, with the promise of a new boss battle, questline and gear to get your hands on.",
      url: "https://www.eurogamer.net/diablo-4-season-1-gets-late-july-release-date-brings-new-corrupted-enemies-and-gear",
      urlToImage:
        "https://assetsio.reedpopcdn.com/diablo-4-worm-boys.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      publishedAt: "2023-07-07T09:57:23Z",
      content:
        "Diablo 4's first season will go live on 20th July, with the promise of a new boss battle, questline and gear to get your hands on. \r\nKnown as Season of the Malignant, this season will introduce the f… [+2565 chars]",
    },
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "Black Hole Unmasked: Astronomers Capture First Image of Accretion Ring and Relativistic Jet - SciTechDaily",
      description:
        "Scientists used new technology to produce an unprecedented image of both the accretion process and the jet of the Messier 87 black hole. Utilizing the GMVA, ALMA, and GLT, they've observed a larger ring-like structure and a broader radiation from the inner re…",
      url: "https://scitechdaily.com/black-hole-unmasked-astronomers-capture-first-image-of-accretion-ring-and-relativistic-jet/",
      urlToImage:
        "https://scitechdaily.com/images/Supermassive-Black-Hole-Powerful-Jet-Illustration.jpg",
      publishedAt: "2023-07-07T09:40:02Z",
      content:
        "ByChinese Academy of Sciences (CAS)July 7, 2023\r\nAstronomers have produced an image depicting both the accretion structure and the powerful relativistic jet of the black hole at the center of the Mes… [+8939 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "JOSH BOAK",
      title:
        "Biden launches new push to limit health care costs, hoping to show he can save money for families - Yahoo News",
      description:
        "President Joe Biden on Friday rolled out a new set of initiatives to reduce health care costs: a crackdown on scam insurance plans, new guidance to prevent...",
      url: "https://news.yahoo.com/biden-launches-push-limit-health-090218116.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/h5M8k.tIXpVDLaHI5iy7BA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/4cb13010953a95b4dc1dada01716b915",
      publishedAt: "2023-07-07T09:02:18Z",
      content:
        "WASHINGTON (AP) President Joe Biden on Friday rolled out a new set of initiatives to reduce health care costs: a crackdown on scam insurance plans, new guidance to prevent surprise medical bills and … [+2558 chars]",
    },
    {
      source: { id: null, name: "Kstp.com" },
      author: "Kyle Brown",
      title:
        "Federal study finds nearly half of US tap water contains PFAS - KSTP",
      description:
        "A U.S. Geological Survey study found at least 45% of the nation's tap water contains PFAS — and parts of Minnesota are among the most affected.",
      url: "https://kstp.com/kstp-news/top-news/federal-study-finds-nearly-half-of-us-tap-water-contains-pfas/",
      urlToImage:
        "https://kstp.com/wp-content/uploads/2023/03/tap-water-us-air-force-mgn.jpg",
      publishedAt: "2023-07-07T07:35:50Z",
      content:
        "Its a groundbreaking study into the presence of PFAS in tap water and private wells.\r\n“We actually focused on your glass that you drink, coming from your kitchen faucet, which is unique,” says Kelly … [+4062 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Italian retirement home fire in Milan leaves six dead and dozens hurt - BBC",
      description:
        "The fire was contained to one room but many of the residents suffered smoke inhalation.",
      url: "https://www.bbc.com/news/world-europe-66130854",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1702B/production/_130315249_a826308973a9a40ea2b561a3fa64eb575a170ae80_0_3984_22411000x563.jpg",
      publishedAt: "2023-07-07T07:10:20Z",
      content:
        "Six people have died and 81 others have been taken to hospital after a fire broke out in a room in a retirement home in the Italian city of Milan.\r\nThe alarm was raised in the early hours of Friday a… [+1267 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Lyric Li",
      title:
        "France's Macron floats blocking social media during riots - The Washington Post",
      description:
        "The French president accused social media platforms such as Snapchat, TikTok and Telegram of fueling recent riots over the fatal police shooting of a teenager.",
      url: "https://www.washingtonpost.com/world/2023/07/06/france-macron-social-media-block-riots/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LMQ7N5NQCTBFIRH6LNM7ZYB6EI.JPG&w=1440",
      publishedAt: "2023-07-07T06:08:00Z",
      content:
        "Comment on this story\r\nComment\r\nFrench President Emmanuel Macrons suggestion that the government might need the ability to block social media access during riots has sparked a backlash in the country… [+4622 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Britney Spears responds to Victor Wembanyama incident | SportsCenter - ESPN",
      description:
        "SportsCenter gives an update on the developing story involving Britney Spears filing a police report claiming she was struck by a member of Victor Wembanyama...",
      url: "https://www.youtube.com/watch?v=O2tpdSgUzCc",
      urlToImage: "https://i.ytimg.com/vi/O2tpdSgUzCc/maxresdefault.jpg",
      publishedAt: "2023-07-07T04:27:27Z",
      content: null,
    },
    {
      source: {
        id: "entertainment-weekly",
        name: "Entertainment Weekly",
      },
      author: "Lauren Huff",
      title:
        "Taylor Swift's new song 'When Emma Falls in Love' is (probably) about Emma Stone - Entertainment Weekly News",
      description:
        "Plus, why it's more of an ode to female friendship than love.",
      url: "https://ew.com/music/taylor-swift-when-emma-falls-in-love-emma-stone/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C14%2C2000%2C1014&poi=%5B420%2C493%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F07%2F06%2FEmma-Stone-and-Taylor-Swift-070623-02.jpg",
      publishedAt: "2023-07-07T04:00:00Z",
      content:
        "Drop everything now, and get out your best detective gear.\r\nA new Taylor Swift release in the form of her re-recorded album, Speak Now (Taylor's Version), means a new Easter egg hunt for fans.\r\nSince… [+4436 chars]",
    },
    {
      source: { id: null, name: "WDIV ClickOnDetroit" },
      author: "Mara MacDonald, Brandon Carr",
      title:
        "Community activists hold vigil to honor life of 2-year-old Wynter Cole Smith on Detroit's east side - WDIV ClickOnDetroit",
      description:
        "Community activists held a vigil to honor the life of 2-year-old Wynter Cole Smith.",
      url: "https://www.clickondetroit.com/news/local/2023/07/07/community-activists-hold-vigil-to-honor-2-year-old-wynter-cole-smith-on-detroits-east-side/",
      urlToImage:
        "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/07-07-2023/t_8071f54a8396419997122079ce220702_name_image.jpg?_a=ATAPphC0",
      publishedAt: "2023-07-07T02:25:15Z",
      content:
        "DETROIT Community activists held a vigil to honor the life of 2-year-old Wynter Cole Smith after her body was found dumped in an overgrown alley on Detroits east side Wednesday night.\r\nRaise your han… [+1606 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Kelsey Vlamis",
      title:
        "US official says 'exiled' Wagner boss Prigozhin may not have gone to Belarus at all — and may have used a body double to make it appear as though he fled Russia - Yahoo News",
      description:
        "A Pentagon official told The New York Times it appears Prigozhin has mostly been in Russia since the mutiny, noting the possibility of a body double.",
      url: "https://www.businessinsider.com/prigozhin-possibly-used-body-double-russia-whole-time-us-official-2023-7",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/tUE72esZ85ABIFk8iI8TJA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/business_insider_articles_888/288069d47f105b2e208f3a18142e90cf",
      publishedAt: "2023-07-07T01:44:00Z",
      content:
        "Wagner boss Yevgeny Prigozhin in 2017.SERGEI ILNITSKY/POOL/AFP via Getty Images\r\n<ul><li>Wagner boss Yevgeny Prigozhin was exiled to Belarus last month after staging an armed rebellion.\r\n</li><li>But… [+2115 chars]",
    },
  ];

  constructor() {
    super();

    this.state = {
      articles: this.articles,
      isLoading: false,
    };
  }

  render() {
    return (
      <div className="w-full">
        <h1 className="font-bold text-lg text-center m-4">
          NewsMonkey - Top Headlines{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {this.state.articles.map((elem) => {
          return (
              <NewsItem
                key={elem.url}
                title={elem.title}
                desc={elem.description}
                imgUrl={elem.urlToImage}
                url="https://www.cbsnews.com/news/first-alzheimers-drug-slow-disease-leqembi-gets-full-fda-approval/  "
              />
              );
            })}
          </div>
      </div>
    );
  }
}
