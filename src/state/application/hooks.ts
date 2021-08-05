import { useDispatch, useSelector } from 'react-redux'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { AppState,AppDispatch } from '../index'
import {  toggleMenu as _toggleMenu } from './actions'

export function useBlockNumber(): number | undefined {
  const { chainId } = useActiveWeb3React()

  return useSelector((state: AppState) => state.application.blockNumber[chainId ?? -1])
}

export default useBlockNumber
export function useMenuToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const menuToggled = useSelector<
    AppState,
    AppState['application']['menuToggled']
  >((state) => state.application.menuToggled);

  const toggleMenu = (open: boolean) =>
    dispatch(_toggleMenu(open));

  return { menuToggled, toggleMenu };
}