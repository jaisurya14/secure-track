import Link from "next/link";

export default function Navbar () {
    return (
        <>
            <div className="flex items-center justify-between px-10 h-16 bg-gray-800 text-white">
                <div>
                    <h1>Secure Track</h1>
                </div>
                <div className="flex items-center justify-center space-x-10 list-none">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/crew"}>Crew</Link>
                    </li>
                    <li>
                        <Link href={"/fleet"}>Fleet</Link>
                    </li>
                    <li>
                        <Link href={"/route"}>Route</Link>
                    </li>
                    <li>
                        <Link href={"/student"}>Student</Link>
                    </li>
                    <li>
                        <Link href={"/signin"}>User</Link>
                    </li>
                </div>
            </div>
        </>
    )
}