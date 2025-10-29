

interface MenuCardProps {
    menuItem: string
    description: string
    price: string
}


const Card = ({ menuItem, description, price }: MenuCardProps) => {
    return (
        <div className='flex flex-col items-start justify-center bg-white border-lg p-4 sm:p-5 md:p-6 w-full rounded-xl hover:scale-105 transition-transform h-30 gap-3 md:gap-4 shadow-md hover:shadow-xl'>
            <div className='flex flex-row justify-between items-start w-full gap-2'>
                <p className="text-[#ef3d02] text-lg sm:text-xl md:text-2xl font-semibold leading-tight">{menuItem}</p>
                <p className="text-[#F0C74C] text-base sm:text-lg md:text-xl font-bold flex-shrink-0">{price}</p>
            </div>
            <div>
                <p className="text-black/50 text-xs sm:text-sm md:text-base leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

export default Card