import { createReducer } from '@reduxjs/toolkit'
import {
  addPopup,
  PopupContent,
  removePopup,
  toggleWalletModal,
  toggleSettingsMenu,
  toggleMenu,
  setSwapType,updateBlockNumber
} from './actions'

type PopupList = Array<{ key: string; show: boolean; content: PopupContent; removeAfterMs: number | null }>
export interface ApplicationState {
  readonly blockNumber: { readonly [chainId: number]: number }

  popupList: PopupList
  walletModalOpen: boolean
  settingsMenuOpen: boolean
  menuToggled: boolean
  swapType: string
}

const initialState: ApplicationState = {
  blockNumber: {},
  menuToggled: false,
  popupList: [],
  walletModalOpen: false,
  settingsMenuOpen: false,
  swapType: 'swap'
}

export default createReducer(initialState, (builder) =>
  builder.addCase(updateBlockNumber, (state, action) => {
    const { chainId, blockNumber } = action.payload
    if (typeof state.blockNumber[chainId] !== 'number') {
      state.blockNumber[chainId] = blockNumber
    } else {
      state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId])
    }
  })
  .addCase(toggleWalletModal, state => {
    state.walletModalOpen = !state.walletModalOpen
  })
  .addCase(toggleSettingsMenu, state => {
    state.settingsMenuOpen = !state.settingsMenuOpen
  })

  .addCase(removePopup, (state, { payload: { key } }) => {
    state.popupList.forEach(p => {
      // if (p.key === key) {
      //   p.show = false
      // }
    })
  })
  .addCase(toggleMenu, state => {
    state.menuToggled = !state.menuToggled
  })

  .addCase(setSwapType, (state, { payload }) => {
    state.swapType = payload
  })
  ,
)
