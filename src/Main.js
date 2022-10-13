import hero from "./images/lorenzo apple touch.jpeg"
import arcs from "./images/jelly-two-red-lines-1.png"
import three from "./images/jelly-three-red-lines-2.png"
import movieImg from "./images/red-lorenzo-bg.jpg"

const Main = () => {
    return (
        <main className="text-slate-100">
            <section className="w-full min-h-screen bg-[url('./images/lorenzo-bg-image.png')] bg-no-repeat">
                <div className="w-full min-h-screen bg-[#020d18]/95 p-[50px] flex justify-between items-center">
                    <div className="w-1/2">
                        <h1 className="text-[1.5rem] text-red-600 font-[700]">LORENZO TV</h1>
                        <p className="text-[3.5rem] font-[700]">Unlimited <span className="text-red-600">Movies</span>,<br/>TV Series, Animes, & lots more.</p>
                    </div>
                    <div className="w-[40%] relative">
                        {/**vector art */}
                            <img alt="art" src={arcs} className="w-[200px] h-[200px] absolute top-[-30px] left-[-30px]"/>
                        {/**vector art */}
                        <img alt="hero" src={hero} className="w-full h-auto rounded-full"/>
                    </div>
                </div>
            </section>

            <section className="w-full px-[50px] py-[80px]">
                <div className="w-full flex justify-between">
                    <div className="w-[fit-content] relative">
                        <h2 className="text-[2.2rem] font-[700]">Trending Movies</h2>
                        <img alt="three-red" src={three} className="w-[40px] h-[40px] absolute top-[-20px] right-[-30px]"/>
                    </div>
                    <div className="text-right">
                        <h3 className="text-[1.5rem] font-[600]">Categories</h3>
                        <div className="mt-[40px] flex gap-[30px]">
                            <button className="px-[20px] py-[5px] rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">Movie</button>
                            <button className="px-[20px] py-[5px] rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">TV Series</button>
                            <button className="px-[20px] py-[5px] rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">Anime</button>
                            <button className="px-[20px] py-[5px] rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">Cartoon</button>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-black/30 mt-[50px] p-[30px] rounded-xl flex gap-[30px] mb-[30px]">
                    {/**each movie */}
                    <div className="bg-[#020d18] w-[fit-content] p-[15px] rounded-lg text-center">
                        <img alt="" src={movieImg} className="w-[200px] h-auto mb-[20px]"/>
                        <p className="text-[1.25rem] font-[600] mb-[10px]">Red Notice</p>
                        <div className="flex justify-center gap-[10px] text-[0.65rem] tracking-wider">
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">PG-18</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">HD</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">English</div>
                        </div>
                    </div>
                    {/**each movie */}
                    <div className="bg-[#020d18] w-[fit-content] p-[15px] rounded-lg text-center">
                        <img alt="" src={movieImg} className="w-[200px] h-auto mb-[20px]"/>
                        <p className="text-[1.25rem] font-[600] mb-[10px]">Red Notice</p>
                        <div className="flex justify-center gap-[10px] text-[0.65rem] tracking-wider">
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">PG-18</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">HD</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">English</div>
                        </div>
                    </div>
                     {/**each movie */}
                     <div className="bg-[#020d18] w-[fit-content] p-[15px] rounded-lg text-center">
                        <img alt="" src={movieImg} className="w-[200px] h-auto mb-[20px]"/>
                        <p className="text-[1.25rem] font-[600] mb-[10px]">Red Notice</p>
                        <div className="flex justify-center gap-[10px] text-[0.65rem] tracking-wider">
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">PG-18</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">HD</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">English</div>
                        </div>
                    </div>
                     {/**each movie */}
                     <div className="bg-[#020d18] w-[fit-content] p-[15px] rounded-lg text-center">
                        <img alt="" src={movieImg} className="w-[200px] h-auto mb-[20px]"/>
                        <p className="text-[1.25rem] font-[600] mb-[10px]">Red Notice</p>
                        <div className="flex justify-center gap-[10px] text-[0.65rem] tracking-wider">
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">PG-18</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">HD</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">English</div>
                        </div>
                    </div>
                     {/**each movie */}
                     <div className="bg-[#020d18] w-[fit-content] p-[15px] rounded-lg text-center">
                        <img alt="" src={movieImg} className="w-[200px] h-auto mb-[20px]"/>
                        <p className="text-[1.25rem] font-[600] mb-[10px]">Red Notice</p>
                        <div className="flex justify-center gap-[10px] text-[0.65rem] tracking-wider">
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">PG-18</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">HD</div>
                            <div className="px-[10px] py-[5px] bg-black/50 rounded-md">English</div>
                        </div>
                    </div>
                </div>
                <button className="px-[20px] py-[10px] rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">More movies</button>
            </section>

            <section className="w-full h-[700px] bg-black/30 px-[50px] py-[80px] text-[2rem]">
                <h1>Third section...</h1>
            </section>
        </main>
    );
}
 
export default Main;