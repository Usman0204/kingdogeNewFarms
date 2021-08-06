import React, { lazy, useState } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { Button, ResetCSS, useMatchBreakpoints, useWalletModal } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { useFetchProfile } from 'state/profile/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { useMenuToggle } from 'state/application/hooks'
import { ConnectorId, SearchIcon } from '@pancakeswap-libs/uikit'
import PyramidImage from 'assets/svg/pyramid.png'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import EasterEgg from './components/EasterEgg'
import history from './routerHistory'
// Views included in the main bundle
import Pools from './views/Pools'



// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Farms = lazy(() => import('./views/Farms'))
const FarmAuction = lazy(() => import('./views/FarmAuction'))

const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})
// starting here

const AppWrapper = styled.div`
  display: flex;
`

const BodyWrapper = styled.div<{ toggled: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
  min-height: calc(100vh - 152px);
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  background: #1A1A27;
  ${({ theme }) => theme.mediaQueries.xl} {
    width: ${(props) => props.toggled ? 'calc(100% - 100px)' : 'calc(100% - 320px)'};
    margin-left: ${(props) => props.toggled ? '100px' : '320px'};
    padding: 0 32px;
  }
`

const BodyOverlay = styled.div<{ toggled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  opacity: 0.2;
  z-index: 9;
  display: ${(props) => props.toggled ? 'none' : 'block'};
  ${({ theme }) => theme.mediaQueries.xl} {
    display: none;
  }
`

const Marginer = styled.div`
  margin-top: 5rem;
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  flex-wrap: wrap;
  & button:first-child {
    background: transparent;
    padding: 0;
    outline: none;
    border: none;
    box-shadow: none;
    margin-right: 12px;
    margin-bottom: 8px;
    height: 32px;
    & svg path {
      fill: white;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      display: none;
    }
  }
`
const SearchWrapper = styled.div`
  display: flex;
  align-item: center;
  max-width: 350px;
  width: calc(100% - 100px);
  position: relative;
  & svg {
    width: 16px;
    height: 19px;
  }
  & input {
    width: calc(100% - 20px);
    background: transparent;
    box-shadow: none;
    border: none;
    margin-left: 8px;
    font-size: 20px;
    margin-top: -5px;
    outline: none;
    color: white;
    &::placeholder {
      color: white;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 16px;
  }
`

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    padding: 12px;
    border-radius: 6px;
    color: white;
    background: #3861FB;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin-right: 24px;
  }
  & > div:last-child {
    display: flex;
    align-items: center;
    & p {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      letter-spacing: 0.02em;
      color: white;
      margin: 0 4px 0 8px;
    }
  }
`


const BannerWrapper = styled.div`
  width: 516px;
  height: 516px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
  & img {
    position: absolute;
    right: -40px;
    bottom: -60px;
  }
  `

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  usePollCoreFarmData()
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  const { account, activate, deactivate } = useWeb3React();
  const { menuToggled, toggleMenu } = useMenuToggle();
  const { isXl } = useMatchBreakpoints();

  const handleLogin = (connectorId: ConnectorId) => {
    if (connectorId === 'walletconnect') {
      // return activate(walletconnect)
    }
    // return activate(injected)
  }
  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)
  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu />
      <BodyWrapper toggled={menuToggled}>
        <BodyOverlay toggled={menuToggled} />
      <TopBar>
        <Button onClick={() => { toggleMenu(!menuToggled) }}>
          <svg viewBox='0 0 24 24' width='24px'>
            <path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" />
          </svg>
        </Button>
        <SearchWrapper>
          <SearchIcon />
          <input placeholder='Search Data' />
        </SearchWrapper>
        {
          account ?
            <AccountWrapper>
              <div>Connected</div>
              <div style={{display:'flex', alignItems:'center', color:'white'}}>
                {/* <EmptyAvatar /> */}
               <img src="./account_circle.png" alt="" /> {account.substring(0, 8)}...{account.substr(account.length - 4)}
                {/* <ChevronDown /> */}
              </div>
            </AccountWrapper>
            :
            <Button onClick={onPresentConnectModal}>Connect</Button>
        }
      </TopBar>
      <BannerWrapper>
                  <img src={PyramidImage} alt='Pyramid' />
                </BannerWrapper>
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Farms />
          </Route>
          <Route exact path="/farms/auction">
            <FarmAuction />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          <Route path="/pools">
            <Pools />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </SuspenseWithChunkError>
      {/* </Menu> */}
      </BodyWrapper>
      <EasterEgg iterations={2} />
      <ToastListener />
      <DatePickerPortal />
    </Router>
  )
}

export default React.memo(App)
