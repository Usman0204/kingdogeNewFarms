import { createAction } from '@reduxjs/toolkit'
import { TokenList } from '@uniswap/token-lists'

// import { Version } from 'hooks/useToggledVersion'


export type PopupContent =
  | {
      txn: {
        hash: string
        success: boolean
        summary?: string
      }
    }
  | {
      listUpdate: {
        listUrl: string
        oldList: TokenList
        newList: TokenList
        auto: boolean
      }
    }
export const updateBlockNumber = createAction<{ chainId: number; blockNumber: number }>('application/updateBlockNumber')
export const toggleMenu = createAction<boolean>('application/toggleMenu')
export default updateBlockNumber
export const toggleWalletModal = createAction<void>('application/toggleWalletModal')
export const toggleSettingsMenu = createAction<void>('application/toggleSettingsMenu')
export const addPopup = createAction<{ key?: string; removeAfterMs?: number | null; content: PopupContent }>(
  'application/addPopup'
)
export const removePopup = createAction<{ key: string }>('application/removePopup')

// export const setVersion = createAction<Version>('application/setVersion')
export const setSwapType = createAction<string>('application/setSwapType')
