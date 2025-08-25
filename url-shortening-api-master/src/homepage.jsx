import { useState, useEffect } from "react";
import illustration from "./assets/illustration-working.svg";
import illustration2 from "./assets/bg-boost-desktop.svg";
import img2 from "./assets/bg-shorten-desktop.svg"
import instagram from "./assets/icon-instagram.svg"
import facebook from "./assets/icon-facebook.svg"
import pinterest from "./assets/icon-pinterest.svg"
import twitter from "./assets/icon-twitter.svg"
import customizable from "./assets/icon-fully-customizable.svg"
import recognition from "./assets/icon-brand-recognition.svg"
import detailed from "./assets/icon-detailed-records.svg"

function Homepage(){

    const [url, setUrl] = useState("");
    const [links, setLinks] = useState(() => {
        const saved = localStorage.getItem("shortLinks");
        return saved ? JSON.parse(saved) : [];
    });
    const [error, setError] = useState("");
    const [copiedIndex, setCopiedIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem("shortLinks", JSON.stringify(links));
    }, [links]);


    const shortenLink = async () => {
        if (!url) {
            setError("Please add a link");
            return;
        }

        setError("");

        try {
             const res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
             const shortUrl = await res.text();

             if (shortUrl.startsWith("http")) {
                const newLink = {
                    original: url,
                    short: shortUrl,
                };
                setLinks([newLink, ...links]);
                setUrl("");
        } else {
        setError("Invalid link, try again");
      }
    } catch (err) {
        setError("Something went wrong, try again later");
    }
};

const handleKeyPress = (e) => {
    if (e.key === "Enter") {
    shortenLink();
    }
};

