const seeder = [
    {
        time: "76767867867",
        judul: "tod"
    },
    {
        time: "32832982",
        judul: "makan"
    },
    {
        time: "87328392372",
        judul: "siah suka blud"
    },
    {
        time: "809832980984",
        judul: "kjalkjlkass"
    },
    {
        time: "2098809280982",
        judul: "aosjkasjjas"
    },
    {
        time: "298882098928932",
        judul: "aksjkajskjsa"
    },
]

export default async function Data(){

    return(
        <div className="w-[200px] h-[150px] overflow-y-scroll">
            <div className="flex flex-col gap-2">
                {seeder.map((seed)=>(
                    <p>{seed.judul}</p>
                ))}
            </div>
        </div>
    )
}