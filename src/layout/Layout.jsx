function Layout({children,color}){
    return(
        <div className="bg-gray-100 flex flex-1 flex-col h-screen">
            <div className={`border-8 border-white w-full mx-auto rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 h-screen`}>
                <div className="flex flex-1 flex-col">
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default Layout