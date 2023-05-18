

export default function Page({ params }) {
    return (
        <>
            <div className="flex-1 flex items-center justify-center">Hello params.name: {params.name}</div>
        </>
    )
}
