import { Gamepad2 } from 'lucide-react';
import '../css/navbar.css';

export function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Gamepad2 className='gamepad-icon'/>
                <h1 className='logo'>NEO GAMING</h1>
                <div className='navbar-links'>
                    <span>Home</span>
                    <span>About us</span>
                    <span>Reviews</span>
                    <span>News</span>
                </div>
            </div>
        </nav>
    )
}