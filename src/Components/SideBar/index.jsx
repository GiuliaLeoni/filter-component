import { Filter } from "../Filter"

export const SideBar = () => {
    return (
        <section style={{backgroundColor: 'blue', width: '15rem', height: '100%', left: '0', top: '0', position: 'absolute', overflow: 'auto'}}>
        <Filter />
        </section>
    )
}
