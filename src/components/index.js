import Info from './Info';
import Repos from './Repos';
import User from './User';
import Search from './Search';
import Navbar from './Navbar';

/**
 * This file exports all components from a single source, so they can be imported in a single line
 * I.e :
 * import { Info, Repos, User, Search, Navbar } from '../components';
 *
 * Instead of :
 * import { Info } from '../components/Info.js'
 * import { Repos } from '../components/Repos.js'
 * ...
 */

export { Info, Repos, User, Search, Navbar };
