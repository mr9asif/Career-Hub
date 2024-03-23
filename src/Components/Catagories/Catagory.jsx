

const Catagory = ({item}) => {
    console.log(item);
    const {id, logo, category_name, availability} = item;
    return (
        <div className="rounded-xl bg-blue-100 px-6 flex flex-col justify-center p-6 items-center gap-3">
            <img className="w-[40px] h-[60px]" src={logo} alt="" />
            <h1 className="text-xl font-semibold text-gray-800">{category_name}</h1>
            <h1 className="text-[13px] font-semibold ">{availability}</h1>
        </div>
    );
};

export default Catagory;