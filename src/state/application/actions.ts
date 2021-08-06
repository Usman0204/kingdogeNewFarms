import { createAction } from '@reduxjs/toolkit'

export const updateBlockNumber = createAction<{ chainId: number; blockNumber: number }>('application/updateBlockNumber')
export const toggleMenu = createAction<boolean>('application/toggleMenu')
export default updateBlockNumber
