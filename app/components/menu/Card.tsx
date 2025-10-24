

interface MenuCardProps {
    menuItem: string
    description: string
    price: string
}


const Card = ({ menuItem, description, price }: MenuCardProps) => {
    return (
        <div className='flex flex-col items-start justify-center bg-white border-lg p-6 w-full rounded-xl hover:scale-105 transition-transform h-30 gap-4 shadow-md hover:shadow-xl'>
            <div className='flex flex-row justify-between w-full'>
                <p className="text-[#ef3d02] text-2xl">{menuItem}</p>
                <p className="text-[#F0C74C] text-xl">{price}</p>
            </div>
            <div>
                <p className="text-black/50 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default Card