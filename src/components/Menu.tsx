import MenuItem from './MenuItem';
import './menu.css'

const Menu = () => {
    return ( 
        <div className="menu-container">
            <h1>MENU</h1>
            <MenuItem title='booking' url='/booking'/>
        </div>
    );
}
 
export default Menu;