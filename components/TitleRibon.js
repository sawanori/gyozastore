
const TitleRibon = ({ title, id }) => {
    return (
        <div className="bg-yellow-500 w-5/6 h-20 flex justify-center items-center m-7 rounded-md" id={id}>
            <p className="text-gray-50 text-3xl">{title}</p>
        </div>
    )
}

export default TitleRibon
