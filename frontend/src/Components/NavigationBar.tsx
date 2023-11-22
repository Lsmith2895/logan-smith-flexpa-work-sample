import { FlexpaLogo } from "../icons/flexpaLogo";

function NavigationBar() {
    return(
        <nav className="bg-slate-300 w-full h-12 rounded-b-xl px-1 flex mb-10">
        <FlexpaLogo className={"w-36"}/>
         </nav>
    )
}

export {NavigationBar}