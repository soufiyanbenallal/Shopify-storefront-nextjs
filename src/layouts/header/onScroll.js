import React, {
    useEffect,
    useState
} from "react";


export default function OnScroll() {
    const [isHide, setisHide] = useState(false);
    const [prev, setprev] = useState(0);
    const hideBar = () => {
        window.scrollY > prev ?
            !isHide && setisHide(true) :
            isHide && setisHide(false);

        setprev(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", hideBar);
        return () => {
            window.removeEventListener("scroll", hideBar);
        };
    }, [prev]);

    return <div className = {
        `topbar ${isHide ? "hide" : ""}`
    } > topbar < /div>;
}