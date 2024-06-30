import { useState, useEffect } from "react";
// import Echo from "laravel-echo";
// import Reverb from "reverb-js";

// window.Reverb = Reverb;

// window.Echo = new Echo({
//     broadcaster: "reverb",
//     key: process.env.VITE_REVERB_APP_KEY,
//     wsHost: process.env.VITE_REVERB_HOST.replace(/(^\w+:|^)\/\//, ""),
//     wsPort: process.env.VITE_REVERB_PORT,
//     wssPort: process.env.VITE_REVERB_PORT,
//     disableStats: true,
//     encrypted: process.env.VITE_REVERB_SCHEME === "https",
// });

// export default function Home() {
    const [job, setJobs] = useState(0);

    // useEffect(() => {
    //     const channel = window.Echo.channel("delivery");
    //     const listener = (event) => {
    //         setJobs((prev) => prev + 1);
    //     };
    //     channel.listen("PackageSent", listener);
    //     return () => {
    //         channel.stopListening("PackageSent", listener);
    //     };
    // }, []);
    return (
        <div className="">
            <h1 className="text-blue-600 text-2xl">Home!</h1>

            <h1>Jobs: {job}</h1>
        </div>
    );
}
