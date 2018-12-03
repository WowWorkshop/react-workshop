import Link from 'next/link'

const NavLink = ({ page }) => <li><Link prefetch href={page}><a>{page}</a></Link></li>

let pages = [
  'index',
  'colorful-text-component',
  'colorful-text',
  'counter-buttons-array',
  'counter-buttons',
  'counter-click',
  'counter-timer',
  'hello-world-component',
  'hello-world-purefunction',
  'input-refer',
  'lifecyle',
  'number-controller-final',
  'number-controller',
  'user-final-array',
  'user-final',
  'user',
  ]
  
  export default () => (
      <ul>
        { pages.map((page) => <NavLink page={page} />) }
      </ul>
  )