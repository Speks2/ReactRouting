import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar';


export function Layout() {


    return (

     <div className={styles.Layout}> 
     <Navbar/>
       <Outlet/>
     </div>
    

    );
}