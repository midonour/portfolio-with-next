function SkillsCards({icon, name}) {
    return (
        <div className="dark:bg-[#1B1B20] bg-[#4a00ac] p-4 rounded-lg flex flex-col items-center gap-2 w-40">
            <div className="text-4xl mb-2">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
        </div>
    )
}

export default SkillsCards
