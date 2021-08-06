import React, { ReactElement, useContext, useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { Menu as UikitMenu, Button } from '@pancakeswap/uikit'
// import { Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd } from 'state/farms/hooks'
import Illustration from 'assets/svg/Illustration.svg'
import { useProfile } from 'state/profile/hooks'
import { ReactComponent as MenuOpenIcon } from 'assets/svg/icon/MenuOpenIcon.svg'
import { ReactComponent as WalletIcon } from 'assets/svg/icon/WalletIcon.svg'
import { ReactComponent as TwitterIcon } from 'assets/svg/icon/TwitterIcon.svg'
import { ReactComponent as SocialIcon2 } from 'assets/svg/icon/SocialIcon2.svg'
import { ReactComponent as TelegramIcon } from 'assets/svg/icon/TelegramIcon.svg'
import { useMenuToggle } from 'state/application/hooks'
import Web3 from 'web3';
import axios from 'axios'
import config from './config'


const MenuWrapper = styled.div<{ toggled: boolean }>`
  width: 320px;
  background: #1A1A27;
  border-right: 1px solid #AFAFAF;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: ${(props) => (props.toggled ? '-320px' : 0)};
  transition: left 0.5s;
  z-index: 2;
  height: 100vh;
  & img {
    width: 140px;
  }
  & p {
    font-size: 16px;
    line-height: 19px;
    color: white;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    left: 0;
    width: ${(props) => (props.toggled ? '100px' : '320px')};
    & p {
      font-size: ${(props) => (props.toggled ? '14px' : '16px')};
      line-height: ${(props) => (props.toggled ? '16px' : '19px')};  
    }
  }
`;

const IllustrationWrapper = styled.div`
  width: 100%;
  margin-left: -24px;
  & img {
    width: 100%;
  }
`


const MenuIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  & span {
    color: white;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
  }
  & button {
    background: transparent !important;
    padding: 10px;
    & svg path {
      fill: white;
    }
  }
`

const MenuContentWrapper = styled.div<{ toggled: boolean }>`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  padding: 0 24px 32px;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: ${(props) => (props.toggled ? '0 8px' : '0 24px')};
  }
`

const WalletHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #DE64ED;
  width: 100%;
  height: 56px;
  padding: 0 48px;
  & div {
    display: flex;
    align-items: center;
    & svg {
      margin: -2px 10px 0 0;
    }
  }
`
const TokenItemWrapper = styled.div<{ toggled: boolean }>`
  background: #5E5D62;
  border-radius: 8px;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.toggled ? '4px' : '8px 12px')};
  position: relative;
  & div {
    width: ${(props) => (props.toggled ? '100%' : 'auto')};
  }
  & div p:last-child {
    margin-top: 8px;
  }
  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  background: #DE64ED;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 56px;
  border-radius: 8px;
  cursor: pointer;
`

const MenuItem = styled.a`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  & p {
    margin-left: 12px;
  }
  &:hover {
    background: #DE64ED;
  }
`
const SocialWrapper = styled.div`
  margin: 10px 0 32px;
  & p {
    margin-left: 12px;
    margin-bottom: 10px;
  }
`

const TokenListWrapper = styled.div`
  overflow-y: auto;
  max-height: 300px;
`

const SocialIconsWrapper = styled.div<{ toggled: boolean }>`
  display: flex;
  height: ${(props) => props.toggled ? 'auto' : '48px'};
  & div {
    display: flex;
    width: ${(props) => props.toggled ? '100%' : 'auto'};
    flex-direction: ${(props) => props.toggled ? 'column' : 'row'};
    align-items: center;
    background: rgba(159, 219, 236, 0.2);
    border-radius: 20px;
    & svg {
      margin: ${(props) => props.toggled ? '11px 0' : '0 11px'};
    }
  }
`


