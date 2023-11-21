import { FlexpaLogo } from "../icons/flexpaLogo";

function NavigationBar() {
    return(
        <nav className="bg-slate-300 w-full h-12 rounded-lg px-1 flex">
        <FlexpaLogo className={"w-36"}/>
         </nav>
    )
}

export {NavigationBar}