import isEqual from 'fast-deep-equal'
import { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '~/store'

function Main() {
  const isAuth = useAuthStore((store) => store.isAuth)
  const toggleAuth = useAuthStore((store) => store.toggleAuth)
  const setSignin = useAuthStore((store) => store.setSignin)
  const go = useAuthStore((store) => store.go)
  const [count, setCount] = useState(0)

  const handlerClick = useCallback(() => setCount((befroe) => befroe + 1), [])

  return (
    <>
      <h1>IS DARK : {isAuth.toString()}</h1>
      <button onClick={toggleAuth}>[zustand]toggle dark</button>

      <h2>{count}</h2>
      <button onClick={handlerClick}>count increment</button>

      <h2>page push</h2>
      <Link to="/about">[LINK]go about</Link>
      <button type="button" onClick={() => go('/about')}>
        [history]go about
      </button>

      <h2>isAuth set true + go about</h2>
      <button onClick={setSignin}>signin</button>
    </>
  )
}

export default memo(Main, isEqual)