const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()

  // new 
  const { activate, deactivate } = useWeb3React()
  // const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)

  const { menuToggled, toggleMenu } = useMenuToggle();

  const [showAllToken, setShowAllToken] = useState(false);

  const [walletbalance, setWalletBalance] = useState('');

  const [getallToken, setAllTokens] = useState([]);

  console.log("getallToken", getallToken)

  // const getAccount= new web3.eth.Iban('account');
  // const getBalance= async()=>{

  // const balance = await  web3.eth.getBalance('account'); 
  // console.log("balance",balance);
  //     setWalletBalance(balance);
  // }

  // useEffect(()=>{
  //   getBalance() 
  // }); 

  const Balance = () => {

    const testnet = 'https://bsc-dataseed1.defibit.io';
    const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
    const balance = account && web3.eth.getBalance(account).then((res) => {
      setWalletBalance(res);
    })
  }

  const getData = `
  {
    ethereum(network: bsc) {
      address(address: {is: "${account}" }){
        balances {
          value
          currency {
            address
            symbol
            tokenType
          }
        }
      }
    }
  }`
  const fetchData = async () => {
    if (account) {
      const queryResult = await axios.post('https://graphql.bitquery.io/', { query: getData });
      if (queryResult.data.data) {
        setAllTokens(queryResult.data.data.ethereum.address[0].balances)

      }
    }
  }

  //     const chartData =[]
  //     result.forEach(e =>{
  //        // console.log('result',e.timeInterval.minute);
  //        chartData.push({
  //            open : parseFloat(e.open_price),
  //            high : parseFloat(e.maximum_price),
  //            low : parseFloat(e.minimum_price),
  //            close: parseFloat(e.close_price),
  //            // time : e.timeInterval.minute
  //            // time : "2021-04-12"
  //        })
  //    })
  //    console.log('before::::' , chartData)

  // };

  useEffect(() => {
    fetchData()
    Balance();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  // const [alldata, setalldata] = useState([]);
  // console.log("alladta",alldata)
  // const getTableData = () => {
  //   axios.get("http://ec2-34-220-133-56.us-west-2.compute.amazonaws.com:1337/approvals")
  //       .then((response) => {
  //           console.log("response", response.data.approvals);
  //           setalldata(response.data.approvals)

  //       })
  //       .catch((error) => { console.log("Error", error); })

  //      }  


  const tokenData = getallToken.map((elem: any) => {
    const { currency, value } = elem;

    return (
      <>
        <TokenItemWrapper toggled={menuToggled}>
          <div>
            <p><b>{currency.symbol}</b></p>
            <p><b>{value}</b></p>
          </div>
          {/* {
                  !menuToggled &&
                  <div>
                    <p><b>{currency.symbol }</b></p>
                    <p><b>${ value}</b></p>
                  </div>
                } */}
        </TokenItemWrapper>


      </>
    )
  })



  return (
    <MenuWrapper toggled={menuToggled}>
      <img src='/main.png' alt='Main Logo' />
      <MenuIconWrapper>
        {!menuToggled && <span>Main Menu</span>
        }
        <Button onClick={() => { toggleMenu(!menuToggled) }}>
          {menuToggled ?
            <svg viewBox='0 0 24 24' width='24px'>
              <path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" />
            </svg>
            :
            <MenuOpenIcon />
          }
        </Button>
      </MenuIconWrapper>
      <WalletHeading>
        <div>
          <WalletIcon />
          {
            !menuToggled && <p>Wallet</p>
          }
        </div>
        {!menuToggled && <p><b>{account ? walletbalance : ''}</b></p>
        }
      </WalletHeading>
      <MenuContentWrapper toggled={menuToggled}>

        {
          account ?
            <div>


              <TokenListWrapper>
                {tokenData}
              </TokenListWrapper>
              <ButtonWrapper style={{ margin: '10px 0' }} onClick={() => { setShowAllToken(!showAllToken) }}>
                <p><b>{showAllToken ? 'Show Some Tokens' : 'Show All Tokens'}</b></p>
              </ButtonWrapper>
            </div>
            : ""

        }

        <MenuItem href="http://ec2-34-222-238-25.us-west-2.compute.amazonaws.com:44863/#/swap">
          {/* <Icon /> */}
          {
            !menuToggled && <div style={{ display: 'flex',color: 'white', alignItems: 'center' }}><img src="/chart-swap.png" alt="logo" style={{ width: '25px' }} /><b>&nbsp; Swap & charts</b></div>
          }
        </MenuItem>
        <MenuItem href="/farms">
          {/* <Icon /> */}
          {
            !menuToggled && <div style={{ display: 'flex',color: 'white', alignItems: 'center' }}><img src="/farms.png" alt="logo" style={{ width: '25px' }} /><b>&nbsp; Farms</b></div>
          }
        </MenuItem>

        <MenuItem href="/pools">
          {/* <Icon /> */}
          {
            !menuToggled && <div style={{ display: 'flex',color: 'white', alignItems: 'center' }}><img src="/pools.svg" alt="logo" style={{ width: '25px' }} /><b>&nbsp; Pools</b></div>
          }
        </MenuItem>
        <MenuItem href="/">
          {/* <Icon /> */}
          {
            !menuToggled && <div style={{ display: 'flex',color: 'white', alignItems: 'center' }}><img src="/predication.png" alt="logo" style={{ width: '25px' }} /><b> Predication </b><span style={{fontSize:'13px'}}>(Coming Soon)</span> </div>
          }
        </MenuItem>
        <MenuItem href="/">
          {/* <Icon /> */}
          {
            !menuToggled && <div style={{ display: 'flex',color: 'white', alignItems: 'center' }}><img src="/ifo.png" alt="logo" style={{ width: '25px' }} /><b>IFO </b><span style={{fontSize:'13px'}}>(Coming Soon)</span></div>
          }
        </MenuItem>
        <SocialWrapper>
          <p><b>Socials</b></p>
          <SocialIconsWrapper toggled={menuToggled}>
            <div>
              <TwitterIcon />
              <SocialIcon2 />
              <TelegramIcon />
            </div>
          </SocialIconsWrapper>
        </SocialWrapper>
        {!menuToggled && 
          <IllustrationWrapper>
            <img src={Illustration} alt='Illustration' />
          </IllustrationWrapper>      
        }
      </MenuContentWrapper>

      {/* <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      
      links={config(t)}
      // profile={{
      //   username: profile?.username,
      //   image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
      //   profileLink: '/profile',
      //   noProfileLink: '/profile',
      //   showPip: !profile?.username,
      // }}
      {...props}
      
    />  */}
    </MenuWrapper>
  )
}

export default Menu
