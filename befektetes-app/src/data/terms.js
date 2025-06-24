const terms = [
  {
    "ETF (Exchange Traded Fund)": {
      description:
        "An investment fund composed of multiple stocks that can be purchased as a single stock.",
      related: ["VUSA ETF (Vanguard S&P 500)", "Diversification", "Funds"],
    },
    "VUSA ETF (Vanguard S&P 500)": {
      description:
        "Includes shares of the 500 largest U.S. companies, e.g., Apple, Microsoft, Tesla, Amazon.",
      related: [
        "ETF (Exchange Traded Fund)",
        "Portfolio Composition",
        "Sector Weighting",
      ],
    },
    "ETF Benefits (Diversification)": {
      description:
        "An ETF contains many stocks, reducing risk. It provides stable long-term returns (8-10% annually).",
      related: ["ETF (Exchange Traded Fund)", "Risk Management"],
    },
    "Portfolio Composition (Holdings, Assets)": {
      description:
        "Shows the percentage of the ETF's money invested in individual companies. For example, Apple makes up 6.97% of VUSA, so if Apple performs well, VUSA increases too.",
      related: ["VUSA ETF (Vanguard S&P 500)", "Sector Weighting"],
    },
    "Sector Weighting": {
      description:
        "Shows the industries the ETF is invested in. For example, VUSA is dominated by the tech sector (31.97%). If tech drops, the ETF value also falls.",
      related: ["Portfolio Composition", "Market Trends"],
    },
    "Costs (TER - Total Expense Ratio)": {
      description:
        "The maintenance cost of an ETF, usually 0.05–0.2%. For example, VUSA has a TER of 0.07%, which is low.",
      related: ["ETF (Exchange Traded Fund)"],
    },
    "Market Valuation Metrics (P/E, P/B, P/S etc.)": {
      description:
        "These ratios are monitored for both stocks and ETFs. For ETFs, you get the average values of the underlying companies.",
      related: [
        "P/E (Price/Earnings)",
        "P/B (Price/Book)",
        "P/S (Price/Sales)",
      ],
    },
    "P/E (Price/Earnings)": {
      description:
        "Compares the stock price to the earnings per share. • High (30+) → Expensive stock, growth expected. • Low (10–20) → Possibly undervalued, but check industry average.",
      related: ["PEG Ratio", "P/B (Price/Book)", "P/S (Price/Sales)"],
    },
    "P/B (Price/Book)": {
      description:
        "Compares the stock price to the company's assets. • Below 1 → Assets are worth more, could be undervalued. • Above 1 → Market expects growth.",
      related: ["P/S (Price/Sales)", "P/E (Price/Earnings)"],
    },
    "P/S (Price/Sales)": {
      description:
        "Compares the stock price to the company's revenue. • Below 1 → Cheap relative to revenue. • 10+ → High growth expectation, riskier.",
      related: ["P/B (Price/Book)", "P/E (Price/Earnings)"],
    },
    "PEG Ratio (Price/Earnings to Growth)": {
      description:
        "P/E divided by growth rate. • Below 1 → Cheap relative to future growth. • Above 1 → Can be acceptable for fast-growing companies.",
      related: ["P/E (Price/Earnings)", "Growth Stocks"],
    },
    "Stock Valuation: Expensive or Cheap?": {
      description:
        "• High P/E may indicate an expensive stock. • P/B below 1 may signal undervaluation. • Low P/S suggests the stock is cheap compared to revenue.",
      related: [
        "P/E (Price/Earnings)",
        "P/B (Price/Book)",
        "P/S (Price/Sales)",
      ],
    },
    "What Does Growth Rate Tell Us?": {
      description:
        "• PEG below 1 is a good sign → High growth justifies the price. • High PEG may indicate overvaluation of growth expectations.",
      related: ["PEG Ratio", "P/E (Price/Earnings)"],
    },
    "Risk and Stability": {
      description:
        "• High P/E, P/B, and P/S may mean higher risk. • High company debt adds extra risk.",
      related: [
        "P/E (Price/Earnings)",
        "P/B (Price/Book)",
        "P/S (Price/Sales)",
      ],
    },
    "When Is a Stock a Good Buy?": {
      description:
        "• Low P/E with stable growth. • Low P/B and P/S without a downtrend. • PEG Ratio under 1 can indicate a good buying opportunity.",
      related: ["Stock Valuation: Expensive or Cheap?", "Market Trends"],
    },
    "Capital Gain": {
      description:
        "The profit made when selling a stock or other asset for more than it was purchased.",
      related: ["Capital Loss", "ROI (Return on Investment)"],
    },
    "IPO (Initial Public Offering)": {
      description:
        "The process by which a company goes public, selling shares on the stock exchange for the first time.",
      related: ["Securities Market", "Stock Valuation: Expensive or Cheap?"],
    },
    "Volatility": {
      description:
        "The degree of price fluctuation over a period of time. Higher volatility means higher risk.",
      related: ["Capital Gain", "Capital Loss"],
    },
    "EPS (Earnings Per Share)": {
      description:
        "Shows how much profit a company makes per share. High EPS is a positive sign.",
      related: ["P/E Ratio", "ROE (Return on Equity)"],
    },
    "ROE (Return on Equity)": {
      description:
        "Indicates how efficiently a company uses shareholder equity to generate profit.",
      related: ["ROI (Return on Investment)", "EPS (Earnings Per Share)"],
    },
    "ROI (Return on Investment)": {
      description:
        "Measures how efficiently a given investment generates profit, expressed as a percentage.",
      related: ["ROE (Return on Equity)", "Capital Gain"],
    },
    "Bond": {
      description:
        "A debt instrument that pays regular interest to investors.",
      related: ["Securities Market", "Effect of Interest Rate Hikes"],
    },
    "Capital Loss": {
      description:
        "When an investment loses value and is sold for less than it was bought for.",
      related: ["Capital Gain", "Volatility"],
    },
    "Securities Market": {
      description:
        "The marketplace where investors trade securities like stocks and bonds.",
      related: ["IPO (Initial Public Offering)", "Day Trading"],
    },
    "Day Trading": {
      description:
        "A strategy where a trader buys and sells securities within the same day to make a profit.",
      related: ["Volatility", "Securities Market"],
    },
    "Inflation": {
      description:
        "A general and sustained increase in prices, leading to a decrease in purchasing power.",
      related: ["Interest Rate Hike", "Stagflation"],
    },
    "Investment Policy": {
      description:
        "A company’s guideline that determines the strategy for managing investments.",
      related: ["Dividend Payments", "Bonds"],
    },
    "Long Position": {
      description:
        "Buying a stock or asset expecting its price to rise and profit from selling it later at a higher price.",
      related: ["Portfolio Diversification", "ETF", "Mutual Funds"],
    },
    "Short Position": {
      description:
        "Borrowing and selling an asset expecting to buy it back later at a lower price to profit from the drop.",
      related: [
        "Options (Call, Put)",
        "Forward, Futures Contracts",
        "Derivatives",
      ],
    },
    "Portfolio Diversification": {
      description:
        "Spreading investments across various types and industries to reduce risk.",
      related: ["ETF", "Mutual Funds", "Blue-chip Stocks"],
    },
    "Blue-chip Stocks": {
      description:
        "Shares of large, stable, reputable companies that usually provide consistent income and dividends.",
      related: [
        "Market Capitalization",
        "Long Position",
        "Portfolio Diversification",
      ],
    },
    "OTC (Over-the-Counter) Market": {
      description:
        "A decentralized market where trading happens directly between parties, not via a centralized exchange.",
      related: ["Derivatives", "Hedge Funds", "Forward, Futures Contracts"],
    },
    "Mutual Funds": {
      description:
        "Financial instruments that pool money from multiple investors to create a diversified portfolio managed by professionals.",
      related: ["ETF", "Portfolio Diversification", "Long Position"],
    },
    "Margin Trading": {
      description:
        "Using borrowed money to invest, aiming for higher returns but also taking on greater risk.",
      related: ["Short Position", "Long Position", "Derivatives"],
    },
    "Market Capitalization": {
      description:
        "The total market value of a company, calculated by multiplying the share price by the number of outstanding shares.",
      related: ["Blue-chip Stocks", "ETF", "Stock Valuation"],
    },
    "Fundamental Analysis": {
      description:
        "An investment method analyzing a company’s financial and economic indicators to determine its intrinsic value.",
      related: ["P/E Ratio", "P/B Ratio", "Portfolio Diversification"],
    },
    "Technical Analysis": {
      description:
        "A method of predicting stock movements based on past price and volume trends using charts.",
      related: ["Short Position", "Long Position", "Options"],
    },
    "Macroeconomics and Microeconomics": {
      description:
        "Macroeconomics studies national and global economies. Microeconomics focuses on individual and company-level decisions.",
      related: [
        "Fundamental Analysis",
        "Technical Analysis",
        "Portfolio Diversification",
      ],
    },
    "Derivatives": {
      description:
        "Financial instruments whose value is derived from an underlying asset like stocks, commodities, or currencies.",
      related: ["Options", "Forward, Futures Contracts", "Margin Trading"],
    },
    "Forward, Futures Contracts": {
      description:
        "Agreements to buy/sell assets at a fixed price and future date.",
      related: ["Options", "Short Position", "Derivatives"],
    },
    "Options (Call, Put)": {
      description:
        "Contracts that give the right (but not obligation) to buy (Call) or sell (Put) an asset at a set price and date.",
      related: ["Derivatives", "Margin Trading", "Technical Analysis"],
    },
  },
];

export default terms;
