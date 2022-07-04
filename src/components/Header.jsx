import { Logo } from "./Logo"
import '../Global.css'
import'./Logo.css'
import'./Header.css'
import'./InputTask.css'

export function Header () {
  return(
      <header className="App-header">
        <Logo />
      </header>
  )
}