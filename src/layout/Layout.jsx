function Layout({children,color}){
    return(
        <div className="bg-gray-500 flex flex-1 flex-col h-screen">
            <div className={`border-8 border-white w-1/4 h-4/5 mx-auto mt-10 rounded-2xl ${color}`}>
                <div className="flex flex-1 flex-col">
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default Layout