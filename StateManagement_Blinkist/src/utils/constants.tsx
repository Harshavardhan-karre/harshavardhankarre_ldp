import Header from "../components/molecules/Header/index.tsx";
// export const HeaderTabs= <Header tab1={"Currently Reading"} tab2={"Finished"} handleTab={(val)=>handleTab(val)}/>;
export const CardData = [
  {
    src: `${process.env.PUBLIC_URL}/assets/Book1.svg`,
    text: "Bring Your Human to Work",
    authText: "Erica Keswin",
    timeLeft: "13-min Read",
    ReadTexts: "1.9k Reads",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/Book2.svg`,
    text: "Employees to Entrepeneur",
    authText: "Steve Glaveski",
    timeLeft: "15-min Read",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/Book3.svg`,
    text: "Doesn't Hurt to Work",
    authText: "Trey Gowdy",
    timeLeft: "13-min Read",
    ReadTexts: "1.9k Reads",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/Book4.svg`,
    text: "The Fate of Food",
    authText: "Amanda Little",
    timeLeft: "12-min Read",
    ReadTexts: "16k Reads",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/Book5.svg`,
    text: "Lives of the Stoics",
    authText: "Ryan Holiday, Stephen Hansel",
    timeLeft: "13-min Read",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/Book6.svg`,
    text: "Loving Your Business",
    authText: "Debbie King",
    timeLeft: "13-min Read",
  },
];

export const Names=[
  "Currently Reading","Finished","My Library"
]

export const ImageLinks=[
  `${process.env.PUBLIC_URL}/assets/TimeIcon.svg`,`${process.env.PUBLIC_URL}/assets/ReadersCount.svg`,`${process.env.PUBLIC_URL}/assets/Rectangle.svg`
]