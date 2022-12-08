function Card({title,footer,children}){
    return <div>
        <h1 className="text-2xl text-center">{title}</h1>
        <div className="leading-relaxed">
        {children}
        </div>
        <div className="bg-slate-50 pl-3">
            {footer}
        </div>
    </div>
}

const Title=({children})=>{
    return <div className="">{children}</div>
}

const Footer=({children})=>{
    return <div className="">{children}</div>
}

Card.title=Title
Card.footer=Footer

export default Card