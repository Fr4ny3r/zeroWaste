

function Hero () {
    return (
        <header className="bg-[var(--color-primary)] flex justify-around items-center relative left-0 w-full h-[750px]">
            <img src="/logo.png" alt="Logo" className="w-48 mx-auto mb-6 left-15 top-0 absolute" />
            <div className="text-center p-8 bg-[var(--color-primary)] bg-opacity-70 flex flex-col gap-9 text-left  rounded-xl">
                <h1 className="text-2xl font-bold text-white">Categorias __</h1>
                <div className="grid grid-cols-3 gap-6">
                    <span className="product block h-50 w-50 p-5 border-3 border-white rounded-xl font-bold">product1</span>
                    <span className="product block h-50 w-50 p-5 border-3 border-white rounded-xl font-bold">product2</span>
                    <span className="product block h-50 w-50 p-5 border-3 border-white rounded-xl font-bold">product3</span>
                </div>

            </div>
            <div className="bg-red-500 w-2/6"></div>
        </header>
    )
}

export default Hero