import sideBarImg from "./assets/bg-sidebar-desktop.svg"

function MainPage(){

    return(
        <div className="flex items-center justify-center min-h-screen border-2 border-red-300">
            {/* Card */}
            <div className="border-2 border-blue-300 rounded rounded-xl w-full max-w-4xl h-[80vh] flex">
                {/* left side */}
                <div className=" border-5 border-yellow-500 rounded-xl bg-green w-[30%] m-[8px] relative">
                    <img src={sideBarImg} alt="Side-Bar-Image" className="w-full h-full object-cover" ></img>

                    <div className="absolute top-0 bottom-0 left-0 right-0 p-4 mt-[20px]">
                        {/* YOUR INFO */}
                        <div className="flex mb-[30px]">
                            <div className="flex border-2 border-white rounded-[50%] w-[40px] h-[40px] items-center justify-center text-white hover:bg-[hsl(231,100%,99%)] hover:text-black">
                                1
                            </div>
                            <div className="ml-[5px] text-sm text-white">
                                <div>
                                    <h2 >STEP 1</h2>
                                </div>
                                <div>
                                    <h2><strong>YOUR INFO</strong></h2>
                                </div>
                            </div>
                        </div>
                        
                        {/* SELECT PLAN */}
                        <div className="flex mb-[30px]">
                            <div className="flex border-2 border-white rounded-[50%] w-[40px] h-[40px] items-center justify-center text-white hover:bg-[hsl(231,100%,99%)] hover:text-black">
                                2
                            </div>
                            <div className="ml-[5px] text-sm text-white">
                                <div>
                                    <h2 >STEP 2</h2>
                                </div>
                                <div>
                                    <h2><strong>SELECT PLAN</strong></h2>
                                </div>
                            </div>
                        </div>

                        {/* ADD-ONS */}
                        <div className="flex mb-[30px]">
                            <div className="flex border-2 border-white rounded-[50%] w-[40px] h-[40px] items-center justify-center text-white hover:bg-[hsl(231,100%,99%)] hover:text-black">
                                3
                            </div>
                            <div className="ml-[5px] text-sm text-white">
                                <div>
                                    <h2 >STEP 3</h2>
                                </div>
                                <div>
                                    <h2><strong>ADD-ONS</strong></h2>
                                </div>
                            </div>
                        </div>
                        
                        {/* summary */}
                        <div className="flex mb-[30px]">
                            <div className="flex border-2 border-white rounded-[50%] w-[40px] h-[40px] items-center justify-center text-white hover:bg-[hsl(231,100%,99%)] hover:text-black">
                                4
                            </div>
                            <div className="ml-[5px] text-sm text-white">
                                <div>
                                    <h2 >STEP 4</h2>
                                </div>
                                <div>
                                    <h2><strong>SUMMARY</strong></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="border-2 border-green-300 rounded rounded-xl w-[70%] p-4">

                </div>
            </div>
        </div>
    );

}

export default MainPage;