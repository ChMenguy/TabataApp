export default function ChoiseButton({value,title,register,nameregister,type}){
    return(
        <div className="my-5 custom-number-input h-10 w-full p-5 justify-center flex">
            <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold ml-2 mt-3">
            {title}
            </label>
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <input {...register(nameregister)} type={type} className=" text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" defaultValue={value} ></input>
        </div>
    </div>
    )
}