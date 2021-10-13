function Layout({children}){
    return(
        <div className="bg-gray-200 flex flex-1 flex-col h-screen">
            <div className="border-2 border-gray-300 w-1/4 h-4/5 mx-auto mt-10 rounded-2xl bg-gray-100">
                <h1 className="text-xl font-serif text-center pt-2 pb-2 bg-gray-300 rounded-t-xl border-gray-500"> 
                    <span className="text-blue-600 font-bold mr-2">
                    TABATA 
                    </span>  
                    <span className="text-red-600 font-bold ml-2 ">
                    TIMER
                    </span>
                </h1>
                <div className="flex flex-1">
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default Layout