import Icon from "./assets/icon-person copy.svg"
import { useState } from "react";

function Tip(){

    const [billamount, setBillAmount] = useState(142.55);
    const [people, setPeople] = useState(5);
    const [tipamount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    function price(percent){
        const bill = parseFloat(billamount) || 0;
        let personalbill = bill / people; 
        const tip = Math.round((personalbill * percent) * 100) / 100;
        const totalPerPerson = Math.round((tip + personalbill) * 100) / 100;

        setTipAmount(tip);
        setTotal(totalPerPerson);

    }

    function Reset(){
        setBillAmount(0);
        setPeople(1);
        setTipAmount(0);
        setTotal(0);
    }

    return(
        <div className="bg-[hsl(185,_41%,_84%)] w-full min-h-screen flex items-center justify-center font-spacemono">
            <div className="bg-white rounded-xl w-[60%] h-[350px] flex p-4">
                {/** RIGHT SIDE */}
                <div className="rounded-xl w-1/2 p-2 mr-4">
                    <div className="mb-4">
                        <h3 className="text-[hsl(186,_14%,_43%)]">Bill</h3>
                        <div className="bg-[hsl(185,_41%,_84%)] h-[35px] rounded-lg flex flex-row justify-between p-4 items-center">
                            <span><p className="text-[hsl(184,_14%,_56%)]">$</p></span>
                            <span><input 
                                type="number"
                                value={billamount}
                                onChange={(e) => setBillAmount(e.target.value)} 
                                className="bg-[hsl(185,_41%,_84%)] text-[hsl(183,_100%,_15%)] text-lg w-[80px]"></input></span>
                            
                        </div>
                    </div>

                    <div className=" mt-6">
                        <p className="text-[hsl(186,_14%,_43%)]">Select Tip %</p>
                        <div className="mr-2">
                            <button onClick={() => price(0.05)} className="bg-[hsl(183,_100%,_15%)] mr-4 w-[90px] h-[35px] rounded text-white hover:bg-[hsl(172,_67%,_45%)] hover:text-[hsl(183,_100%,_15%)]">5%</button>
                            <button onClick={() => price(0.10)} className="bg-[hsl(183,_100%,_15%)] mr-4 w-[90px] h-[35px] rounded text-white hover:bg-[hsl(172,_67%,_45%)] hover:text-[hsl(183,_100%,_15%)]">10%</button>
                            <button onClick={() => price(0.15)} className="bg-[hsl(183,_100%,_15%)] m-2 w-[90px] h-[35px] rounded text-white hover:bg-[hsl(172,_67%,_45%)] hover:text-[hsl(183,_100%,_15%)]">15%</button>
                            <button onClick={() => price(0.25)} className="bg-[hsl(183,_100%,_15%)] mr-4 w-[90px] h-[35px] rounded text-white hover:bg-[hsl(172,_67%,_45%)] hover:text-[hsl(183,_100%,_15%)]">25%</button>
                            <button onClick={() => price(0.50)} className="bg-[hsl(183,_100%,_15%)] mr-4 w-[90px] h-[35px] rounded text-white hover:bg-[hsl(172,_67%,_45%)] hover:text-[hsl(183,_100%,_15%)]">50%</button>
                            <button onClick={() => price(0.05)} className="bg-[hsl(185,_41%,_84%)] m-2 w-[90px] h-[35px] rounded text-[hsl(186,_14%,_43%)] hover:bg-[hsl(183,_100%,_15%)] hover:text-[hsl(185,_41%,_84%)] ">Custom</button>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p className="text-[hsl(186,_14%,_43%)]">Number of People</p>
                        <div className="bg-[hsl(185,_41%,_84%)] h-[35px] rounded-lg flex flex-row justify-between p-4 items-center">
                            <span><img src={Icon} alt="icon pic" /></span>
                            <input 
                                type="number"
                                value={people}
                                onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
                                className="bg-[hsl(185,_41%,_84%)] text-[hsl(183,_100%,_15%)] text-lg w-[40px]"></input>
                        </div>
                    </div>

                </div>

                {/** LEFT SIDE */}
                <div className="rounded-xl w-1/2 p-4 bg-[hsl(183,_100%,_15%)] ">

                    <div className="m-4 flex flex-row justify-between items-center">
                        <div >
                            <h1 className="text-white">Tip Amount</h1>
                            <p className="text-[10px] text-[hsl(184,_14%,_56%)]">/ person</p>
                        </div>
                        <h1 className="text-[hsl(172,_67%,_45%)] text-[40px]"><strong>${tipamount.toFixed(2)}</strong></h1>
                    </div>
                    
                    <div className="m-4 flex flex-row justify-between items-center">
                        <div>
                            <h1 className="text-white">Total</h1>
                            <p className="text-[10px] text-[hsl(184,_14%,_56%)]">/ person</p>
                        </div>
                        <h1 className="text-[hsl(172,_67%,_45%)] text-[40px]"><strong>${total.toFixed(2)}</strong></h1>
                    </div>

                    <button onClick={() => Reset()} className="w-full items-center bg-[hsl(172,_67%,_45%)] rounded h-[40px] mt-16 text-[hsl(183,_100%,_15%)]"><strong>RESET</strong></button>
                </div>
            </div>
        </div>
    )
}

export default Tip;