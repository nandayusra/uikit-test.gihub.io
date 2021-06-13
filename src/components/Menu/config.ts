import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Farms & Staking',
    icon: 'FarmIcon',
    href: 'https://www.fenixfinance.net/',
  }, 
  {
    label: 'FenixSwap AMM',    
    icon: 'ExchangeIcon',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    icon: 'LiquidityIcon',
    href: '/pool',
  },
  {
    label: 'Tokenomics',
    icon: 'GitbookIcon',
    href: 'https://fenixfinance.gitbook.io/fenix-finance/',
  },
  {
    label: 'Heco Chain (Soon)',
    icon: 'TradeIcon',
    href: '/',
  },
  {
    label: 'NFTs (Soon)',
    icon: 'NftIcon',
    href: '/',
  },
  {
    label: 'Lottery Dapp (Soon)',
    icon: 'TicketIcon',
    href: '/',
  },  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xca87a3b4ef7fbc5b3cced63a19b8029a8680bad4',
      },
      {
        label: 'GoSwapp Chart',
        href: 'https://goswappcharts.web.app/?isbsc=true&tokenId=0xca87a3b4ef7fbc5b3cced63a19b8029a8680bad4',
      },
      {
        label: 'BSC Scan',
        href: 'https://bscscan.com/token/0xca87a3b4ef7fbc5b3cced63a19b8029a8680bad4',
      },
      {
        label: 'Dappradar',
        href: 'https://dappradar.com/rankings/protocol/binance-smart-chain',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/fenix-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/fenix-finance/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'MasterChef',
        href: 'https://bscscan.com/address/0xCf5a0ca89c7bBC15b9F2d722f309d393f4926a76#code',
      },
      {
        label: 'LP Calculator',
        href: 'https://lp-calc.web.app/',
      },
      {
        label: 'Github',
        href: 'https://github.com/fenixfinance/',
      },
      {
        label: 'Docs',
        href: 'https://docs.fenixfinance.net/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@fenixfinanceofficial',
      },
    ],
  },
]

export default config

