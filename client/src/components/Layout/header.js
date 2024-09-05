import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoGiftSharp } from 'react-icons/io5'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import SearchInput from '../Form/SearchInput'
import useCategory from './../../hooks/useCategory';
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import "../../style/headerStyles.css"

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();

    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth')
        toast.success("Logout Successfully")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand">
    <div className="brand-container">
        <IoGiftSharp className="brand-icon" />
        <div>
            <h3 className="brand-name">Happy Parcel</h3>
            <h6 className="tag-line">Your Ultimate Shopping Destination!</h6>
        </div>
    </div>
</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <SearchInput />
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">  <b>Home</b></NavLink >
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to={"/categories"}
                                    data-bs-toggle="dropdown"
                                >
                                    <b>Categories</b>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"/categories"}>
                                            All Categories
                                        </Link>
                                    </li>
                                    {categories?.map((c) => (
                                        <li key={c.slug}>
                                            <Link
                                                className="dropdown-item"
                                                to={`/category/${c.slug}`}
                                            >
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            {
                                !auth.user ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/register" className="nav-link" href="#"><b>Register</b></NavLink >
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link" href="#"><b>Log In</b></NavLink >
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        {auth.user.role === 1 ? null : (
                                            <li className="nav-item">
                                                <Badge count={cart?.length} showZero>
                                                    <NavLink to="/cart" className="nav-link" href="#"><b>Cart</b></NavLink >
                                                </Badge>
                                            </li>
                                        )}
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {auth?.user?.name}
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">Dashboard</NavLink></li>
                                                <li>
                                                    <NavLink onClick={handleLogout} to="/login" className="dropdown-item" href="#"><b>Log Out</b></NavLink >
                                                </li>
                                            </ul>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
