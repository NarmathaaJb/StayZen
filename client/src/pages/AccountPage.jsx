import { useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import {Link, Navigate, useParams} from "react-router-dom";

export default function AccountPage(){
    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className="py-2 px-6 bg-primary text-white rounded-full" to={'/account'}>My Profile</Link>
                <Link className="py-2 px-6 bg-primary text-white rounded-full" to={'/account/bookings'}>My bookings</Link>
                <Link className="py-2 px-6 bg-primary text-white rounded-full" to={'/account/places'}>My accommodations</Link>
            </nav>
        </div>
    );
}