const copyToClipboard = (shortLink, index) => {
    navigator.clipboard.writeText(shortLink);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // reset after 2s
};




    return(
        <div className="mt-[40px] ">
            <div className="h-[50%] ml-[150px]">
                {/**Title Bar */}
                <div className="flex justify-between ">
                    <div className="flex items-center space-x-6">
                        <h1 className="text-[40px] mr-[10px]"><strong>Shortly</strong></h1>
                        <h1 className="text-[10px]"><strong>Features</strong></h1>
                        <h1 className="text-[10px]"><strong>Pricing</strong></h1>
                        <h1 className="text-[10px]"><strong>Resources</strong></h1>
                    </div>

                    <div className="mr-[150px] flex items-center space-x-6">
                        <h1>Login</h1>
                        <button className="bg-[hsl(180,_66%,_49%)] w-[80px] h-[30px] rounded-full text-[15px] text-white">Sign up</button>
                    </div>
                </div>


                <div className="flex w-full pb-[40px]">
                    {/**Left Side */}
                    <div className="pr-2 mt-[90px]">
                        <h1 className="text-[60px] leading-none"><strong>More than just shorter links</strong></h1>
                        <p className="text-[20px] pr-[80px]">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                        <button className="bg-[hsl(180,_66%,_49%)] mt-[20px] w-[155px] h-[40px] rounded-full text-white ">Get Started</button>
                    </div>

                    {/**Right Side */}
                    <div className="w-[80%] mt-[60px] ">
                        <img src={illustration} alt="Work Picture"/>
                    </div>
                </div>
            </div>
            
            <div className="relative bg-white">
                <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 w-[90%] z-20">
                    <div className="relative bg-[hsl(257,_27%,_26%)] rounded-lg overflow-hidden">
                        {/* Background Image */}
                        <img 
                            src={img2} 
                            alt="Picture 2" 
                            className="absolute left-1/2 -translate-x-1/2 -top-[75px] w-full rounded-lg bg-[hsl(257,_27%,_26%)]"
                        />

                        {/* Overlay Content */}
                        <div className="relative z-10 flex items-center justify-center py-[40px]">
                            <div className="flex w-full max-w-2xl space-x-4">
                                <input 
                                    type="text" 
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Shorten a link here..." 
                                    className={`flex-grow px-4 py-2 rounded-md bg-white border ${error ? "border-red-500" : "border-gray-200"}`}
                                />
                                <button 
                                onClick={shortenLink}
                                className="px-6 py-2 rounded-md bg-[hsl(180,_66%,_49%)] text-white font-bold">
                                    Shorten It!
                                </button>
                            </div>
                        </div>
                        {error && <p className="text-red-500 ml-6 pb-4">{error}</p>}
                    </div>
                </div>
            </div>
            
            <div className="mt-[120px] px-6 w-full ">
        {links.map((link, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-4 w-full"
          >
            <p className="text-gray-800 font-medium break-all md:max-w-[50%]">{link.original}</p>


            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-3 md:mt-0">
              <a
                href={link.short}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(180,_66%,_49%)] font-semibold"
              >
                {link.short}
              </a>
              <button
                onClick={() => copyToClipboard(link.short, i)}
                className={`px-4 py-1 rounded-md text-white ${
                  copiedIndex === i
                    ? "bg-[hsl(257,_27%,_26%)]"
                    : "bg-[hsl(180,_66%,_49%)]"
                }`}
              >
                {copiedIndex === i ? "Copied!" : "Copy"}
              </button>
              </div>
          </div>
        ))}
      </div>

 

            <div className="h-[50%] bg-[hsl(0,_0%,_95%)] pt-[75px] ">
                <div className="ml-[150px]">
                    <div className=" mr-[150px] ">
                    

                        <div className="mt-[100px]">
                            <div className="text-center">
                                <h1 className="text-[40px]">
                                    <strong>Advanced Settings</strong>
                                </h1>
                                <p className="leading-relaxed max-w-xl mx-auto text-s">Track how your links are performing across the web with our advanced statistics dashboard</p>
                            </div>
                        </div>

                        <div className="relative mt-[100px]">
                            {/* Red Line */}
                            <div className="absolute top-[33%] left-0 right-0 h-2 bg-[hsl(180,_66%,_49%)] "></div>
                            
                            <div className="flex justify-between mt-[90px] relative">
                                <div className="relative w-[300px] bg-white rounded-lg p-4 h-[240px] z-10">
                                    <div className="absolute -top-[40px] left-6 bg-[hsl(257,_27%,_26%)] rounded-full w-[80px] h-[80px] flex items-center justify-center">
                                        <img src={recognition} alt="facebook" className="w-[40px] h-[40px]"></img>
                                    </div>                                    
                                    <h1 className="mt-[80px]"><strong>Brand Recognition</strong></h1>
                                    <p className="text-[15px] mt-[10px]">
                                        Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content.
                                    </p>
                                </div>

                                <div className="relative w-[300px] bg-white rounded-lg shadow-lg p-4 h-[240px] mt-[50px] z-10">
                                    <div className="absolute -top-[40px] left-6 bg-[hsl(257,_27%,_26%)] rounded-full w-[80px] h-[80px] flex items-center justify-center">
                                        <img src={detailed} alt="facebook" className="w-[40px] h-[40px]"></img>
                                    </div>
                                    <h1 className="mt-[80px]"><strong>Detailed Recordes </strong></h1>
                                    <p className="text-[15px] mt-[10px]">
                                        Gain insights into who is clicking your links. Knowing when and where people engain with your content helps inform better decisions.
                                    </p>
                                </div>

                                <div className=" relative w-[300px] bg-white rounded-lg shadow-lg p-4 h-[240px] mt-[100px] mb-[100px] z-10">
                                    <div className="absolute -top-[40px] left-6 bg-[hsl(257,_27%,_26%)] rounded-full w-[80px] h-[80px] flex items-center justify-center">
                                        <img src={customizable} alt="facebook" className="w-[40px] h-[40px]"></img>
                                    </div>
                                    <h1 className="mt-[80px]"><strong>Fully Customizable</strong></h1>
                                    <p className="text-[15px] mt-[10px]">
                                        Improve brand awareness and content discoverablility through customizable links, supercharging audience engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="relative">
                    <img src={illustration2} alt="illustration 2" className="bg-[hsl(257,_27%,_26%)]"></img>
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                        <h1 className="text-[30px] text-white"><strong>Boost your links today</strong></h1>
                        <button className="text-[16px] text-white bg-[hsl(180,_66%,_49%)] w-[160px] h-[40px] rounded-full">Get Started</button>
                    </div>
                </div>

                <div className="w-full bg-[hsl(266,_10%,_14%)] h-[300px] pt-[40px] flex">
                    <div className="flex justify-center w-[550px]">
                        <h1 className="text-white text-[30px] font-extrabold justify-center">Shortly</h1>
                    </div>
                    <div className="w-[150px]  flex flex-col ">
                        <h1 className="mt-[15px] mb-[25px] font-bold text-white">Features</h1>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Link Shortening</p>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Branded Links</p>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Analytics</p>
                    </div>
                    <div className="w-[150px] text-white flex flex-col">
                        <h1 className="mt-[15px] mb-[25px] font-bold">Resources</h1>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Blog</p>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Developers</p>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Support</p>
                    </div>
                    <div className="w-[150px] text-white flex flex-col">
                        <h1 className="mt-[15px] mb-[25px] font-bold">Company</h1>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">About</p>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Our Team</p>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Careers</p>
                        <p className="mb-[12px] text-[hsl(0,_0%,_75%)] text-xs">Contact</p>
                    </div>
                    <div className="w-[20px] flex space-x-[20px] mt-[15px]">
                        <img src={facebook} alt="facebook" className="w-[20px] h-[20px]"></img>
                        <img src={twitter} alt="Twitter" className="w-[20px] h-[20px]"></img>
                        <img src={pinterest} alt="Pinterest" className="w-[20px] h-[20px]"></img>
                        <img src={instagram} alt="Instagram" className="w-[20px] h-[20px]"></img>
                    </div>
            </div>
        </div>        
    )
}

export default Homepage;

