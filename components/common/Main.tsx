type Props = {
    id: string;
}

const Main: React.FC<Props> = ({children, id}) => {
    return (
    <div id={id} className="flex flex-col justify-center min-h-screen relative font-body w-full pt-20 md:pt-0">
        {children}
    </div>
    )
}

export default Main;