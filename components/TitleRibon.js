
const TitleRibon = ({ title, id }) => {
    return (
        <div className="bg-yellow-500 container h-20 flex justify-center items-center m-7 " id={id}>
            <p className="text-gray-50 text-3xl">{title}</p>
        </div>
    )
}

export default TitleRibon
